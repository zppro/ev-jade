<template lang="pug">
  #app
    nprogress-container
    navbar(:show='true')
    sidebar(:show='sidebar.opened && !sidebar.hidden')
</template>

<style lang="scss">
    @import '~animate.css';
    .animated {
        animation-duration: .377s;
    }

    @import '~bulma';

    @import '~wysiwyg.css/wysiwyg.sass';

    $fa-font-path: '~font-awesome/fonts/';
    @import '~font-awesome/scss/font-awesome';

    html {
        background-color: lightskyblue;
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
</style>

<script type="text/ecmascript-6">
  import { mapGetters, mapActions } from 'vuex'
  import NprogressContainer from 'vue-nprogress/src/NprogressContainer'
  import { Navbar, Sidebar } from './components/layout/'
  export default {
    name: 'ev-jade',
    components: {
      NprogressContainer,
      Navbar,
      Sidebar
    },
    beforeMount () {
      const { body } = document
      const WIDTH = 768
      const RATIO = 3

      const handler = () => {
        if (!document.hidden) {
          let rect = body.getBoundingClientRect()
          let isMobile = rect.width - RATIO < WIDTH
          this.toggleDevice(isMobile ? 'mobile' : 'other')
          this.toggleSidebar({
            opened: !isMobile
          })
        }
      }

      document.addEventListener('visibilitychange', handler)
      window.addEventListener('DOMContentLoaded', handler)
      window.addEventListener('resize', handler)
    },
    computed: mapGetters({
      sidebar: 'sidebar'
    }),
    methods: mapActions([
      'toggleDevice',
      'toggleSidebar'
    ])
  }
</script>
