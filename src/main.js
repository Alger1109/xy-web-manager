import Vue from 'vue';
import Element from 'element-ui';
import App from '@/App';
import i18n from '@/i18n';
import router from '@/router';
import store from '@/store';
import '@/icons';
import '@/element-ui/theme/index.css';
import '@/assets/scss/aui.scss';

import directives from '@/utils/directives.js';
Vue.use(directives);

Vue.config.productionTip = false;

Vue.use(Element, {
  size: 'default',
  i18n: (key, value) => i18n.t(key, value),
});

new Vue({
  i18n,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
