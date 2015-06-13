<template>
  <v-panel-bar v-style="
    flex-direction: direction,
    flex-basis: size,
    display: display,
    shrink: shrink">
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