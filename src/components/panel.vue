<template>
  <div :class="class" :style="[_style, style]">
    <slot></slot>
  </div>
</template>

<script>
  var resolveValue = require('../resolveAlias').value,
      spec = require('../const/panel');

  module.exports = {

    props: spec.props,

    data: function () {
      return {
        style: {}
      }
    },

    computed: {

      parsedAlignSelf: function () {
        return resolveValue('align-self', this.$data.alignSelf);
      },

      parsedAlignItems: function () {
        return resolveValue('align-items', this.$data.alignItems);
      },

      parsedJustifyContent: function () {
        return resolveValue('align-items', this.$data.justify);
      },

      _style: function () {
        return {
          'display': this.display,
          'align-self': this.parsedAlignSelf,
          'align-items': this.parsedAlignItems,
          'justify-content': this.parsedJustifyContent,
          'order': this.order,
          'flex': this.flex,
          'flex-grow': this.grow,
          'flex-shrink': this.shrink,
          'flex-basis': this.basis,
          'flex-direction': this.direction
        };
      }
    }

  };
</script>
