import { createApp } from "vue";
import vuetify from "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./i18n";

createApp(App).use(i18n).use(router).use(store).use(vuetify).mount("#app");
