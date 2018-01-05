<template lang="pug">
  ol.breadcrumb
    li(v-for='(item, index) in list')
      a.active(v-if='isLast(index)', href="#") {{ showName(item) }}
      router-link(:to='item.path', v-else='') {{ showName(item) }}
</template>
<style lang="scss" rel="stylesheet/scss" scoped>
  @import '~bulma/sass/utilities/variables';
  .breadcrumb {
    // > \003e
    // / \2044
    --separator: "\2044";
    list-style: none;
    align-items: center;
    display: flex;
    justify-content: flex-end;

    & > li + li:before {
      padding: 0 5px;
      color: #ccc;
      content: var(--separator, "\2044");
    }

    a.is-active {
      color: $turquoise;
    }

    a.active {
      cursor: default;
      color:  #aaa;
    }
  }
</style>
<script type="text/ecmascript-6">
  export default {
    props: {
      list: {
        type: Array,
        required: true,
        default: () => []
      },
      separator: String
    },

    mounted () {
      if (this.separator) {
        this.$el.style.setProperty('--separator', `"${this.separator}"`)
      }
    },

    methods: {
      isLast (index) {
        return index === this.list.length - 1
      },

      showName (item) {
        return (item.meta && item.meta.label) || item.name
      }
    }
  }
</script>