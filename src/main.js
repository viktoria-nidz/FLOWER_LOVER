import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/scss/main.scss";
import "./assets/scss/payment_success.scss";
import "./assets/css/fonts.css";
import "./assets/css/icomoon.css";
createApp(App).use(router).use(router).mount("#app");
