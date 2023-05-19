import type { TranslateType } from './plugins/i18n';

declare module 'vue' {
  interface ComponentCustomProperties {
    $translate: TranslateType;
  }
}
