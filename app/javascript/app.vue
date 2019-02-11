<template>
  <div id="app">
    <p>{{ message }}</p>
    <RailsSlotTest>aaa</RailsSlotTest>
  </div>
</template>

<script>
import RailsSlotTest from "./component/rails_slot_test"

export default {
  name: 'App',
  components: {
    RailsSlotTest
  },
  //vuexのstoreは基本的にcomputedと使う
  computed: {
     //main.jsでローカルにstoreを登録してるので、$storeが使える
     //ここではgettersに登録したmessageゲッターを使ってstoreのstateのmessageを取得している
     message(){
       return this.$store.getters.message
     }
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
