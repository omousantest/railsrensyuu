import Vue from 'vue'
import Vuex from 'vuex'
import App from '../component/rails_slot_test.vue'
import store from '../store'

Vue.use(Vuex);
Vue.config.productionTip = false

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    name: 'HeaderMenu',
    store: store,
    computed: {
      message() {
        return this.$store.getters.message
      }
    },
    methods: {
      doUpdate(event) {
        //ディスパッチでstoreのアクションを呼んでいる
        //event.targetは押された要素を指すのでここではinputタグを指してる
        //そのvalueなので、event.target.valueは入力された文字
        //つまり、入力された文字を引数として渡してstoreのdoUpdateアクションを呼んでる
        this.$store.dispatch('doUpdate', event.target.value)
      }
    },
    render: h => h(App)
  })
  console.log(app)
})
