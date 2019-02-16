// Vuexの各関数を定義

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  //state:コンポーネントでいうdata
  state: {
    message: '初期メッセージ'
  },

  //getters:コンポーネントでいうcomputed的なもの
  getters:{
    //messageを使用するgetter
    // stateは上記で定義しているstateのこと
    message(state) {
      return state.message
    }
  },

  //mutations:コンポーネントでいうmethod（setterみたいな）
  //stateを唯一変更できるもの
  mutations: {
    //vuexでは引数をpayloadと呼ぶ
    // stateは上記で定義しているstateのこと。このメソッドを呼び出す際に勝手に代入されている
    //payloadはオブジェクトにするべき（複数の要素を入れられるため）
    setMessage(state, payload){
      state.message = payload.message
    }
  },
  actions: {
    // actionのコミットを使うことでミューテーションを呼び出す
    // {commit}は定型文
    doUpdate({commit}, message){
      commit('setMessage',{message})
    }
  }
})
export default store