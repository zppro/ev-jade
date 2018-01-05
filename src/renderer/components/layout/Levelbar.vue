<template lang="pug">
  nav.level.app-levelbar
    .level-left
      .level-item
        h3.subtitle.is-5
          strong {{ name }}
    .level-right.is-hidden-mobile
      breadcrumb(:list='list')
</template>
<style lang="scss" rel="stylesheet/scss" scoped>
  .app-levelbar {
    box-shadow: 0 4px 2px rgba(17, 17, 17, 0.1);
  }
</style>
<script type="text/ecmascript-6">
  import Breadcrumb from './Breadcrumb'

  export default {
    components: {
      Breadcrumb
    },

    data () {
      return {
        list: null
      }
    },

    created () {
      this.getList()
    },

    computed: {
      codelink () {
        if (this.$route.meta && this.$route.meta.link) {
          return 'https://github.com/vue-bulma/vue-admin/blob/master/client/views/' + this.$route.meta.link
        } else {
          return null
        }
      },
      name () {
        return this.$route.meta.label || this.$route.name
      }
    },

    methods: {
      getList () {
        let matched = this.$route.matched.filter(item => item.name)
        let first = matched[0]
        if (first && (first.name !== 'Home' || first.path !== '')) {
          matched = [{ name: '首页', path: '/' }].concat(matched)
        }
        this.list = matched
      }
    },

    watch: {
      $route () {
        this.getList()
      }
    }
  }
</script>