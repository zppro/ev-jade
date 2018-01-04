<template lang="pug">
  nav.navbar.is-bold.is-small.app-nav.animated(:class='{ slideInDown: show, slideOutDown: !show }')
    a.navbar-item.is-hidden-tablet(@click='toggleSidebarVisible({opened: !sidebar.opened})')
      i.fa.fa-bars(aria-hidden='true', v-show='!sidebar.hidden')
    .navbar-start
      .navbar-brand
        a.navbar-item(href='/')
          img(src='~assets/logo.svg', :alt='pkginfo.description')
          tooltip(:label="'v' + pkginfo.version", placement='right', type='success', size='small', :no-animate='true', :always='true', :rounded='true')
            .is-hidden-mobile.is-info
              strong.admin {{pkginfo.description}}
    .navbar-end
      router-link.nav-item(to='/login') Login
        a.nav-item(@click='logout') Logout
</template>

<style lang="scss" rel="stylesheet/scss">
  @import '~bulma/sass/utilities/initial-variables';

  .app-nav {
    position: fixed;
    min-width: 100%;
    z-index: 1024;
    box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1), 0 0 0 1px rgba(17, 17, 17, 0.1);
    background-color: $black;
    a.navbar-item{
      img {
        margin-right: .5rem;
      }
      &:hover, &:active{
        background-color: transparent;
      }
    }
    .navbar-brand {
      .admin {
        color: #36AC70;
      }
    }
  }
</style>

<script type="text/ecmascript-6">
  import Tooltip from 'vue-bulma-tooltip'
  import { mapGetters, mapActions } from 'vuex'
  export default{
    components: {
      Tooltip
    },

    props: {
      show: Boolean
    },

    computed: mapGetters({
      pkginfo: 'pkg',
      sidebar: 'sidebar'
    }),

    methods: {
      ...mapActions([
        'toggleSidebarVisible'
      ]),
      logout () {
      }
    }
  }
</script>
