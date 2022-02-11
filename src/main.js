import { createApp } from 'vue'
import VueScreen from 'vue-screen'
import App from './App.vue'
import './index.css'

const grid = {
    'xs': '320px',
    'sm': '360px',
    'md': '633px',
    'lg': '1024px',
    'xl': '1200px',
    '2xl': '1473px',
}

createApp(App)
    .use(VueScreen, { grid })
    .mount('#app')
