import { createApp } from 'vue'
import App from './App.vue'
import { getAnalytics, logEvent } from "firebase/analytics";
import { initBD } from "./services/initFirebase";
import '@/assets/css/style.css'
import '@/assets/css/media.css'

const analytics = getAnalytics(initBD);
logEvent(analytics, 'notification_received');

createApp(App).mount('#app')