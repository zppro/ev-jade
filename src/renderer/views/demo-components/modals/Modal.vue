<template lang="pug">
  modal(:visible='visible', @close='close')
    .box
      article.media
        .media-left
          figure.image.is-64x64
            img(src='http://placehold.it/128x128', alt='Image')
        .media-content
          .content
            p
              strong John Smith
              small @johnsmith
              small 31m
              br
              |               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
          nav.level
            .level-left
              a.level-item
                span.icon.is-small
                  i.fa.fa-reply
              a.level-item
                span.icon.is-small
                  i.fa.fa-retweet
              a.level-item
                span.icon.is-small
                  i.fa.fa-heart
</template>

<style lang="scss" rel="stylesheet/scss" scoped>
</style>

<script type="text/ecmascript-6">
  import { Modal } from 'vue-bulma-modal'

  export default {
    components: {
      Modal
    },

    props: {
      visible: Boolean
    },

    methods: {
      close () {
        this.$emit('close')
      }
    }
  }
</script>
