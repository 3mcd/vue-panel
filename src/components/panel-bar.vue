<template>
  <v-panel-bar v-style="
    flex-direction: direction,
    flex-basis: size,
    display: display">
    <content></content>
  </v-panel-bar>
</template>

<script>
  module.exports = {
    data: function () {
      return {
        size: '30px',
        display: 'flex'
      };
    },
    props: ['direction', 'size'],
    mixins: [require('../mixins/pass-data')],
    replace: true,
  };
</script>