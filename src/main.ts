import './assets/css/global.scss'
import './assets/css/animation.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


createApp(App)
  .use(router)
  .mount('#app')
