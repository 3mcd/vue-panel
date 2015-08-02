<template>
  <div v-class="class" v-style="
    flex: flex,
    flex-grow: grow,
    flex-shrink: shrink,
    flex-basis: basis">
    <content></content>
  </div>
</template>

<script>
  module.exports = {
    data: function () {
      return {
        grow: 1,
        basis: 0
      };
    },
    props: {
      flex: String,
      grow: Number,
      shrink: Number,
      basis: null
    }
  };
</script>
