<template lang="pug">
  div
    .tile.is-ancestor
      .tile.is-parent.is-4
        article.tile.is-child.box
          h1.title Styles
          .block.styles-box
            p
              vb-switch(checked='')
            p
              vb-switch(checked='', type='primary')
            p
              vb-switch(checked='', type='info')
            p
              vb-switch(checked='', type='success')
            p
              vb-switch(checked='', type='warning')
            p
              vb-switch(checked='', type='danger')
      .tile.is-parent.is-4
        article.tile.is-child.box
          h1.title Sizes
          .block
            p
              vb-switch(size='small')
            p
              vb-switch(size='')
            p
              vb-switch(size='medium')
            p
              vb-switch(size='large')
      .tile.is-parent.is-4
        article.tile.is-child.box
          h1.title Dynamics
          .block
            p
              vb-switch(type='success', size='large', :checked='value', v-model='value')
            p
              | {{ switchStat }}
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
  // do not use below code, because `Switch` is svg tag.
  // import Switch from 'vue-bulma-switch'
  import VbSwitch from 'vue-bulma-switch'

  export default {
    components: {
      VbSwitch
    },

    data () {
      return {
        value: false
      }
    },

    computed: {
      switchStat () {
        return this.value ? 'On' : 'Off'
      }
    }
  }
</script>
