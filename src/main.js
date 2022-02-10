import { createApp } from 'vue'
import App from './App.vue'
import VueScreen from 'vue-screen'
import './index.css'

createApp(App)
    .use(VueScreen)
    .mount('#app')
