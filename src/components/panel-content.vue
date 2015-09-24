<template>
  <div :class="class" :style="[_style, style]">
    <slot></slot>
  </div>
</template>

<script>
  module.exports = {

    props: {
      flex: String,
      grow: {
        type: String,
        default: 1
      },
      shrink: String,
      basis: {
        default: 0
      }
    },

    computed: {
      _style: function () {
        return {
          'flex': this.flex,
          'flex-grow': this.grow,
          'flex-shrink': this.shrink,
          'flex-basis': this.basis
        };
      }
    }

  };
</script>
