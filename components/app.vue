<template>
  <ns-panel direction="column">
    <ns-panel-bar direction="row" size="{{bar.size}}">
      <ns-panel>
        <button>Home</button>
        <button>Back</button>
      </ns-panel>
      <ns-panel grow="1" justify="end">
        <button>Options</button>
      </ns-panel>
    </ns-panel-bar>
    <ns-panel-content>
      <ns-panel direction="column">
        <p>{{content}}</p>
        <ns-panel direction="row">
          <ns-panel-bar direction="column">
            <button>A</button>
            <button>B</button>
            <button>C</button>
            <button>D</button>
          </ns-panel-bar>
          <ns-panel-content>
            <p>More panel content</p>
          </ns-panel-content>
        </ns-panel>
      </ns-panel>
    </ns-panel-content>
  </ns-panel>
</template>

<script lang="coffee">
  module.exports =
    data:
      bar:
        size: '2em'
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem amet incidunt ea reprehenderit beatae quod praesentium esse iste fugit officia doloribus voluptate, vero reiciendis dolore magni. Totam cupiditate ratione quasi.'
    components:
      'ns-panel': require('./panel.vue')
      'ns-panel-bar': require('./panel-bar.vue')
      'ns-panel-content': require('./panel-content.vue'),
      'ns-actions': require('./actions.vue')
</script>