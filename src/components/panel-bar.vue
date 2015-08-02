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
        class: ''
      };
    },
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
        this.$broadcast('div:direction', this.direction);
      }
    },
    ready: function () {
      var config = this.constructor.pluginConfig;
      console.dir(this.constructor);

      if (config) {
        for (var prop in config) {
          this.$set(prop, config[prop]);
        }
      }
    }
  };
</script>
