<template lang="pug">
  aside.menu.app-sidebar.animated(:class='{ slideInLeft: show, slideOutLeft: !show }', :style='[stateStyle]')
    nav.level.menu-label
      .level-left(v-show="!sidebar.shrinked")
        .level-item ,您好
      div(:class='{ "level-item": sidebar.shrinked, "level-right": !sidebar.shrinked }')
        a.level-item.has-text-black(@click="toggleSidebarExpandable({shrinked: !sidebar.shrinked})")
          span.icon
            i.fa(:class='{ "fa-angle-double-left": !sidebar.shrinked, "fa-angle-double-right": sidebar.shrinked }')
    ul.menu-list
      li(v-for='(item, index) in menu')
        router-link(:to='item.path', :exact='true', :aria-shrinked="sidebar.shrinked ? 'true' : 'false'", :aria-expanded="isExpanded(item) ? 'true' : 'false'", v-if='item.path', @click.native='toggle(index, item)', @mouseover.native='mouseover(item, $event)')
          span.icon.is-small
            i(:class="['fa', item.meta.icon]")
          span(v-if="!sidebar.shrinked")          {{ item.meta.label || item.name }}
          span.icon.is-small.is-angle(v-if='item.children && item.children.length')
            i.fa.fa-angle-down
        a(:aria-shrinked="sidebar.shrinked ? 'true' : 'false'", :aria-expanded='isExpanded(item)', v-else='', @click='toggle(index, item)', @mouseover='mouseover(item, $event)')
          span.icon.is-small
            i(:class="['fa', item.meta.icon]")
          span(v-if="!sidebar.shrinked")          {{ item.meta.label || item.name }}
          span.icon.is-small.is-angle(v-if='item.children && item.children.length')
            i.fa.fa-angle-down
        expanding(v-if='item.children && item.children.length')
          ul(v-show='isExpanded(item)')
            li(v-for='subItem in item.children', v-if='subItem.path')
              router-link(:to='generatePath(item, subItem)')
                | {{ subItem.meta && subItem.meta.label || subItem.name }}
</template>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import '~bulma/sass/utilities/variables';
  @import '~bulma/sass/utilities/mixins';

  .app-sidebar {
    position: fixed;
    top: 50px;
    left: 0;
    bottom: 0;
    padding: 20px 0 50px;
    width: 180px;
    min-width: 45px;
    max-height: 100vh;
    height: calc(100% - 50px);
    z-index: 1024 - 1;
    background: #FFF;
    box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1), 0 0 0 1px rgba(17, 17, 17, 0.1);
    overflow-y: auto;
    overflow-x: hidden;

    @include mobile() {
      transform: translate3d(-180px, 0, 0);
    }

    .icon {
      vertical-align: baseline;
      &.is-angle {
        position: absolute;
        right: 10px;
        transition: transform .377s ease;
      }
    }

    .menu-label {
      padding-left: 5px;
    }

    .menu-list {
      li a {
        &[aria-expanded="true"] {
          .is-angle {
            transform: rotate(180deg);
          }
        }
      }

      li a:hover {
        &[aria-shrinked="true"] {
          .is-angle {
            transform: rotate(-90deg);
          }
        }
      }

      li a.is-active {
        background-color: $turquoise;
      }

      li a + ul {
        margin: 0 10px 0 15px;
      }
    }

  }
</style>

<script type="text/ecmascript-6">
  import Expanding from 'vue-bulma-expanding'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    components: {
      Expanding
    },

    props: {
      show: Boolean
    },

    data () {
      return {
        isReady: false
      }
    },

    mounted () {
      let route = this.$route
      if (route.name) {
        this.isReady = true
        this.shouldExpandMatchItem(route)
      }
    },

    computed: {
      ...mapGetters({
        sidebar: 'sidebar',
        menu: 'menuitems',
      }),
      stateStyle () {
        return this.sidebar.shrinked ? {'width': '60px'} : {'width': '180px'}
      }
    },

    methods: {
      ...mapActions([
        'toggleSidebarExpandable',
        'toggleSidebarPopup',
        'expandMenu'
      ]),

      isExpanded (item) {
        return item.meta.expanded
      },

      toggle (index, item) {
        this.expandMenu({
          index: index,
          expanded: !item.meta.expanded
        })
      },

      mouseover (item, $event) {
        if (this.sidebar.shrinked && item.children && item.children.length) {
          let pageHeight = document.body.scrollHeight - document.body.scrollTop
          let clientY = $event.clientY - 20
          let popHeight = 400
          let top = clientY + popHeight - pageHeight > 0 ? pageHeight - popHeight : clientY
          this.toggleSidebarPopup({opened: true, top, children: item.children})
        } else {
          this.toggleSidebarPopup({opened: false})
        }
      },

      shouldExpandMatchItem (route) {
        let matched = route.matched
        let lastMatched = matched[matched.length - 1]
        let parent = lastMatched.parent || lastMatched
        const isParent = parent === lastMatched

        if (isParent) {
          const p = this.findParentFromMenu(route)
          if (p) {
            parent = p
          }
        }

        if ('expanded' in parent.meta && !isParent) {
          this.expandMenu({
            item: parent,
            expanded: true
          })
        }
      },

      generatePath (item, subItem) {
        return `${item.component ? item.path + '/' : ''}${subItem.path}`
      },

      findParentFromMenu (route) {
        const menu = this.menu
        for (let i = 0, l = menu.length; i < l; i++) {
          const item = menu[i]
          const k = item.children && item.children.length
          if (k) {
            for (let j = 0; j < k; j++) {
              if (item.children[j].name === route.name) {
                return item
              }
            }
          }
        }
      }
    },

    watch: {
      $route (route) {
        this.isReady = true
        this.shouldExpandMatchItem(route)
      }
    }

  }
</script>
