import { createApp } from 'vue';
import { createPinia } from 'pinia';

import './style.css';
import Root from './Root.vue';
import router from './router';

const root = createApp(Root)

root.use(createPinia())
root.use(router)
root.mount('#root')
