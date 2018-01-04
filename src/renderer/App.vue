<template lang="pug">
  #app
    nprogress-container
    navbar(:show='true')
    sidebar(:show='sidebar.opened && !sidebar.hidden')
    .app-popup(v-if="sidebar.shrinked && sidebar.popup.opened", :style='[stateStyle]') heelo
    app-main
</template>

<style lang="scss" rel="stylesheet/scss">
  @import '~animate.css';
  .animated {
      animation-duration: .377s;
  }

  @import '~bulma';

  @import '~wysiwyg.css/wysiwyg.sass';

  $fa-font-path: '~font-awesome/fonts/';
  @import '~font-awesome/scss/font-awesome';

  html {
      background-color: whitesmoke;
  }

  .nprogress-container {
    position: fixed !important;
    width: 100%;
    height: 50px;
    z-index: 2048;
    pointer-events: none;

    #nprogress {
      $color: #48e79a;

      .bar {
        background: $color;
      }
      .peg {
        box-shadow: 0 0 10px $color, 0 0 5px $color;
      }

      .spinner-icon {
        border-top-color: $color;
        border-left-color: $color;
      }
    }
  }
  .app-popup {
    position: absolute !important;
    left: 0;
    top: 0;
    width: 200px;
    height: 400px;
    z-index: 9999;
    background-color: white;
    box-shadow: 3px 3px 2px rgba(17, 17, 17, 0.1), 0 0 1px rgba(17, 17, 17, 0.1);
  }
</style>

<script type="text/ecmascript-6">
  import { mapGetters, mapActions } from 'vuex'
  import NprogressContainer from 'vue-nprogress/src/NprogressContainer'
  import { Navbar, Sidebar, AppMain } from './components/layout/'
  export default {
    name: 'ev-jade',
    components: {
      NprogressContainer,
      Navbar,
      Sidebar,
      AppMain
    },
    beforeMount () {
      const {body} = document
      const WIDTH = 768
      const RATIO = 3

      const handler = () => {
        if (!document.hidden) {
          let rect = body.getBoundingClientRect()
          let isMobile = rect.width - RATIO < WIDTH
          this.toggleDevice(isMobile ? 'mobile' : 'other')
          this.toggleSidebarVisible({
            opened: !isMobile
          })
        }
      }

      document.addEventListener('visibilitychange', handler)
      window.addEventListener('DOMContentLoaded', handler)
      window.addEventListener('resize', handler)
    },
    computed: {
      ...mapGetters({
        sidebar: 'sidebar'
      }),
      stateStyle () {
        return this.sidebar.shrinked && this.sidebar.popup.opened ? {'left': '55px', 'top': this.sidebar.popup.top + 'px'} : {'left': 0, 'top': 0}
      }
    },
    methods: mapActions([
      'toggleDevice',
      'toggleSidebarVisible'
    ])
  }
</script>
