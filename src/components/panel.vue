<style lang="stylus">
  ns-panel
    display flex
</style>

<template>
  <ns-panel v-style="
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

<script lang="coffee">
  _ = require 'lodash'

  resolveAlias = (name, alias) ->
    console.log name, alias
    _.findKey aliases[name], (x) -> _.includes(x, alias)

  commonAliases =
    'flex-start': ['start']
    'flex-end': ['end']

  aliases =
    'align-items': commonAliases
    'align-self': commonAliases
    'justify-content': commonAliases

  module.exports =
    props: ['align-items', 'align-self', 'order', 'direction', 'flex', 'grow', 'shrink', 'basis', 'justify'],
    data: ->
      direction: 'row'
    computed:
      parsedAlignSelf: ->
        resolveAlias 'align-self', @.$data.alignSelf
      parsedAlignItems: ->
        resolveAlias 'align-items', @.$data.alignItems
      parsedJustifyContent: ->
        resolveAlias 'align-items', @.$data.justify
    replace: true
</script>