<template>
  <header>
    <nav>
      <slot></slot>
    </nav>
  </header>
</template>

<script>

export default {
  data: function () {
    return {
      rails_message: "rails vue !"
    }
  },
  //vuexのstoreは基本的にcomputedと使う
  computed: {
      //index.jsでローカルにstoreを登録してるので、$storeが使える
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
