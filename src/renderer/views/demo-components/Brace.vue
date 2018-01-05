<template lang="pug">
  .tile.is-ancestor
    .tile.is-parent.is-4
      article.tile.is-child.box
        h1.title.is-5 Options Panel
        .block
          .control.is-horizontal
            .control-label
              label.label Modes
            .control
              .select.is-fullwidth
                select(v-model='selected.mode')
                  option(v-for='mode in modes', :value='mode.name') {{mode.caption}}
          .control.is-horizontal
            .control-label
              label.label Themes
            .control
              .select.is-fullwidth
                select(v-model='selected.theme')
                  option(v-for='theme in themes', :value='theme.name') {{theme.caption}}
          .control.is-horizontal
            .control-label
              label.label Font Size
            .control
              .select.is-fullwidth
                select(v-model='selected.fontsize')
                  option(v-for='fsize in fontsize', :value='fsize') {{fsize}}
          .control.is-horizontal
            .control-label
              label.label Code Folding
            .control
              .select.is-fullwidth
                select(v-model='selected.codefolding')
                  option(v-for='cfolding in codefolding', :value='cfolding') {{cfolding}}
          .control.is-horizontal
            .control-label
              label.label Soft Wrap
            .control
              .select.is-fullwidth
                select(v-model='selected.softwrap')
                  option(v-for='swrap in softwrap', :value='swrap') {{swrap}}
          .control.is-horizontal
            .control-label
              label.label Select Style
            .control
              .select.is-fullwidth
                select(v-model='selected.selectionstyle')
                  option(value='text') text
                  option(value='line') line
          .control.is-horizontal
            .control-label
              label.label Highlight Line
            .control(style='margin-top: 10px;')
              label.radio
                input(type='radio', value='true', v-model='selected.highlightline')
                |                   Yes
              label.radio
                input(type='radio', value='false', v-model='selected.highlightline')
                |                   No
    .tile.is-parent
      article.tile.is-child.box.brace-container
        brace(style='min-height: 100%; min-width: 100%', :fontsize='this.selected.fontsize', :theme='this.selected.theme', :mode='this.selected.mode', :codefolding='this.selected.codefolding', :softwrap='this.selected.softwrap', :selectionstyle='this.selected.selectionstyle', :highlightline="this.selected.highlightline === 'true'", @code-change='oncodeChange')
</template>

<style lang="scss" rel="stylesheet/scss"  scoped>
  .control-label {
    min-width: 100px;
  }
  .brace-container {
    display: flex;
  }
</style>

<script type="text/ecmascript-6">
  import Brace from 'vue-bulma-brace'
  // this is just an example. you don't want to import those things.
  import * as brace from 'brace'
  import 'brace/ext/modelist'
  import 'brace/ext/themelist'
  const modelist = brace.acequire('ace/ext/modelist')
  const themelist = brace.acequire('ace/ext/themelist')

  export default {
    components: {
      Brace
    },

    data () {
      return {
        code: '',
        modes: modelist.modes,
        themes: themelist.themes,
        fontsize: ['12px', '13px', '14px', '16px', '18px', '20px', '22px', '24px'],
        codefolding: ['manual', 'markbegin', 'markbeginend'],
        softwrap: ['off', '50', 'free'],
        selected: {
          mode: 'json',
          theme: 'github',
          fontsize: '12px',
          codefolding: 'markbegin',
          softwrap: 'free',
          selectionstyle: 'text',
          highlightline: 'true'
        }
      }
    },

    methods: {
      oncodeChange (code) {
        this.code = code
      }
    }
  }
</script>
