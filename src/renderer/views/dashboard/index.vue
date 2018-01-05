<template lang="pug">
  div
    .tile.is-ancestor
      .tile.is-parent
        article.tile.is-child.box
          p.title One
          p.subtitle Subtitle
      .tile.is-parent
        article.tile.is-child.box
          p.title Two
          p.subtitle Subtitle
      .tile.is-parent
        article.tile.is-child.box
          p.title Three
          p.subtitle Subtitle
      .tile.is-parent
        article.tile.is-child.box
          p.title Four
          p.subtitle Subtitle
    .tile.is-ancestor
      .tile.is-parent.is-6
        article.tile.is-child.box
          h4.title Five
          .content
            chart(:type="'doughnut'", :data='chartData')
      .tile.is-parent.is-6
        article.tile.is-child.box
          h4.title Six
          .content
            chart(:type="'pie'", :data='chartData')
    .tile.is-ancestor
      .tile.is-vertical.is-9
        .tile
          .tile.is-parent
            article.tile.is-child.box
              p.title Seven
              p.subtitle Subtitle
              .content
                p
                  | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
          .tile.is-8.is-parent
            article.tile.is-child.box
              p.title Eight
              p.subtitle Subtitle
              .content
                p
                  | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
        .tile
          .tile.is-8.is-parent
            article.tile.is-child.box
              p.title Nine
              p.subtitle Subtitle
              .content
                p
                  | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
          .tile.is-parent
            article.tile.is-child.box
              p.title Ten
              p.subtitle Subtitle
              .content
                p
                  | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
      .tile.is-parent
        article.tile.is-child.box
          .content
            p.title Eleven
            p.subtitle Subtitle
            .content
              p
                | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.
              p
                | Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo.
</template>

<style lang="scss" rel="stylesheet/scss" scoped>
</style>

<script type="text/ecmascript-6">
  import Chart from 'vue-bulma-chartjs'

  export default {
    components: {
      Chart
    },

    data () {
      return {
        data: [300, 50, 100]
      }
    },

    computed: {
      chartData () {
        return {
          labels: [
            'Red',
            'Blue',
            'Yellow'
          ],
          datasets: [{
            data: this.data,
            backgroundColor: [
              '#FF6384',
              '#36A2EB',
              '#FFCE56'
            ]
          }]
        }
      }
    },

    mounted () {
      setInterval(() => {
        // https://github.com/vuejs/vue/issues/2873
        // Array.prototype.$set/$remove deprecated (use Vue.set or Array.prototype.splice instead)
        this.data.forEach((item, i) => {
          this.data.splice(i, 1, Math.ceil(Math.random() * 1000))
        })
      }, 5 * 1000)
    }
  }
</script>
