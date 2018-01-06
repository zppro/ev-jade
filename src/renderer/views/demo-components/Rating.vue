<template lang="pug">
  div
    .tile.is-ancestor
      .tile.is-parent.is-6
        article.tile.is-child.box
          h1.title Sugarcoated rating.
          h2.subtitle Accessible to everyone.
          .block.styles-box
            form
              rating(:items='items', legend='Default star rating:')
            form
              rating(kind='slot', :items='items', legend='Slot machine rating:', :value='1')
            form
              rating(kind='grow', :items='items', legend='Growing star rating:', :value='2')
            form
              rating(kind='growRotate', :items='items', legend='Growing & rotating star rating:', :value='3')
            form
              rating(kind='fade', :items='items', legend='Fading star rating:', :value='4')
            form
              rating(kind='checkmark', :items='items', legend='Checkmark rating:', :value='5')
      .tile.is-parent.is-6
        article.tile.is-child.box
          h1.title Dynamics
          .block
            form
              rating(:items='items', legend='Default star rating:', :value='value', @change='update')
            p
              | {{ value }}
</template>

<style lang="scss" rel="stylesheet/scss" scoped>
  .button {
    margin: 5px 0 0;
  }
  p {
    margin-bottom: 20px;
  }
</style>

<script type="text/ecmascript-6">
  import Rating from 'vue-bulma-rating'

  export default {
    components: {
      Rating
    },

    data () {
      return {
        value: 3,
        items: [
          {
            title: '5 Stars',
            value: 5
          },
          {
            title: '4 Stars',
            value: 4
          },
          {
            title: '3 Stars',
            value: 3
          },
          {
            title: '2 Stars',
            value: 2
          },
          {
            title: '1 Star',
            value: 1
          }
        ]
      }
    },

    methods: {
      update (val) {
        this.value = val
      }
    }

  }
</script>
