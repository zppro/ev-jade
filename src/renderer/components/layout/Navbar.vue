<template lang="pug">
  nav.navbar.is-bold.is-small.app-nav.animated(:class='{ slideInDown: show, slideOutDown: !show }')
    a.navbar-item.is-hidden-tablet(@click='toggleSidebarVisible({opened: !sidebar.opened})')
      i.fa.fa-bars(aria-hidden='true', v-show='!sidebar.hidden')
    .navbar-start
      .navbar-brand
        a.navbar-item(href='/')
          img(src='~assets/logo.svg', :alt='pkginfo.description')
          .is-hidden-mobile.is-info
            strong.admin {{pkginfo.description}}
            .beta-flag.navbar-item.badge.is-badge-danger.is-badge-small(data-badge="BETA")
          <!--tooltip(:label="'v ' + pkginfo.version + ' '", placement='right', type='success', size='small', :no-animate='true', :always='true', :rounded='true')-->
      .navbar-item
        quicklauch.is-hidden-mobile
    .navbar-item.is-hidden-mobile
      span.has-text-white.title
        span(v-if="isAuthed") {{app.user.tenant.name}}
        span(v-if="!isAuthed") [机构名称]
    .navbar-item.is-hidden-mobile
      span.has-text-white.sub-title {{currentTime}}
    .navbar-end
      .navbar-item
        .field.is-grouped
          p.control(v-if="!isAuthed")
            router-link.button.is-info(to="/login")
              span.icon
                i.fa.fa-sign-in
              span.is-hidden-mobile
                | 登录
          p.control(v-if="isAuthed")
            a.button.is-info(@click="logout")
              span.icon
                i.fa.fa-sign-out
              span.is-hidden-mobile
                | 注销
          p.control
            a.button.is-primary
              span.icon
                i.fa.fa-gear
              span.is-hidden-mobile 设置
</template>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import '~bulma/sass/utilities/variables';
  @import '~bulma-tooltip/tooltip.sass';
  @import '~bulma-badge/badge.sass';

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
      .beta-flag {
        display: inline-block;
        padding-right: 0;
        padding-left: .5rem;
        cursor: default;
      }
    }
  }
</style>

<script type="text/ecmascript-6">
  import Quicklauch from './Quicklaunch'
  import { mapGetters, mapActions } from 'vuex'
  export default{
    components: {
      Quicklauch
    },

    props: {
      show: Boolean
    },

    data () {
      return {
        intervalId: null,
        currentTime: null
      }
    },

    computed: {
      ...mapGetters({
        pkginfo: 'pkg',
        sidebar: 'sidebar',
        app: 'app',
        isAuthed: 'isAuthed'
      })
    },

    beforeMount () {
      this.intervalId = window.setInterval(() => {
        this.currentTime = this.moment().format('llll')
      }, 1000)
    },

    beforeDestroy () {
      if (this.intervalId) {
        window.clearInterval(this.intervalId)
      }
    },

    methods: {
      ...mapActions([
        'toggleSidebarVisible',
        'clearUser'
      ]),
      logout () {
        this.clearUser()
        this.$router.push('/login')
      }
    }
  }
</script>
