import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { ant } from "./plugins/ant-design-vue";

createApp(App)
  .use(store)
  .use(ant)
  .use(router)
  .mount("#app");
