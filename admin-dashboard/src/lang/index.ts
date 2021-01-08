import type { App } from 'vue';
import type { I18n, I18nOptions } from 'vue-i18n';
import { createI18n } from 'vue-i18n';


let i18n: I18n;

const messages = {
  zh: {
    message: {
     userName:"用户名"
    },
  },
  en: {
    message: {
       userName: "User Name",
    },
  },
}

export function setupI18n(app: App) {
  i18n = createI18n({
    locale:"zh",
    messages

  }) as I18n;
  app.use(i18n);
}

export function getI18n(): I18n {
  return i18n;
}
