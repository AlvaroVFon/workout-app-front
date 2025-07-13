import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { useLogin } from './composables/useLogin'

const app = createApp(App)

app.use(createPinia())
app.use(router)

const { initializeAuth } = useLogin()
initializeAuth()

app.mount('#app')
