import { createApp } from 'vue'
import './style.css'
import vuetify from './plugins/vuetify'
import './style/fonts.css'

import App from './App.vue'
const app = createApp(App);
app.use(vuetify);
app.mount('#app');
