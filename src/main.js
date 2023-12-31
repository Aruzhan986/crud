import { createApp } from 'vue';
import App from './App.vue';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import router from "@/router";
import store from '@/store';
import axios from 'axios';


axios.defaults.baseURL = 'http://127.0.0.1:8000/api';

const app = createApp(App);
app.use(router);
app.use(store);


app.config.globalProperties.$http = axios;

app.mount('#app');
