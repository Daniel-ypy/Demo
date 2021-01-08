import { createApp } from "vue";
import App from "./App";
import Antd from "ant-design-vue";
import { Form } from "ant-design-vue";

import "ant-design-vue/dist/antd.less";
import router from "./router";
import store from "./store";

createApp(App)
  .use(Antd)
  .use(Form)
  .use(store)
  .use(router)
  .mount("#app");
