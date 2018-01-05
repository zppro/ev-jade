<template lang="pug">
  div
    .tile.is-ancestor
      .tile.is-parent.is-4
        article.tile.is-child.box
          h1.title Options
          .block
            button.button Button
            button.button.is-white White
            button.button.is-light Light
            button.button.is-dark Dark
            button.button.is-black Black
            button.button.is-link Link
          .block
            button.button.is-primary Primary
            button.button.is-info Info
            button.button.is-success Success
            button.button.is-warning Warning
            button.button.is-danger Danger
      .tile.is-parent.is-4
        article.tile.is-child.box
          h1.title Sizes
          a.button.is-small Small
          a.button Normal
          a.button.is-medium Medium
          a.button.is-large Large
      .tile.is-parent.is-4
        article.tile.is-child.box
          h1.title Styles
          .block
            h2.subtitle Outlined
            a.button.is-outlined Outlined
            a.button.is-primary.is-outlined Outlined
            a.button.is-info.is-outlined Outlined
            a.button.is-success.is-outlined Outlined
            a.button.is-danger.is-outlined Outlined
          h2.subtitle Inverted (the text color becomes the background color, and vice-versa)
          .notification.is-primary
            a.button.is-primary.is-inverted Inverted
            a.button.is-info.is-inverted Inverted
            a.button.is-success.is-inverted Inverted
            a.button.is-danger.is-inverted Inverted
    .tile.is-ancestor
      .tile.is-parent
        article.tile.is-child.box
          h1.title States
          .columns
            .column
              h2.subtitle Loading
              a.button.is-loading Loading
              a.button.is-primary.is-loading Loading
              a.button.is-info.is-loading Loading
              a.button.is-success.is-loading Loading
              a.button.is-warning.is-loading Loading
              a.button.is-danger.is-loading Loading
            .column
              h2.subtitle Active
              a.button.is-active Active
              a.button.is-primary.is-active Active
              a.button.is-info.is-active Active
              a.button.is-success.is-active Active
              a.button.is-warning.is-active Active
              a.button.is-danger.is-active Active
            .column
              h2.subtitle Disabled
              a.button.is-disabled Disabled
              a.button.is-primary.is-disabled Disabled
              a.button.is-info.is-disabled Disabled
              a.button.is-success.is-disabled Disabled
              a.button.is-warning.is-disabled Disabled
              a.button.is-danger.is-disabled Disabled
            .column
              h2.subtitle With Font Awesome icons
              a.button
                span.icon
                  i.fa.fa-github
                span GitHub
              a.button.is-primary
                span.icon
                  i.fa.fa-twitter
                span Twitter
              a.button.is-success
                span.icon
                  i.fa.fa-check
                span Save
              a.button.is-danger
                span Delete
                span.icon
                  i.fa.fa-times
              a.button.is-danger.is-outlined
                span.icon
                  i.fa.fa-times
                span Delete
    .tile.is-ancestor
      .tile.is-parent
        article.tile.is-child.box
          h1.title Button group
          h2.subtitle
            | If you want to group buttons together, use the is-grouped modifier on the control container:
          .control.is-grouped
            p.control
              a.button.is-primary
                | Save changes
            p.control
              a.button
                | Cancel
            p.control
              a.button.is-danger
                | Delete post
      .tile.is-parent
        article.tile.is-child.box
          h1.title Button addons
          h2.subtitle
            | If you want to use buttons as addons, use the has-addons modifier on the control container:
          p.control.has-addons
            a.button
              span.icon.is-small
                i.fa.fa-align-left
              span Left
            a.button
              span.icon.is-small
                i.fa.fa-align-center
              span Center
            a.button
              span.icon.is-small
                i.fa.fa-align-right
              span Right
</template>
<style lang="scss" rel="stylesheet/scss" scoped>
  .button {
    margin: 5px 0 0;
  }
</style>
<script type="text/ecmascript-6">
</script>