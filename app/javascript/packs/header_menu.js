import Vue from 'vue'
import Vuex from 'vuex'
import App from '../component/header_menu.vue'
import store from '../store'

Vue.use(Vuex);
Vue.config.productionTip = false

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    el: "HeaderMenu",
    name: 'HeaderMenu',
    store: store,
    render: h => h(App)
  })
  console.log(app)
})
