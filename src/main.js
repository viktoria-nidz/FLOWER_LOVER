import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// import VueAxios from "vue-axios";

import "./assets/scss/main.scss";
import "./assets/scss/payment_success.scss";
import "./assets/css/fonts.css";
import "./assets/css/icomoon.css";
import "./assets/css/hamburgers.min.css";
import "./assets/scss/hamburgers.scss";
// App.prototype.$axios = axios;
// App.use(VueAxios,axios);

createApp(App).use(router).use(router).mount("#app");
