<template lang="pug">
  div
    .tile.is-ancestor
      .tile.is-parent.is-4
        article.tile.is-child.box
          h1.title Bar Styles
          .block.styles-box
            progress-bar(:value='15', :max='100')
            progress-bar(:type="'primary'", :value='30', :max='100')
            progress-bar(:type="'info'", :value='45', :max='100')
            progress-bar(:type="'success'", :value='60', :max='100')
            progress-bar(:type="'warning'", :value='75', :max='100')
            progress-bar(:type="'danger'", :value='90', :max='100')
      .tile.is-parent.is-4
        article.tile.is-child.box
          h1.title Bar Sizes
          .block
            progress-bar(:size="'small'", :value='15', :max='100', :show-label='true')
            progress-bar(:size="''", :value='30', :max='100', :show-label='true')
            progress-bar(:size="'medium'", :value='45', :max='100', :show-label='true')
            progress-bar(:size="'large'", :value='60', :max='100', :show-label='true')
      .tile.is-parent.is-4
        article.tile.is-child.box
          h1.title Bar Dynamics
          .block
            progress-bar(:type="'success'", :size="'large'", :value='dynamicValue', :max='100', :show-label='true')
            p.control.has-addons
              a.button(@click='plus')
                span.icon.is-small
                  i.fa.fa-plus
              a.button(@click='minus')
                span.icon.is-small
                  i.fa.fa-minus

</template>

<style lang="scss" rel="stylesheet/scss" scoped>
  .button {
    margin: 5px 0 0;
  }
</style>

<script type="text/ecmascript-6">
  import ProgressBar from 'vue-bulma-progress-bar'

  export default {
    components: {
      ProgressBar
    },

    data () {
      return {
        dynamicValue: 60
      }
    },

    methods: {
      plus () {
        if (this.dynamicValue === 100) return
        this.dynamicValue += 10
      },

      minus () {
        if (this.dynamicValue === 0) return
        this.dynamicValue -= 10
      }
    }

  }
</script>
