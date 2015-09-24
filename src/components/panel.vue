<template>
  <div :class="class" :style="[_style, style]">
    <slot></slot>
  </div>
</template>

<script>
  var resolveAlias = require('../resolveAlias');

  module.exports = {

    props: {
      alignItems: String,
      alignSelf: String,
      basis: null,
      direction: String,
      display: {
        type: String,
        default: 'flex'
      },
      flex: String,
      grow: String,
      justify: String,
      order: String,
      shrink: String
    },

    computed: {

      parsedAlignSelf: function () {
        return resolveAlias('align-self', this.$data.alignSelf);
      },

      parsedAlignItems: function () {
        return resolveAlias('align-items', this.$data.alignItems);
      },

      parsedJustifyContent: function () {
        return resolveAlias('align-items', this.$data.justify);
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
