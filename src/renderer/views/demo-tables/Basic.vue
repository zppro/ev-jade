<template lang="pug">
  div
    .tile.is-ancestor
      .tile.is-parent
        article.tile.is-child.box
          h4.title Table
          table.table
            thead
              tr
                th Name
                th Instrument
                th
                th
            tfoot
              tr
                th Name
                th Instrument
                th
                th
            tbody
              tr
                td Misty Abbott
                td Bass Guitar
                td.is-icon
                  a(href='#')
                    i.fa.fa-twitter
                td.is-icon
                  a(href='#')
                    i.fa.fa-instagram
              tr
                td John Smith
                td Rhythm Guitar
                td.is-icon
                  a(href='#')
                    i.fa.fa-twitter
                td.is-icon
                  a(href='#')
                    i.fa.fa-instagram
              tr
                td Robert Mikels
                td Lead Guitar
                td.is-icon
                  a(href='#')
                    i.fa.fa-twitter
                td.is-icon
                  a(href='#')
                    i.fa.fa-instagram
              tr
                td Karyn Holmberg
                td Drums
                td.is-icon
                  a(href='#')
                    i.fa.fa-twitter
                td.is-icon
                  a(href='#')
                    i.fa.fa-instagram
    .tile.is-ancestor
      .tile.is-parent.is-4
        article.tile.is-child.box
          h4.title Table is-bordered
          table.table.is-bordered
            thead
              tr
                th One
                th Two
            tbody
              tr
                td Three
                td Four
      .tile.is-parent.is-4
        article.tile.is-child.box
          h4.title Table is-striped
          table.table.is-striped
            thead
              tr
                th One
                th Two
            tbody
              tr
                td Three
                td Four
              tr
                td Five
                td Six
              tr
                td Seven
                td Eight
      .tile.is-parent.is-4
        article.tile.is-child.box
          h4.title Table is-narrow
          table.table.is-narrow
            thead
              tr
                th One
                th Two
            tbody
              tr
                td Three
                td Four
              tr
                td Five
                td Six
              tr
                td Seven
                td Eight
    .tile.is-ancestor
      .tile.is-parent
        article.tile.is-child.box
          h4.title Table Responsive
          .table-responsive
            table.table.is-bordered.is-striped.is-narrow
              thead
                tr
                  th
                  th Open source projects
                  th Year started
                  th(colspan='3') Links
              tfoot
                tr
                  th
                  th Open source projects
                  th Year started
                  th(colspan='3') Links
              tbody
                tr
                  td.is-icon
                    i.fa.fa-android
                  td
                    a(href='#') Android
                  td
                    | 2003
                  td.is-icon
                    a(href='#')
                      i.fa.fa-github
                  td.is-icon
                    a(href='#')
                      i.fa.fa-twitter
                  td.is-icon
                    a(href='#')
                      i.fa.fa-globe
                tr
                  td.is-icon
                    i.fa.fa-firefox
                  td
                    a(href='#') Firefox
                  td
                    | 2003
                  td.is-icon
                    a(href='#')
                      i.fa.fa-github
                  td.is-icon
                    a(href='#')
                      i.fa.fa-twitter
                  td.is-icon
                    a(href='#')
                      i.fa.fa-globe
                tr
                  td.is-icon
                    i.fa.fa-linux
                  td
                    a(href='#') Linux
                  td
                    | 2003
                  td.is-icon
                    a(href='#')
                      i.fa.fa-github
                  td.is-icon
                    a(href='#')
                      i.fa.fa-twitter
                  td.is-icon
                    a(href='#')
                      i.fa.fa-globe
                tr
                  td.is-icon
                    i.fa.fa-wordpress
                  td
                    a(href='#') WordPress
                  td
                    | 2003
                  td.is-icon
                    a(href='#')
                      i.fa.fa-github
                  td.is-icon
                    a(href='#')
                      i.fa.fa-twitter
                  td.is-icon
                    a(href='#')
                      i.fa.fa-globe
</template>
<style lang="scss" rel="stylesheet/scss" scoped>
  .table-responsive {
    display: block;
    width: 100%;
    min-height: .01%;
    overflow-x: auto;
  }
</style>
<script type="text/ecmascript-6">
</script>