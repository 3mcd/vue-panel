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
        class: ''
      };
    },
    props: {
      flex: String,
      grow: {
        type: Number,
        default: 1
      },
      shrink: Number,
      basis: {
        default: 0
      }
    }
  };
</script>
