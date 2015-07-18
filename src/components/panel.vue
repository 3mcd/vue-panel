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
    props: {
      alignItems: String,
      alignSelf: String,
      basis: {
        default: 0
      },
      direction: String,
      display: {
        type: String,
        default: 'flex'
      },
      flex: String,
      grow: {
        type: Number,
        default: 1
      },
      justify: String,
      order: Number,
      shrink: Number,
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
        var spec = aliases[name],
            arr, i;
        for (var prop in spec) {
          arr = spec[prop];
          for (i = arr.length - 1; i >= 0; i--) {
            if (value == arr[i]) return prop;
          }
        }
        return value;
      }
    },
    replace: true
  };
</script>
