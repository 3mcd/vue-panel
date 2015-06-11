<style lang="stylus">
  ns-actions
    display flex
</style>

<template>
  <ns-actions v-style="flex-direction: direction">
    <content></content>
  </ns-actions>
</template>

<script lang="coffee">
  module.exports =
    props: ['direction', 'align']
    replace: true
</script>