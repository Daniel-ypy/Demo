import type { App } from 'vue';
import { unref, ref } from 'vue';
import type { I18n } from 'vue-i18n';
import { createI18n } from 'vue-i18n';
import zh from "../lang/zh";
import en from "../lang/en";
import moment from 'moment';

import 'moment/locale/zh-cn';

moment.locale('zh-cn');


let i18n: I18n;
const antConfigLocaleRef = ref<any>(null);
// const messages = {
//   zh: zh,
//   en: {
//     message: {
//        userName: "User Name",
//     },
//   },
// }

export function setupI18n(app: App) {
  i18n = createI18n({
    locale:"zh",
    messages:{
      en:en,
      zh:zh
    }

  }) as I18n;
  app.use(i18n);
}

export function getI18n(): I18n {
  return i18n;
}


