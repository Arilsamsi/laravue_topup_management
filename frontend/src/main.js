import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router'; 

createApp(App)
  .use(router)   // Menggunakan router dalam aplikasi
  .mount('#app');
