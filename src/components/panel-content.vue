<template>
  <v-panel-content v-style="flex: flex, flex-grow: grow, flex-shrink: shrink, flex-basis: basis">
    <content></content>
  </v-panel-content>
</template>

<script>
  module.exports = {
    props: {
      flex: String,
      grow: {
        type: Number,
        default: 1
      },
      shrink: Number,
      basis: {
        type: String,
        default: '0'
      }
    },
    replace: true
  };
</script>
