<template lang="pug">
  div
    .tile.is-ancestor
      .tile.is-parent
        article.tile.is-child.box.notification.is-primary
          h1.title Defaults: handle the touch
          lory
            item 1
            item 2
            item 3
            item 4
            item 5
            item 6
    .tile.is-ancestor
      .tile.is-parent
        article.tile.is-child.box.notification.is-warning
          h1.title Enable mouse events
          lory(:options='{ enableMouseEvents: true }')
            item 1
            item 2
            item 3
            item 4
            item 5
            item 6
    .tile.is-ancestor
      .tile.is-parent
        article.tile.is-child.box.notification.is-info
          h1.title Infinite
          lory(:options='{ enableMouseEvents: true, infinite: 1 }')
            item 1
            item 2
            item 3
            item 4
            item 5
            item 6
    .tile.is-ancestor
      .tile.is-parent
        article.tile.is-child.box.notification.is-danger
          h1.title Rewind
          lory.js_rewind(:options='{ enableMouseEvents: true, infinite: 1, rewind: true }')
            item 1
            item 2
            item 3
            item 4
            item 5
            item 6
    .tile.is-ancestor
      .tile.is-parent
        article.tile.is-child.box.notification.is-primary
          h1.title Width
          lory.js_rewind(:options='{ enableMouseEvents: true, infinite: 1, rewind: true }')
            item(style='width: 220px;') 220
            item(style='width: 190px;') 190
            item(style='width: 150px;') 150
            item(style='width: 130px;') 130
            item(style='width: 250px;') 250
            item(style='width: 180px;') 180
            item(style='width: 200px;') 200
            item(style='width: 140px;') 140
            item(style='width: 120px;') 120
            item(style='width: 240px;') 240
    .tile.is-ancestor
      .tile.is-parent
        article.tile.is-child.box.notification.is-warning
          h1.title Multiple slides to scroll
          lory.columns.is-mobile(:options='{ enableMouseEvents: true, infinite: 4, slidesToScroll: 4 }')
            item.column.is-one-quarter-mobile.is-3 1
            item.column.is-one-quarter-mobile.is-3 2
            item.column.is-one-quarter-mobile.is-3 3
            item.column.is-one-quarter-mobile.is-3 4
            item.column.is-one-quarter-mobile.is-3 5
            item.column.is-one-quarter-mobile.is-3 6
            item.column.is-one-quarter-mobile.is-3 7
            item.column.is-one-quarter-mobile.is-3 8
    .tile.is-ancestor
      .tile.is-parent
        article.tile.is-child.box.notification.is-info
          h1.title Custom easings
          lory.columns.is-mobile.js_rewind(:options="{ enableMouseEvents: true, infinite: 4, slidesToScroll: 4, slideSpeed: 1000, ease: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)', rewind: true }")
            item.column.is-one-quarter-mobile.is-3 1
            item.column.is-one-quarter-mobile.is-3 2
            item.column.is-one-quarter-mobile.is-3 3
            item.column.is-one-quarter-mobile.is-3 4
            item.column.is-one-quarter-mobile.is-3 5
            item.column.is-one-quarter-mobile.is-3 6
            item.column.is-one-quarter-mobile.is-3 7
            item.column.is-one-quarter-mobile.is-3 8
    .tile.is-ancestor
      .tile.is-parent
        article.tile.is-child.box.notification.is-danger
          h1.title Prev & Next
          lory.js_rewind(:options='{ enableMouseEvents: true, infinite: 1, rewind: true }')
            item 1
            item 2
            item 3
            item 4
            item 5
            item 6
            prev(slot='actions', color='#dbdbdb')
            next(slot='actions', color='#dbdbdb')
</template>

<style lang="scss" rel="stylesheet/scss" scoped>
  .slider {
    .frame li {
      height: 130px;
    }

    &.js_rewind {
      .frame li {
        color: #000;
        background: whitesmoke;
      }
    }
  }
</style>

<script type="text/ecmascript-6">
  import { Lory, Item, Prev, Next } from 'vue-lory'

  export default {
    components: {
      Lory,
      Item,
      Prev,
      Next
    }
  }
</script>
