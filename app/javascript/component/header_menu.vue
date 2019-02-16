<template>
  <header>
    <nav>
      header_menu
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
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
