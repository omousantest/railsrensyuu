<template>
  <div>
    app.vue
    <HeaderMenu></HeaderMenu>
  </div>
  
</template>

<script>
import HeaderMenu from "./component/header_menu"

export default {
  name: 'app',
  components: {
    HeaderMenu
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
