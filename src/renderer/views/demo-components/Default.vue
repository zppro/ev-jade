<template lang="pug">
  .columns.is-multiline.is-mobile
    .column.is-half-mobile.is-one-third-tablet.is-one-third-desktop(v-for='item in items', v-if='item.name')
      base-card(:title='item.name', :content='getDescription(item)')
        card-footer-item(slot='footer', :href='item.meta && item.meta.repository')
          span.icon.is-small
            i.fa.fa-github(aria-hidden='true')
          |           Repository
        card-footer-item(slot='footer', element='link', :to='{name: item.name}')
          span.icon.is-small
            i.fa.fa-link(aria-hidden='true')
          |           Demo
</template>
<style lang="scss" rel="stylesheet/scss" scoped>
</style>
<script type="text/ecmascript-6">
  import { mapGetters } from 'vuex'
  import { BaseCard, CardFooterItem } from 'vue-bulma-card'

  export default {
    components: {
      BaseCard,
      CardFooterItem
    },

    computed: {
      ...mapGetters({
        parent: 'componententry'
      }),

      parentPath () {
        return this.parent ? this.parent.path : ''
      },

      items () {
        return (this.parent ? this.parent.children : []).filter(item => item.path)
      }
    },

    methods: {
      getActions (item) {
        return [{
          text: 'Repository',
          icon: 'github',
          href: item.meta && item.meta.repository
        }, {
          text: 'Demo',
          icon: 'link',
          name: item.name
        }]
      },

      getDescription (item) {
        return item.meta && item.meta.description
      }
    }

  }
</script>