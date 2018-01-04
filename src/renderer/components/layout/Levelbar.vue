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
    box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1);
  }
</style>
<script type="text/ecmascript-6">
  import Breadcrumb from 'vue-bulma-breadcrumb'
  import Tooltip from 'vue-bulma-tooltip'

  export default {
    components: {
      Breadcrumb,
      Tooltip
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
          matched = [{ name: 'Home', path: '/' }].concat(matched)
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