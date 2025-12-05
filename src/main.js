import { createApp } from 'vue'
import '@fortawesome/fontawesome-free/css/fontawesome.css'
import '@fortawesome/fontawesome-free/css/solid.css'
import '@fortawesome/fontawesome-free/css/brands.css'
import '@mdi/font/css/materialdesignicons.css'
import './style.css'
import router from "@/router/index.js";
import vuetify from './plugins/vuetify'

import './style/fonts.css'
import App from './App.vue'

const app = createApp(App);
app.use(vuetify);
app.use(router);
app.mount('#app');
