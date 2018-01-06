<template lang="pug">
  div
    .tile.is-ancestor
      .tile.is-parent.is-4
        article.tile.is-child.box
          h1.title Classic
          a.button.is-primary.is-large.modal-button(@click='openModalBasic') Launch example modal
      .tile.is-parent.is-4
        article.tile.is-child.box
          h1.title Image
          a.button.is-primary.is-large.modal-button(@click='openModalImage') Launch image modal
      .tile.is-parent.is-4
        article.tile.is-child.box
          h1.title Card
          a.button.is-primary.is-large.modal-button(@click='openModalCard()') Launch modal card
    modal(:visible='showModal', @close='closeModalBasic')
</template>

<style lang="scss" rel="stylesheet/scss" scoped>
</style>

<script type="text/ecmascript-6">
  import Vue from 'vue'
  import Modal from './modals/Modal'
  import ImageModal from './modals/ImageModal'
  import CardModal from './modals/CardModal'

  const ImageModalComponent = Vue.extend(ImageModal)
  const CardModalComponent = Vue.extend(CardModal)

  const openImageModal = (propsData = {
    visible: true
  }) => {
    return new ImageModalComponent({
      el: document.createElement('div'),
      propsData
    })
  }

  const openCardModal = (propsData = {
    visible: true
  }) => {
    return new CardModalComponent({
      el: document.createElement('div'),
      propsData
    })
  }

  export default {
    components: {
      Modal
    },

    data () {
      return {
        showModal: true,
        cardModal: null,
        imageModal: null
      }
    },

    methods: {
      openModalBasic () {
        this.showModal = true
      },

      closeModalBasic () {
        this.showModal = false
      },

      openModalImage () {
        const imageModal = this.imageModal || (this.imageModal = openImageModal())
        imageModal.$children[0].active()
      },

      openModalCard () {
        const cardModal = this.cardModal || (this.cardModal = openCardModal({
          title: 'Modal title',
          url: this.$store.state.pkg.homepage
        }))
        cardModal.$children[0].active()
      }
    }
  }
</script>
