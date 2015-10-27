<template>
  <div :class="class" :style="[_style, style]">
    <slot></slot>
  </div>
</template>

<script>
  var resolveAlias = require('../resolveAlias');

  module.exports = {

    props: {
      alignItems: {
        type: String,
        default: 'stretch'
      },
      direction: {
        type: String,
        default: 'row'
      },
      display: {
        type: String,
        default: 'flex'
      },
      justify: String,
      shrink: {
        type: String,
        default: 0
      },
      size: {
        type: String,
        default: '30px'
      }
    },

    data: function () {
      return {
        style: {}
      }
    },

    computed: {

      parsedAlignItems: function () {
        return resolveAlias('align-items', this.$data.alignItems);
      },

      parsedJustifyContent: function () {
        return resolveAlias('align-items', this.$data.justify);
      },

      _style: function () {
        return {
          'align-items': this.parsedAlignItems,
          'display': this.display,
          'flex-basis': this.size,
          'flex-direction': this.direction,
          'flex-shrink': this.shrink,
          'justify-content': this.parsedJustifyContent,
        };
      }

    },

    watch: {
      direction: function () {
        this.$broadcast('v-panel-bar:direction', this.direction);
      }
    }

  };
</script>
