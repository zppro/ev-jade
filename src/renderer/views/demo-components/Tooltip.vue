<template lang="pug">
  div
    .tile.is-ancestor
      .tile.is-parent
        article.tile.is-child.box
          h1.title Placements
          .columns.is-multiline.is-mobile
            .column.is-one-third
              tooltip(label='top-right', placement='top-right')
                button.button.is-primary.has-text-centered
                  span top-right
            .column.is-one-third
              tooltip(label='top', placement='top')
                button.button.is-warning.has-text-centered
                  span top
            .column.is-one-third
              tooltip(label='top-left', placement='top-left')
                button.button.is-danger.has-text-centered
                  span top-left
            .column.is-one-third
              tooltip(label='right', placement='right')
                button.button.is-info.has-text-centered
                  span right
            .column.is-one-third
              tooltip(label='no animate, always, rounded, large, bounce, success', placement='top', type='success', size='large', :no-animate='true', :always='true', :rounded='true')
                button.button.is-success.has-text-centered
                  span no animate, always, rounded, large, bounce, success
            .column.is-one-third
              tooltip(label='left', placement='left')
                button.button.is-info.has-text-centered
                  span left
            .column.is-one-third
              tooltip(label='bottom-right', placement='bottom-right')
                button.button.is-primary.has-text-centered
                  span bottom-right
            .column.is-one-third
              tooltip(label='bottom', placement='bottom')
                button.button.is-warning.has-text-centered
                  span bottom
            .column.is-one-third
              tooltip(label='bottom-left', placement='bottom-left')
                button.button.is-danger.has-text-centered
                  span bottom-left
    .tile.is-ancestor
      .tile.is-parent.is-6
        article.tile.is-child.box
          h1.title Styles
          .columns.is-multiline.is-mobile
            .column
              tooltip(label='info', type='info')
                button.button.is-info.has-text-centered
                  span info
            .column
              tooltip(label='primary', type='primary')
                button.button.is-primary.has-text-centered
                  span primary
            .column
              tooltip(label='success', type='success')
                button.button.is-success.has-text-centered
                  span success
            .column
              tooltip(label='warning', type='warning')
                button.button.is-warning.has-text-centered
                  span warning
            .column
              tooltip(label='danger', type='danger')
                button.button.is-danger.has-text-centered
                  span danger
      .tile.is-parent.is-6
        article.tile.is-child.box
          h1.title Sizes
          .columns.is-multiline.is-mobile
            .column
              tooltip(label='small', type='small', placement='bottom-right')
                button.button.has-text-centered
                  span small
            .column
              tooltip(label='medium', type='medium')
                button.button.has-text-centered
                  span medium
            .column
              tooltip(label='large', size='large', placement='bottom-left')
                button.button.has-text-centered
                  span large
</template>

<style lang="scss" rel="stylesheet/scss" scoped>
  .column {
    margin: 25px auto;
  }

  .button {
    width: 100%;
  }

  .tooltip {
    display: inherit;
  }
</style>

<script type="text/ecmascript-6">
  import Tooltip from 'vue-bulma-tooltip'

  export default {
    components: {
      Tooltip
    }
  }
</script>
