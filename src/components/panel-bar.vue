<template>
  <div v-class="class" v-style="
    display: 'flex',
    flex-basis: size,
    flex-direction: direction,
    flex-shrink: shrink">
    <content></content>
  </div>
</template>

<script>
  module.exports = {
    data: function () {
      return {
        direction: 'row',
        display: 'flex',
        shrink: 0,
        size: '30px'
      };
    },
    props: {
      direction: String,
      display: String,
      shrink: Number,
      size: String
    },
    watch: {
      direction: function () {
        this.$broadcast('v-panel-bar:direction', this.direction);
      }
    }
  };
</script>
