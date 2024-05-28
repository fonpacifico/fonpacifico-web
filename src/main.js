import { createApp } from 'vue';
import { router } from './server';
import { createPinia } from 'pinia';
import App from './App.vue';

import './sass/main.scss';

createApp(App)
  .use(createPinia())
  .use(router)
  .mount('#app')
