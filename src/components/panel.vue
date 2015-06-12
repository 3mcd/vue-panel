<template>
  <ns-panel v-style="
    display: display,
    align-self: parsedAlignSelf,
    align-items: parsedAlignItems,
    justify-content: parsedJustifyContent,
    order: order,
    flex: flex,
    flex-grow: grow,
    flex-shrink: shrink,
    flex-basis: basis,
    flex-direction: direction">
    <content></content>
  </ns-panel>
</template>

<script>
  function resolveAlias(name, alias) {
    var arr = aliases[name];
    for (var i = arr.length - 1; i >= 0; i--) {
      if (alias == arr[i]) return name;
    }
  }

  var common = {
    'flex-start': ['start'],
    'flex-end': ['end']
  };

  var aliases = {
    'align-items': common,
    'align-self': common,
    'justify-content': common
  };

  module.exports = {
    props: ['align-items', 'align-self', 'order', 'direction', 'flex', 'grow', 'shrink', 'basis', 'justify'],
    data: function () {
      return {
        direction: 'row',
        display: 'flex'
      };
    },
    computed: {
      parsedAlignSelf: function () {
        resolveAlias('align-self', this.$data.alignSelf);
      },
      parsedAlignItems: function () {
        resolveAlias('align-items', this.$data.alignItems);
      },
      parsedJustifyContent: function () {
        resolveAlias('align-items', this.$data.justify);
      }
    },
    replace: true
  };
</script>