import { createApp } from 'vue'

import 'normalize.css'

import '/src/styles/index.scss' // global css

import App from './App.vue'
import router from '/src/router'

const app = createApp(App)
app.use(router)

app.mount('#app')
