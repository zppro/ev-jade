<template lang="pug">
  div
    .tile.is-ancestor
      .tile.is-parent.is-4
        article.tile.is-child.box
          h1.title Nests
          .block.is-flex
            collapse
              collapse-item(title='Components')
                | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. @bulmaio. #css #responsive
              collapse-item(title='Elements')
                | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. @bulmaio. #css #responsive
              collapse-item(title='Nests')
                collapse
                  collapse-item(title='Nest Child')
                    | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. @bulmaio. #css #responsive
      .tile.is-parent.is-4
        article.tile.is-child.box
          h1.title Accordion
          .block.is-flex
            collapse(accordion='')
              collapse-item(title='Components')
                | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. @bulmaio. #css #responsive
              collapse-item(title='Elements', selected='')
                | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. @bulmaio. #css #responsive
              collapse-item(title='Nests')
                collapse
                  collapse-item(title='Nest Child')
                    | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. @bulmaio. #css #responsive
      .tile.is-parent.is-4
        article.tile.is-child.box
          h1.title Default Selected
          .block.is-flex
            collapse(accordion='', is-fullwidth='')
              collapse-item(title='Components')
                | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. @bulmaio. #css #responsive
              collapse-item(title='Elements')
                | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. @bulmaio. #css #responsive
              collapse-item(title='Nests', selected='')
                collapse
                  collapse-item(title='Nest Child', selected='')
                    | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. @bulmaio. #css #responsive
</template>

<style lang="scss" rel="stylesheet/scss" scoped>
  .tile.is-child {
    width: 100%;
  }
</style>

<script type="text/ecmascript-6">
  import { Collapse, Item as CollapseItem } from 'vue-bulma-collapse'

  export default {
    components: {
      Collapse,
      CollapseItem
    }
  }
</script>
