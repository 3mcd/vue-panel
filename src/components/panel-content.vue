<template>
  <v-panel-content v-style="flex: flex, flex-grow: grow, flex-shrink: shrink, flex-basis: basis">
    <content></content>
  </v-panel-content>
</template>

<script>
  module.exports = {
    data: function () {
      return {
        flex: 1,
        grow: null,
        shrink: null,
        basis: null
      };
    },
    props: ['flex', 'grow', 'shrink', 'basis'],
    replace: true
  };
</script>