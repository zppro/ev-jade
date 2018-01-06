<template lang="pug">
  .box
    h1.title Your powerful, rich text editor.
    h2.subtitle
      a(href='http://quilljs.com') http://quilljs.com
    quill(:options="{ theme: 'snow' }")
      h2 One Ring to Rule Them All
      p
        a(href='http://en.wikipedia.org/wiki/One_Ring') http://en.wikipedia.org/wiki/One_Ring
      p
        br
      p
        | Three Rings for the
        em Elven-kings
        |  under the sky,
      p
        | Seven for the
        u Dwarf-lords
        span  in halls of stone
        | ,
      p
        | Nine for
        u Mortal Men
        | , doomed to die,
      p
        | One for the
        u Dark Lord
        |  on his dark throne.
      p
        br
      p In the Land of Mordor where the Shadows lie.
      p
        | One Ring to
        strong rule
        |  them all, One Ring to
        strong find
        |  them,
      p
        | One Ring to
        strong bring
        |  them all and in the darkness
        strong bind
        |  them.
      p In the Land of Mordor where the Shadows lie.
</template>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~quill/assets/snow"
</style>

<script type="text/ecmascript-6">
  import Quill from 'vue-bulma-quill'

  export default {
    components: {
      Quill
    }
  }
</script>
