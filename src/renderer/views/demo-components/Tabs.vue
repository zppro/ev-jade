<template lang="pug">
  div
    .tile.is-ancestor
      .tile.is-parent.is-6
        .tile.is-child.box
          h1.title Alignment
          .block.is-flex
            tabs(animation='slide', :only-fade='false')
              tab-pane(label='Pictures') Pictures Tab
              tab-pane(label='Music') Music Tab
              tab-pane(label='Videos', selected='') Video Tab
              tab-pane(label='Documents', disabled='') Document Tab
          .block.is-flex
            tabs(alignment='centered', :only-fade='false')
              tab-pane(label='Pictures') Pictures Tab
              tab-pane(label='Music') Music Tab
              tab-pane(label='Videos', selected='') Video Tab
              tab-pane(label='Documents', disabled='') Document Tab
          .block.is-flex
            tabs(alignment='right', :only-fade='false')
              tab-pane(label='Pictures') Pictures Tab
              tab-pane(label='Music') Music Tab
              tab-pane(label='Videos') Video Tab
              tab-pane(label='Documents') Document Tab
      .tile.is-parent.is-6
        .tile.is-child.box
          h1.title Sizes
          .block.is-flex
            tabs(size='small')
              tab-pane(label='Pictures') Pictures Tab
              tab-pane(label='Music') Music Tab
              tab-pane(label='Videos') Video Tab
              tab-pane(label='Documents') Document Tab
          .block.is-flex
            tabs(size='medium')
              tab-pane(label='Pictures') Pictures Tab
              tab-pane(label='Music') Music Tab
              tab-pane(label='Videos') Video Tab
              tab-pane(label='Documents') Document Tab
          .block.is-flex
            tabs(size='large')
              tab-pane(label='Pictures') Pictures Tab
              tab-pane(label='Music') Music Tab
              tab-pane(label='Videos') Video Tab
              tab-pane(label='Documents') Document Tab
    .tile.is-ancestor
      .tile.is-parent
        .tile.is-child.box
          h1.title Styles
          tabs(type='boxed')
            tab-pane(label='Pictures') Pictures Tab
            tab-pane(label='Music') Music Tab
            tab-pane(label='Videos') Video Tab
            tab-pane(label='Documents') Document Tab
          tabs(type='toggle')
            tab-pane(label='Pictures') Pictures Tab
            tab-pane(label='Music') Music Tab
            tab-pane(label='Videos') Video Tab
            tab-pane(label='Documents') Document Tab
          tabs(type='boxed', :is-fullwidth='true', alignment='centered', size='large')
            tab-pane(label='Pictures', icon='fa fa-image') Pictures Tab
            tab-pane(label='Music', icon='fa fa-music') Music Tab
            tab-pane(label='Videos', icon='fa fa-film') Video Tab
            tab-pane(label='Documents', icon='fa fa-file-text-o') Document Tab
    .tile.is-ancestor
      .tile.is-parent
        .tile.is-child.box
          h1.title Layouts
          tabs(layout='bottom', :only-fade='false')
            tab-pane(label='Pictures')
              p Simple responsive horizontal navigation tabs, with different styles
              p Simple responsive horizontal navigation tabs, with different styles
            tab-pane(label='Music') Music Tab
            tab-pane(label='Videos') Video Tab
            tab-pane(label='Documents') Document Tab
          tabs(layout='left', :only-fade='false')
            tab-pane(label='Pictures')
              p Simple responsive horizontal navigation tabs, with different styles
              p Simple responsive horizontal navigation tabs, with different styles
            tab-pane(label='Music') Music Tab
            tab-pane(label='Videos') Video Tab
            tab-pane(label='Documents') Document Tab
          tabs(layout='right', animation='fade', :only-fade='false')
            tab-pane(v-for='item in items', :key='item.label', :label='item.label', :icon="'fa fa-' + item.icon")
              | {{ item.desc }}
</template>

<style lang="scss" rel="stylesheet/scss" scoped>
  .tabs {
    margin: 20px;
    .tab-content {
      min-height: 50px;
    }
  }
</style>

<script type="text/ecmascript-6">
  import { Tabs, TabPane } from 'vue-bulma-tabs'

  export default {
    components: {
      Tabs,
      TabPane
    },

    data () {
      return {
        items: [
          {
            icon: 'image',
            label: 'Pictures',
            desc: 'Simple responsive horizontal navigation tabs, with different styles'
          },
          {
            icon: 'music',
            label: 'Music',
            desc: 'Music Tab'
          },
          {
            icon: 'film',
            label: 'Videos',
            desc: 'Video Tab'
          },
          {
            icon: 'file-text-o',
            label: 'Documents',
            desc: 'Document Tab'
          }
        ]
      }
    },

    mounted () {
      this.items.splice(0, 1)
      setInterval(() => {
        this.randomTabs()
      }, 3000)
    },

    methods: {
      randomTabs () {
        this.items.unshift(this.items.pop())
      }
    }
  }
</script>
