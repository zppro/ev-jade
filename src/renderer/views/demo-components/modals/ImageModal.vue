<template lang="pug">
  image-modal(:visible='visible', @close='close', transition='roll')
    p.image.is-4by3
      img(src='http://placehold.it/1280x960')
</template>

<style lang="scss" rel="stylesheet/scss" scoped>
</style>

<script type="text/ecmascript-6">
  import { ImageModal } from 'vue-bulma-modal'

  export default {
    components: {
      ImageModal
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
