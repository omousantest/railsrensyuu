// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from '../app.vue'
import store from '../store/index'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  //storeをローカルに登録
  //これでどこからでも使える
  store,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})