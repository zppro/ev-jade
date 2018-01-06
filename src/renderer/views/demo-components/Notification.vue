<template lang="pug">
  .notifications-box
    .tile.is-ancestor
      .tile.is-parent.is-6
        article.tile.is-child.box
          h1.title Styles
          .block.styles-box
            notification(:title="'Normal'", :direction="'Down'", :message="'Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit'", :duration='0')
            notification(:title="'Primary'", :type="'primary'", :direction="'Right'", :message="'Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit'", :duration='0')
            notification(:title="'Info'", :type="'info'", :direction="'Right'", :message="'Info lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit'", :duration='0')
            notification(:title="'Success'", :type="'success'", :direction="'Left'", :message="'Success lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit'", :duration='0')
            notification(:title="'Warning'", :type="'warning'", :direction="'Left'", :message="'Warning lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit'", :duration='0')
            notification(:title="'Danger'", :container="'.styles-box'", :type="'danger'", :direction="'Down'", :message="'Danger lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit'", :duration='0')
      .tile.is-parent.is-6
        article.tile.is-child.box
          h1.title Buttons
          .block
            button.button(@click="openNotificationWithType('')") Normal
            button.button.is-primary(@click="openNotificationWithType('primary')") Primary
            button.button.is-info(@click="openNotificationWithType('info')") Info
            button.button.is-success(@click="openNotificationWithType('success')") Success
            button.button.is-warning(@click="openNotificationWithType('warning')") Warning
            button.button.is-danger(@click="openNotificationWithType('danger')") Danger
</template>

<style lang="scss" rel="stylesheet/scss" scoped>
  .styles-box .notification {
    margin-bottom: 20px;
  }

  .button {
    margin: 5px 0 0;
  }
</style>

<script type="text/ecmascript-6">
  import Vue from 'vue'
  import Notification from 'vue-bulma-notification'

  const NotificationComponent = Vue.extend(Notification)

  const openNotification = (propsData = {
    title: '',
    message: '',
    type: '',
    direction: '',
    duration: 4500,
    container: '.notifications'
  }) => {
    return new NotificationComponent({
      el: document.createElement('div'),
      propsData
    })
  }

  export default {
    components: {
      Notification
    },

    mounted () {
      openNotification({
        message: 'Success lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit',
        type: 'success',
        duration: 0
      })
    },

    methods: {
      openNotificationWithType (type) {
        openNotification({
          title: 'This is a title',
          message: 'This is the message.',
          type: type
        })
      }
    }

  }
</script>
