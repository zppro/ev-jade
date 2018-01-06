<template lang="pug">
  card-modal(:visible='visible', @close='close', :title='title', transition='zoom')
    .content.has-text-centered
      img(:src='src', height='120', alt='Vue Admin')
    a(@click='open(url)') Vue Admin on GitHub
</template>

<style lang="scss" rel="stylesheet/scss" scoped>
</style>

<script type="text/ecmascript-6">
  import { CardModal } from 'vue-bulma-modal'

  export default {
    components: {
      CardModal
    },

    props: {
      visible: Boolean,
      title: String,
      url: String
    },

    data () {
      return {
        src: require('assets/logo.svg')
      }
    },

    methods: {
      open (url) {
        window.open(url)
      },

      close () {
        this.$emit('close')
      }
    }
  }
</script>
