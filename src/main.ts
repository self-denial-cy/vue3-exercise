import './assets/css/base.css';
import './assets/css/main.css';
import 'animate.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import i18nPlugin from './plugins/i18n';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(i18nPlugin, {
  greetings: {
    hello: 'Bonjour'
  }
});

app.directive('color', (el, binding) => {
  el.style.color = binding.value;
});

app.directive('backgroundColor', (el, binding) => {
  el.style.backgroundColor = binding.value;
});

app.mount('#app');
