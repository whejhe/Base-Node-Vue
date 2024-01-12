import { createApp } from 'vue'
import App from './App.vue'
import {createPinia} from 'pinia';
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router.js';



const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080/'
})


const pinia = createPinia();

createApp(App)
  .use(VueAxios,axiosInstance)
  .use(router)
  .use(pinia)
  .mount('#app')