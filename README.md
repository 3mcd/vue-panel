#vue-panel

This plugin aims to provide your [Vue](http://vuejs.org/) application with a handful of light, composable, Flexbox-powered components.

###Installation

Just `bower` or `npm install ericmcdaniel/vue-panel`. The package is exposed as a UMD module so you can require it with Browserify/Webpack/etc. or include it in your page via script tag.

To use this plugin with Vue, simply call `Vue.use(require('vue-panel'))`, or `Vue.use(window.VuePanel)` if including in a script tag.

###Use

`<v-panel>` responds to a variety of Flexbox parameters and is useable as both a `display: flex` element and a flex-item:

```html
<v-panel grow="1" shrink="0"></v-panel>
```

`<v-panel>` will display any content inside of the element as it's own "transclusion" content:

```html
<v-panel basis="200px">
    <h3>Foo</h3>
    <p>Lorem ipsum dolor sit amet...</p>
</v-panel>
```

`<v-panel>` responds to `align-items`, `align-self`, `order`, `direction`, (flex-direction) `flex`, `grow` (flex-grow), `shrink` (flex-shrink), `basis` (flex-basis), and `justify` (justify-content).

The plugin provides two more components: `<v-panel-bar>` and `<v-panel-content>`.

`<v-panel-bar>` responds to `direction` and `size` (flex-basis). It is by default 30px wide. It will pass it's `$data.direction` value down to child components automatically so they can respond to a vertical or horizontal bar. This is currently done with a simple Vue mixin, but there should eventually be better support for [communication with transcluded components](https://github.com/yyx990803/vue/issues/923).

`<v-panel-content>` is a simple flex-item that responds to `flex`, `grow` and `shrink`.

```html
<v-panel>
    <v-panel-bar>
        <button on="click: updateContent">Click</button>
    </v-panel-bar>
    <v-panel-content v-ref="content">Foo</v-panel-content>
</v-panel>
```

###Tests

This plugin ships with Jasmine tests in the `test` folder. Open `test/index.html` to run them.