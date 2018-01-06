<template lang="pug">
  div
    .tile.is-ancestor
      .tile.is-parent.is-4
        article.tile.is-child.box
          h1.title Styles
          .block.styles-box
            p
              slider(:value='15', :max='100', :step='1', is-fullwidth='')
            p
              slider(type='primary', :value='30', :max='100', :step='10', is-fullwidth='')
            p
              slider(type='info', :value='45', :max='100', :step='5', is-fullwidth='')
            p
              slider(type='success', :value='60', :max='100', :step='20', is-fullwidth='')
            p
              slider(type='warning', :value='75', :max='100', :step='25', is-fullwidth='')
            p
              slider(type='danger', :value='90', :max='100', :step='10', is-fullwidth='')
      .tile.is-parent.is-4
        article.tile.is-child.box
          h1.title Sizes
          .block
            p
              slider(size='small', :value='15', :max='100', is-fullwidth='')
            p
              slider(size='', :value='30', :max='100', is-fullwidth='')
            p
              slider(size='medium', :value='45', :max='100', is-fullwidth='')
            p
              slider(size='large', :value='60', :max='100', is-fullwidth='')
      .tile.is-parent.is-4
        article.tile.is-child.box
          h1.title Dynamics
          .block
            p
              tooltip(type='success', :label='per', placement='top', always='')
                span.tooltip-value
              slider(type='success', size='large', :value='value', :max='100', :step='1', is-fullwidth='', @change='update')
            p
              input.input(type='number', v-model='value', min='0', max='100', number='')
</template>

<style lang="scss" rel="stylesheet/scss" scoped>
  .button {
    margin: 5px 0 0;
  }
  p {
    margin-bottom: 20px;
  }
  .tooltip-value {
    width: 100%;
  }
</style>

<script type="text/ecmascript-6">
  import Tooltip from 'vue-bulma-tooltip'
  import Slider from 'vue-bulma-slider'

  export default {
    components: {
      Tooltip,
      Slider
    },

    data () {
      return {
        value: 23
      }
    },

    computed: {
      per () {
        return this.value + '%'
      }
    },

    methods: {
      update (val) {
        this.value = Number(val)
      }
    }

  }
</script>
