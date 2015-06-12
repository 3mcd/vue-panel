<template>
  <v-panel-content v-style="flex: flex">
    <content></content>
  </v-panel-content>
</template>

<script>
  module.exports = {
    data: function () {
      return {
        flex: 1
      };
    },
    replace: true
  };
</script>