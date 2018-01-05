<template lang="pug">
  div
    .tile.is-ancestor
      .tile.is-parent
        article.tile.is-child.box
          h1.title Basics
          p.control
            datepicker(:inputclass='{ test: true }', v-model='value')
          p.control
            datepicker(placeholder="European Format ('d-m-Y')", :config="{ dateFormat: 'd-m-Y', static: true }")
          p.control
            datepicker(placeholder="American Format ('m/d/Y')", :config="{ dateFormat: 'm/d/Y' }")
          p.control
            datepicker(placeholder="Fancy Textual Format ('l, F j, Y')", :config="{ dateFormat: 'l, F j, Y' }")
          p.control
            datepicker(placeholder='minDate: today', :config='{ minDate: today, defaultDate: today }')
          p.control
            datepicker(placeholder="minDate: '2016-09-20'", :config="{ minDate: '2016-09-20' }")
          p.control
            datepicker(placeholder="minDate: new Date('September 2, 2015')", :config="{ minDate: new Date('September 2, 2015') }")
          p.control
            datepicker(:placeholder='placeholder', :config="{ minDate: 'today', maxDate: maxDate }")
      .tile.is-parent.is-vertical
        article.tile.is-child.box
          h1.title Form addons
          datepicker(:inputclass='{ test: true }', :config='{ wrap: true }', readonly='')
            a.button(data-toggle='')
              i.fa.fa-calendar
            a.button(data-clear='')
              i.fa.fa-close
        article.tile.is-child.box
          h1.title Display week numbers
          p.control
            datepicker(placeholder='Enabled week numbers', :config='{ weekNumbers: true }')
        article.tile.is-child.box
          h1.title Date Range
          p.control
            datepicker(placeholder='Select a range', :config="{ mode: 'range' }")
    .tile.is-ancestor
      .tile.is-parent.is-vertical
        article.tile.is-child.box
          h1.title Preload date and time
          p.control
            // TODO: click out side cannot handle hidden input yet. Will fix this later.
            datepicker(placeholder='The real input is hidden :^)', :config="{ altInput: false, altFormat: 'F j, Y' }")
            // <datepicker placeholder="The real input is hidden :^)" :config="{ altInput: true, altFormat: 'F j, Y' }"></datepicker>
          p.control
            datepicker(:config="{ defaultDate: '2016-03-01 03:30:00 -0300', enableTime: true }")
          p.control
            datepicker(:config="{ defaultDate: '2016-12-27T16:16:22.585Z', enableTime: true }")
        article.tile.is-child.box
          h1.title UTC mode
          p.control
            datepicker(:config="{ utc: true, defaultDate: '2016-03-01 03:30:00 -0300', enableTime: true }")
          p.control
            datepicker(:config="{ utc: true, defaultDate: '2016-12-27T16:16:22.585Z', enableTime: true }")
      .tile.is-parent
        article.tile.is-child.box
          h1.title Inline or embedded calendar
          p.control
            datepicker(placeholder='Pick date and time', :config='{ inline: true }')
    .tile.is-ancestor
      .tile.is-parent.is-vertical
        article.tile.is-child.box
          h1.title DateTime Picker
          p.control
            datepicker(placeholder='Pick date and time', :config='{ enableTime: true }')
          p.control
            datepicker(placeholder='24 hour time', :config="{ enableTime: true, time_24hr: true, dateFormat: 'Y-m-d H:i' }")
          p.control
            datepicker(placeholder='Pick date and time', :config="{ enableTime: true, enableSeconds: true, dateFormat: 'Y-m-d h:i:S K' }")
        article.tile.is-child.box
          h1.title Time Picker
          p.control
            datepicker(placeholder='Pick time', :config='{ enableTime: true, enableSeconds: true, noCalendar: true }', value='09:00:00')
      .tile.is-parent.is-vertical
        article.tile.is-child.box
          h1.title Disable specific dates or date intervals
          p.control
            datepicker(placeholder='disabled from July 6-9', :config="{ disable: [ { from: '2016-07-06', to: '2016-07-09' }, '2016-07-24' ], minDate: 'today' }")
          p.control
            datepicker(placeholder='disabled September 6-9 & August 25-31 2016', :config="{ disable: [ { from : '2016-09-06', to : '2016-09-09' }, { from : '2016-08-25', to : '2016-08-31' } ], minDate: 'today', dateFormat: 'Y-m-d' }")
        article.tile.is-child.box
          h1.title Setting options dynamically
          p.control
            datepicker(ref='checkIn', placeholder='Check-In Date', :config='{ minDate: new Date() }')
          p.control
            datepicker(ref='checkOut', placeholder='Check Out Date', :config='{ minDate: new Date() }')
    .tile.is-ancestor
      .tile.is-parent
        article.tile.is-child.box
          h1.title Setting custom defaults
          p.control
            datepicker(:config='{ prevArrow: `<i class="fa fa-angle-left"></i>`, nextArrow: `<i class="fa fa-angle-right"></i>` }')
      .tile.is-parent
        article.tile.is-child.box
          h1.title Localization
          p.control
            datepicker(:config='{ locale: l10n }')
</template>

<style lang="scss" rel="stylesheet/scss" scoped>
  .tile.is-parent {
    min-width: 50%;
  }
</style>

<script type="text/ecmascript-6">
  import Datepicker from 'vue-bulma-datepicker'

  export default {
    components: {
      Datepicker
    },

    data () {
      return {
        value: '2016-12-12'
      }
    },

    mounted () {
      const { checkIn, checkOut } = this.$refs
      checkIn.datepicker.set('onChange', (selectedDates, dateStr, instance) => {
        checkOut.datepicker.set('minDate', selectedDates[0].fp_incr(1))
      })

      checkOut.datepicker.set('onChange', (selectedDates, dateStr, instance) => {
        checkIn.datepicker.set('maxDate', dateStr)
      })
    },

    computed: {
      today () {
        return new Date()
      },
      maxDate () {
        let d = new Date()
        d.setDate(32)
        return d
      },
      placeholder () {
        return `minDate: today, maxDate: ${this.maxDate.getFullYear()}-${this.maxDate.getMonth() + 1}-${this.maxDate.getDate()}`
      },
      // https://github.com/chmln/flatpickr/blob/gh-pages/src/flatpickr.l10n.zh.js
      l10n () {
        return {
          firstDayOfWeek: 1,
          weekdays: {
            shorthand: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
            longhand: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
          },
          months: {
            shorthand: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
            longhand: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
          }
        }
      }
    },

    watch: {
      value (newVal, oldVal) {
        console.log(newVal, oldVal)
      }
    }
  }
</script>
