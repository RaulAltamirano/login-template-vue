import { createApp } from 'vue'
import '../src/tailwind.css';
import App from './App.vue'

import 'vuetify/styles'

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createVuetify } from 'vuetify';
import { createRouter, createWebHashHistory } from 'vue-router';
import routes from './routes/routes';
import { createPinia } from 'pinia';

const pinia = createPinia();
const vuetify = createVuetify({ components, directives })
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

createApp(App)
  .use(router)
  .use(vuetify)
  .use(pinia)
  .mount('#app')
