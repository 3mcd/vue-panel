<style lang="stylus">
  ns-panel-bar
    display flex
</style>

<template>
  <ns-panel-bar v-style="
    flex-direction: direction,
    flex-basis: size">
    <content></content>
  </ns-panel-bar>
</template>

<script lang="coffee">
  module.exports =
    data: ->
      size: '30px'
    props: ['direction', 'size']
    replace: true
    mixins: [require('../mixins/pass-data')]
</script>