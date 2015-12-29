<template>
  <div :class="class" :style="[_style, style]">
    <slot></slot>
  </div>
</template>

<script>
  var resolveValue = require('../resolveAlias').value,
      spec = require('../const/panel-bar');

  module.exports = {

    props: spec.props,

    data: function () {
      return {
        style: {}
      }
    },

    computed: {

      parsedAlignItems: function () {
        return resolveValue('align-items', this.$data.alignItems);
      },

      parsedJustifyContent: function () {
        return resolveValue('align-items', this.$data.justify);
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
