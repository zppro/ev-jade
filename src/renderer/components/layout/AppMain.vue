<template lang="pug">
  section.app-main(:style='[stateStyle]')
    .container.is-fluid.is-marginless.app-content
      levelbar
      transition(mode='out-in', enter-active-class='fadeIn', leave-active-class='fadeOut', appear='')
        router-view.animated
</template>
<style lang="scss" rel="stylesheet/scss" scoped>
  @import '~bulma/sass/utilities/variables';
  @import '~bulma/sass/utilities/mixins';

  .app-main {
    padding-top: 50px;
    margin-left: 180px;
    transform: translate3d(0, 0, 0);

    @include mobile() {
      margin-left: 0;
    }

  }

  .app-content {
    padding: 20px;
  }
</style>
<script type="text/ecmascript-6">
  import Levelbar from './Levelbar'
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        sidebar: 'sidebar'
      }),
      stateStyle () {
        return this.sidebar.hidden ? { 'margin-left': 0 } : this.sidebar.shrinked ? { 'margin-left': '45px' } : null
      }
    },

    components: {
      Levelbar
    }
  }
</script>