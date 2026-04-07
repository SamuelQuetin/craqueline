import { ViteSSG } from 'vite-ssg'
import '@fortawesome/fontawesome-free/css/fontawesome.css'
import '@fortawesome/fontawesome-free/css/solid.css'
import '@fortawesome/fontawesome-free/css/brands.css'
import '@mdi/font/css/materialdesignicons.css'
import './style.css'
import { routes } from "@/router/index.js";
import vuetify from './plugins/vuetify'

import './style/fonts.css'
import App from './App.vue'

export const createApp = ViteSSG(
  App,
  { routes },
  ({ app, router, routes, isClient, initialState }) => {
    app.use(vuetify)
  }
)
