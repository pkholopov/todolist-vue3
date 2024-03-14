import { createApp } from 'vue'
import {createPinia} from "pinia";
import 'primeicons/primeicons.css'
import Toast from "vue-toastification";
import 'vue-toastification/dist/index.css'

import './style.css'
import App from './App.vue'
import {i18n} from "@/translation/i18n.js";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(Toast);
app.use(i18n);
app.mount('#app');
