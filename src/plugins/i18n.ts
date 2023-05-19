import type { Plugin } from 'vue';

const i18nPlugin: Plugin = {
  install(app, options) {
    app.config.globalProperties.$translate = (key: string) => {
      return key.split('.').reduce((o, i) => {
        if (o) return o[i];
      }, options);
    };
    app.provide('i18n', options);
  }
};

export default i18nPlugin;

export type TranslateType = (key: string) => any;
