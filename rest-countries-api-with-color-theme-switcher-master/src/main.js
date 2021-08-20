import { createApp } from 'vue'
import VueAxios from 'vue-axios'
import axios from 'axios'

import App from './App.vue'

import router from './routes'

import './index.css'

const app = createApp(App)

app.use(VueAxios, axios)

app.use(router)

app.provide('axios', app.config.globalProperties.axios)

app.mount('#app')
