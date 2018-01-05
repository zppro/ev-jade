<template lang="pug">
  div
    .tile.is-ancestor
      .tile.is-parent.is-4
        article.tile.is-child.box
          h1.title Controls
          .block
            label.label Name
            p.control
              input.input(type='text', placeholder='Text input')
            label.label Username
            p.control.has-icon.has-icon-right
              input.input.is-success(type='text', placeholder='Text input', value='bulma')
              span.icon.is-small
                i.fa.fa-check
              span.help.is-success This username is available
            label.label Email
            p.control.has-icon.has-icon-right
              input.input.is-danger(type='text', placeholder='Email input', value='hello@')
              span.icon.is-small
                i.fa.fa-warning
              span.help.is-danger This email is invalid
            label.label Subject
            p.control
              span.select
                select
                  option Select dropdown
                  option With options
            label.label Message
            p.control
              textarea.textarea(placeholder='Textarea')
            p.control
              label.checkbox
                input(type='checkbox')
                |                 Remember me
            p.control
              label.radio
                input(type='radio', name='question')
                |                 Yes
              label.radio
                input(type='radio', name='question')
                |                 No
            p.control
              button.button.is-primary Submit
              button.button.is-link Cancel
      .tile.is-parent.is-5.is-vertical
        article.tile.is-child.box
          h1.title Colors
          .block
            p.control
              input.input.is-primary(type='text', placeholder='Primary input')
            p.control
              input.input.is-info(type='text', placeholder='Info input')
            p.control
              input.input.is-success(type='text', placeholder='Success input')
            p.control
              input.input.is-warning(type='text', placeholder='Warning input')
            p.control
              input.input.is-danger(type='text', placeholder='Danger input')
        article.tile.is-child.box
          h1.title Sizes
          .block
            p.control
              input.input.is-small(type='text', placeholder='Small input')
            p.control
              input.input(type='text', placeholder='Normal input')
            p.control
              input.input.is-medium(type='text', placeholder='Medium input')
            p.control
              input.input.is-large(type='text', placeholder='Large input')
      .tile.is-parent
        article.tile.is-child.box
          h1.title States
          .block
            h2.subtitle Loading
            p.control.is-loading
              input.input(type='text', placeholder='Loading input')
            p.control.is-loading
              textarea.textarea(placeholder='Loading textarea')
          .block
            h2.subtitle Disabled
            p.control
              input.input(type='text', placeholder='Disabled input', disabled='')
            p.control
              textarea.textarea(placeholder='Disabled textarea', disabled='')
            p.control
              label.checkbox.is-disabled
                input(type='checkbox', disabled='')
                |                 Remember me
            p.control
              label.radio.is-disabled
                input(type='radio', name='question', disabled='')
                |                 Yes
              label.radio.is-disabled
                input(type='radio', name='question', disabled='')
                |                 No
            p.control
              button.button.is-primary(disabled='') Submit
              button.button(disabled='') Cancel
    .tile.is-ancestor
      .tile.is-parent.is-3
        article.tile.is-child.box
          h1.title With Icon
          h2.subtitle
            a(href='http://fontawesome.io/') Font Awesome Icons
          .block
            p.control.has-icon
              input.input(type='email', placeholder='Email')
              span.icon.is-small
                i.fa.fa-envelope
            p.control.has-icon
              input.input(type='password', placeholder='Password')
              span.icon.is-small
                i.fa.fa-lock
            p.control
              button.button.is-success
                | Login
      .tile.is-parent
        article.tile.is-child.box
          h1.title Cleave.js
          h2.subtitle Format your <input/> content when you are typing
          .columns
            .column
              .control
                label.label Credit card number
                cleave.input(placeholder='Enter credit card number', :options='{ creditCard: true }')
              .control
                label.label Phone number
                cleave.input(type='tel', placeholder='Enter phone number', :options="{ phone: true, phoneRegionCode: 'cn' }")
              .control
                label.label Numeral
                cleave.input(placeholder='Enter numeral', :options="{ numeral: true, numeralThousandsGroupStyle: 'thousand' }")
            .column
              .control
                label.label Date
                cleave.input(placeholder='YYYY/MM/DD', :value="'20160901'", :options="{ date: true, datePattern: ['Y', 'm', 'd'] }")
              .control
                cleave.input(placeholder='MM/YY', :options="{ date: true, datePattern: ['m', 'y'] }")
              .control
                label.label Raw Value
                cleave.input(v-model='demo.value', @rawvaluechanged='onRawValueChanged', placeholder='Enter phone number', :options="{ blocks: [0, 3, 3, 4], numericOnly: true, delimiters: ['(', ') ', '-'], maxLength: 14 }")
            .column
              .control
                label.label Custom options
                cleave.input(placeholder='Blocks: [4, 3, 3, 4]', :options='{ blocks: [4, 3, 3, 4], uppercase: true }')
              .control
                cleave.input(placeholder="Delimiter: '·'", :options="{ delimiter: '·', blocks: [3, 3, 3, 3], uppercase: true }")
              .control
                cleave.input(:options="{ prefix: 'PREFIX', delimiter: '-', blocks: [6, 4, 4, 4], uppercase: true }")
    .tile.is-ancestor
      .tile.is-parent
        article.tile.is-child.box
          h1.title Addons
          .block
            p.control.has-addons
              input.input(type='text', placeholder='Find a repository')
              a.button.is-info Search
            p.control.has-addons
              span.select
                select
                  option $
                  option £
                  option €
              input.input.is-expanded(type='text', placeholder='Expanded')
              a.button.is-success
                | Transfer
            p.control.has-addons.has-addons-centered
              span.select
                select
                  option $
                  option £
                  option €
              input.input(type='text', placeholder='Centered')
              a.button.is-success
                | Transfer
            p.control.has-addons.has-addons-right
              span.select
                select
                  option $
                  option £
                  option €
              input.input(type='text', placeholder='Pull right')
              a.button.is-success
                | Transfer
            .control.is-grouped
              p.control.is-expanded
                input.input(type='text', placeholder='Expanded and Grouped')
              p.control
                a.button.is-info
                  | Search
      .tile.is-parent
        article.tile.is-child.box
          h1.title Horizontal form
          .block
            .control.is-horizontal
              .control-label
                label.label From
              .control.is-grouped
                p.control.is-expanded
                  input.input(type='text', placeholder='Name')
                p.control.is-expanded
                  input.input(type='email', placeholder='Email')
            .control.is-horizontal
              .control-label
                label.label Subject
              .control
                .select.is-fullwidth
                  select
                    option General enquiry
            .control.is-horizontal
              .control-label
                label.label Question
              .control
                textarea.textarea(placeholder='Explain how we can help you')
            .control.is-horizontal
              .control-label
                label.label
              .control
                button.button.is-primary Submit
                button.button.is-link Cancel
</template>
<style lang="scss" rel="stylesheet/scss" scoped>
  @import '~bulma/sass/utilities/mixins';

  .button {
    margin: 5px 0 0;
  }

  .control .button {
    margin: inherit;
  }

  .control.has-addons {
    @include mobile() {
      input {
        width: 100%;
      }

      input.is-expanded {
        flex-shrink: 1;
      }
    }
  }
</style>
<script type="text/ecmascript-6">
  import Cleave from 'vue-cleave'
  import 'cleave.js/dist/addons/cleave-phone.cn'

  export default {
    components: {
      Cleave
    },

    data () {
      return {
        demo: {
          value: '',
          rawValue: ''
        }
      }
    },

    methods: {
      onRawValueChanged (newVal) {
        this.demo.rawValue = newVal
      }
    },

    watch: {
      'demo.value' (newVal, oldVal) {
        console.log('value: new ->', newVal, 'old ->', oldVal)
      },
      'demo.rawValue' (newVal, oldVal) {
        console.log('rawValue: new ->', newVal, 'old ->', oldVal)
      }
    }
  }
</script>