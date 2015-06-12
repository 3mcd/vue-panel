<template>
  <ns-panel-content v-style="flex: flex">
    <content></content>
  </ns-panel-content>
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