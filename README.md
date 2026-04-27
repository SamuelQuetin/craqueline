# Vue 3 + Vite

Ce projet utilise l'API Google Places pour récupérer les horaires d'ouverture automatiquement.

## Configuration des horaires (Google Business)

Le frontend appelle `api/hours.php` et la clé Google doit être lue côté serveur.

### Option recommandée (OVH/local sans variables d'environnement)

1. Copiez `api/google_places_key.local.example.php` vers `api/google_places_key.local.php`.
2. Remplacez la valeur par votre vraie clé Google Places.
3. Le fichier `api/google_places_key.local.php` est ignoré par Git (non versionné).

### Option alternative

Vous pouvez aussi définir une variable d'environnement serveur `GOOGLE_PLACES_API_KEY` (ou `GOOGLE_PLACES_KEY_FILE` pour définir un chemin de fichier de clé personnalisé).

### Dev uniquement (fallback)

Le fallback Vite peut utiliser `VITE_GOOGLE_PLACES_API_KEY` pour l'appel proxy `/google/...`, mais ce mode expose la clé au navigateur et n'est pas recommandé en production.

---

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).
