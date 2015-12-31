<template>
  <div :class="class" :style="[_style, style]">
    <slot></slot>
  </div>
</template>

<script>
  var spec = require('../const/panel-content');

  module.exports = {

    props: spec.props,

    data: function () {
      return {
        style: {}
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
