<template lang="pug">
  div
    .tile.is-ancestor
      .tile.is-parent.is-6
        article.tile.is-child.box
          h1.title Tracker Styles
          .block.styles-box
            progress-tracker
              step-item(v-for='(item, index) in [1, 2, 3, 4, 5]', :key='index', :is-complete='item < 3', :is-active='item === 3')
            progress-tracker
              step-item(v-for='(item, index) in [1, 2, 3, 4, 5]', :key='index', :marker="item + ''")
            progress-tracker
              step-item(v-for="(item, index) in [1, 2, 3, 'A', 'B']", :key='index', :marker="item + ''")
            progress-tracker(border='')
              step-item(v-for="(item, index) in [1, 2, 3, 'A', 'B']", :key='index', :marker="item + ''")
            progress-tracker(spaced='')
              step-item(v-for="(item, index) in [1, 2, 3, 'A', 'B']", :key='index', :marker="item + ''")
      .tile.is-parent.is-6
        article.tile.is-child.box
          h1.title Tracker Dynamics
          .block
    .tile.is-ancestor
      .tile.is-parent
        article.tile.is-child.box
          h1.title Tracker Alignments
          .block
            progress-tracker
              step-item(v-for='(item, index) in [1, 2, 3, 4, 5]', :key='index')
            progress-tracker(alignment='center')
              step-item(v-for='(item, index) in [1, 2, 3, 4, 5]', :key='index')
            progress-tracker(alignment='right')
              step-item(v-for='(item, index) in [1, 2, 3, 4, 5]', :key='index')
            progress-tracker(word='')
              step-item(v-for='item in stepItems', :key='item.title', :marker='item.marker', :title='item.title')
            progress-tracker(word='', word-align='center')
              step-item(v-for='item in stepItems', :key='item.title', :marker='item.marker', :title='item.title')
            progress-tracker(word='', text-align='right')
              step-item(v-for='item in stepItems', :key='item.title', :marker='item.marker', :title='item.title')
            progress-tracker(text='')
              step-item(v-for='item in stepItems', :key='item.title', :marker='item.marker', :title='item.title')
            progress-tracker(text='', alignment='center')
              step-item(v-for='item in stepItems', :key='item.title', :marker='item.marker', :title='item.title')
            progress-tracker(text='', alignment='right')
              step-item(v-for='item in stepItems', :key='item.title', :marker='item.marker', :title='item.title')

</template>

<style lang="scss" rel="stylesheet/scss" scoped>
  .button {
    margin: 5px 0 0;
  }
</style>

<script type="text/ecmascript-6">
  import ProgressTracker, { StepItem } from 'vue-bulma-progress-tracker'

  export default {
    components: {
      ProgressTracker,
      StepItem
    },

    data () {
      return {
        stepItems: [
          {
            title: 'Step 1'
          },
          {
            title: 'Step 2'
          },
          {
            title: 'Step 3'
          },
          {
            title: 'Step 4'
          },
          {
            title: 'Step 5'
          }
        ]
      }
    }

  }
</script>
