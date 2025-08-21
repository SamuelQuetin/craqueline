import express from 'express'
import fetch from 'node-fetch'
import fs from 'fs/promises'
import path from 'path'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

// ====== Config Instagram Basic Display ======
const IG_APP_ID = process.env.IG_APP_ID
const IG_APP_SECRET = process.env.IG_APP_SECRET
const IG_REDIRECT_URI = process.env.IG_REDIRECT_URI || `http://localhost:${PORT}/api/instagram/callback`

const TOKEN_FILE = path.resolve('./server/token-store.json')
const GRAPH = 'https://graph.instagram.com'
const AUTHZ = 'https://api.instagram.com/oauth/authorize'
const TOKEN = 'https://api.instagram.com/oauth/access_token'

// Utils: lire/écrire le token
async function loadToken() {
    try { return JSON.parse(await fs.readFile(TOKEN_FILE, 'utf8')) } catch { return null }
}
async function saveToken(obj) {
    await fs.writeFile(TOKEN_FILE, JSON.stringify(obj, null, 2))
}

// ====== Routes ======

// 1) Démarrer le login Instagram
app.get('/api/instagram/login', (req, res) => {
    const url = new URL(AUTHZ)
    url.searchParams.set('client_id', IG_APP_ID)
    url.searchParams.set('redirect_uri', IG_REDIRECT_URI)
    url.searchParams.set('scope', 'user_profile,user_media')
    url.searchParams.set('response_type', 'code')
    res.redirect(url.toString())
})

// 2) Callback OAuth: échange code -> short token -> long token
app.get('/api/instagram/callback', async (req, res) => {
    const code = req.query.code
    if (!code) return res.status(400).send('Missing code')
    try {
        // short-lived
        const form = new URLSearchParams({
            client_id: IG_APP_ID,
            client_secret: IG_APP_SECRET,
            grant_type: 'authorization_code',
            redirect_uri: IG_REDIRECT_URI,
            code
        })
        const r1 = await fetch(TOKEN, { method: 'POST', body: form })
        const d1 = await r1.json()
        if (!r1.ok || d1.error_type) throw new Error(JSON.stringify(d1))

        // long-lived
        const r2 = await fetch(`${GRAPH}/access_token?grant_type=ig_exchange_token&client_secret=${IG_APP_SECRET}&access_token=${d1.access_token}`)
        const d2 = await r2.json()
        if (!r2.ok || d2.error) throw new Error(JSON.stringify(d2))

        const payload = {
            access_token: d2.access_token,
            token_type: 'bearer',
            expires_in: d2.expires_in,   // ≈ 60 jours
            obtained_at: Date.now()
        }
        await saveToken(payload)
        res.send('✅ Token Instagram enregistré. Vous pouvez fermer cette page.')
    } catch (e) {
        console.error('OAuth error', e)
        res.status(500).send('OAuth error')
    }
})

// 3) Proxy des derniers médias (à consommer côté Vue)
app.get('/api/instagram/latest', async (req, res) => {
    const limit = Number(req.query.limit || 8)
    const t = await loadToken()
    if (!t?.access_token) return res.status(401).json({ error: 'NO_TOKEN' })
    try {
        const url = `${GRAPH}/me/media?fields=id,media_type,media_url,thumbnail_url,permalink,caption,timestamp&limit=${limit}&access_token=${t.access_token}`
        const r = await fetch(url)
        const data = await r.json()
        if (!r.ok || data.error) return res.status(500).json({ error: data.error || r.statusText })
        res.json(data.data)
    } catch (e) {
        res.status(500).json({ error: e.message })
    }
})

// 4) Refresh du long-lived token (Instagram: max 1x/jour)
async function refreshTokenIfNeeded() {
    const t = await loadToken()
    if (!t?.access_token) return
    // refresh toutes les 24h
    const last = t.refreshed_at || t.obtained_at || 0
    const oneDay = 24 * 60 * 60 * 1000
    if (Date.now() - last < oneDay) return
    try {
        const r = await fetch(`${GRAPH}/refresh_access_token?grant_type=ig_refresh_token&access_token=${t.access_token}`)
        const d = await r.json()
        if (d.error) throw new Error(JSON.stringify(d))
        await saveToken({
            access_token: d.access_token || t.access_token,
            token_type: 'bearer',
            expires_in: d.expires_in ?? t.expires_in,
            obtained_at: t.obtained_at,
            refreshed_at: Date.now()
        })
        console.log('🔄 Token Instagram rafraîchi')
    } catch (e) {
        console.warn('Refresh failed', e.message)
    }
}

// planifie un refresh quotidien
setInterval(refreshTokenIfNeeded, 6 * 60 * 60 * 1000) // check toutes les 6h
refreshTokenIfNeeded()

app.listen(PORT, () => {
    console.log(`API server on http://localhost:${PORT}`)
})