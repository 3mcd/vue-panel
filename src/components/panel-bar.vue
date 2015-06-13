<template>
  <v-panel-bar v-style="
    flex-direction: direction,
    flex-basis: size,
    flex-shrink: shrink,
    display: display">
    <content></content>
  </v-panel-bar>
</template>

<script>
  module.exports = {
    data: function () {
      return {
        size: '30px',
        display: 'flex',
        shrink: 0
      };
    },
    props: ['direction', 'size'],
    mixins: [require('../mixins/pass-data')],
    replace: true,
  };
</script>