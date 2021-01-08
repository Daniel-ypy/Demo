import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { ant } from "./plugins/ant-design-vue";
import { setupI18n } from "./lang/index";

const app = createApp(App);
setupI18n(app);
app
  .use(store)
  .use(ant)
  .use(router)
  .mount("#app");
