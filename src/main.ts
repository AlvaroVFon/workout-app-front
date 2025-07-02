import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { useAuth } from './composables/useAuth'

const app = createApp(App)

app.use(createPinia())
app.use(router)

const { initializeAuth } = useAuth()
initializeAuth()

app.mount('#app')
