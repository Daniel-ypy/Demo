// Load on demand
// This module only introduces components globally before login
import type { App } from 'vue';

import {
  // need
  Form,
  Input,
  Row,
  Col,
  Spin,
  Button,
  Card
} from 'ant-design-vue';
import 'ant-design-vue/dist/antd.less';

export function ant(app: App<Element>) {
  // need
  // Here are the components required before registering and logging in
  app.use(Form).use(Input).use(Row).use(Col).use(Spin).use(Button).use(Card);
}
