<style lang="stylus" scoped>
h1
  color #0f0
img
  border 1px solid #0f0
  padding 16px
:deep(button)
  padding 16px
  font-size 16px
</style>

<template lang="pug">
main
  h1 2试2
  img(alt="Vue logo", src="./assets/logo.png")
  HelloWorld(msg="您好")
</template>

<script lang="coffee">
import HelloWorld from './vue/HelloWorld.vue'

export default {
  components:{
    HelloWorld
  }
  setup:=>
    console.log "good"
}
</script>
