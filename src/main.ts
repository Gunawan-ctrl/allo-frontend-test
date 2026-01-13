/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'


import Notifications from "@kyvg/vue3-notification";

// stores with pinia
import { createPinia } from "pinia";

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

const app = createApp(App)
const pinia = createPinia();
app.use(pinia)
app.use(Notifications);

registerPlugins(app)

app.mount('#app')
