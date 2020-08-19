import { createApp } from 'vue'
import App from './App.vue'

import 'normalize.css'

import router from '/src/router'

const app = createApp(App)
app.use(router)

app.mount('#app')
