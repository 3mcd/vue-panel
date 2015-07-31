<template>
  <v-panel-bar v-style="
    display: 'flex',
    flex-basis: size,
    flex-direction: direction,
    flex-shrink: shrink">
    <content></content>
  </v-panel-bar>
</template>

<script>
  module.exports = {
    props: {
      direction: {
        type: String,
        default: 'row'
      },
      display: {
        type: String,
        default: 'flex'
      },
      shrink: {
        type: Number,
        default: 0
      },
      size: {
        type: String,
        default: '30px'
      }
    },
    watch: {
      direction: function () {
        this.$broadcast('v-panel-bar:direction', this.direction);
      }
    }
  };
</script>
