<template>
  <v-panel v-style="
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
  </v-panel>
</template>

<script>
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
        display: 'flex',
        alignItems: null,
        alignSelf: null,
        order: null,
        flex: null,
        grow: null,
        shrink: null,
        basis: null,
        justify: null
      };
    },
    computed: {
      parsedAlignSelf: function () {
        return this.resolveAlias('align-self', this.$data.alignSelf);
      },
      parsedAlignItems: function () {
        return this.resolveAlias('align-items', this.$data.alignItems);
      },
      parsedJustifyContent: function () {
        return this.resolveAlias('align-items', this.$data.justify);
      }
    },
    methods: {
      resolveAlias: function (name, value) {
        var arr = aliases[name];
        for (var i = arr.length - 1; i >= 0; i--) {
          if (value == arr[i]) return name;
        }
        return value;
      }
    },
    replace: true
  };
</script>