<template lang="pug">
  nav.app-quicklaunch
    router-link.icon.is-active.tooltip.is-tooltip-bottom.is-tooltip-info(to='/', data-tooltip="首页", @mouseenter.native="toggleQuickLaunchIcon('home', true)", @mouseleave.native="toggleQuickLaunchIcon('home', false)")
      span.fa-stack
        i.fa.fa-circle.fa-stack-2x.has-text-info
        i.fa.fa-home.fa-stack-1x.animated(:class='{ fadeInUp: focusStatus["home"], "fa-inverse": focusStatus["home"] }')
    span.icon
      span.fa-stack
        i.fa.fa-circle.fa-stack-2x.has-text-success
        i.fa.fa-bell.fa-stack-1x
    span.icon
      span.fa-stack
        i.fa.fa-circle.fa-stack-2x.has-text-warning
        i.fa.fa-flag.fa-stack-1x
    span.icon.is-active.tooltip.is-tooltip-bottom.is-tooltip-danger(data-tooltip="当前窗口最大化", @mouseenter="toggleQuickLaunchIcon('window-maximize', true)", @mouseleave="toggleQuickLaunchIcon('window-maximize', false)")
      span.fa-stack
        i.fa.fa-circle.fa-stack-2x.has-text-danger
        i.fa.fa-window-maximize.fa-stack-1x.animated(:class='{ fadeInUp: focusStatus["window-maximize"], "fa-inverse": focusStatus["window-maximize"] }')
</template>
<style lang="scss" rel="stylesheet/scss" scoped>
  @import '~bulma/sass/utilities/variables';
  @import '~bulma-tooltip/tooltip.sass';
  .app-quicklaunch{
    a {
      color: $black;
    }
    display: flex;
    align-items: center;
    margin-left: 1rem;
    .icon {
      width: 2rem;
      height: 2rem;
    }
    .is-active{
      cursor: pointer;
    }
  }
</style>
<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        focusStatus: {
          home: false,
          bell: false,
          flag: false,
          'window-maximize': false
        }
      }
    },

    components: {
    },

    methods: {
      toggleQuickLaunchIcon (iconKey, isFocus) {
        this.focusStatus[iconKey] = isFocus
      }
    }
  }
</script>