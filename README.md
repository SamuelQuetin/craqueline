# Vue 3 + Vite

Ce projet utilise l'API Google Places pour récupérer les horaires d'ouverture automatiquement.

## Configuration des horaires (Google Business)

Pour que les horaires soient récupérés dynamiquement depuis Google Business Profile :

1. Obtenez une clé API Google Maps (Places API) sur la [Google Cloud Console](https://console.cloud.google.com/).
2. Créez un fichier `.env.local` à la racine du projet (s'il n'existe pas).
3. Ajoutez la ligne suivante avec votre clé :
   ```
   VITE_GOOGLE_PLACES_API_KEY=VOTRE_CLE_API_ICI
   ```
4. Si aucune clé n'est fournie, le site utilisera les horaires par défaut définis dans `src/services/hoursService.js`.

---

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).
