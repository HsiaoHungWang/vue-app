import { createApp } from 'vue' //node_modules資料夾載入vue物件的 createApp方法
import router from './router'
import App from './App.vue'  //匯入 App.vue進來

// import './assets/main.css'

createApp(App).use(router).mount('#app')
