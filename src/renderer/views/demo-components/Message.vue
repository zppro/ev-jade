<template lang="pug">
  .notifications-box
    .tile.is-ancestor
      .tile.is-parent.is-6
        article.tile.is-child.box
          h1.title Styles
          .block.styles-box
            message(:title="'Normal'", :direction="'down'", :message="'Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit'", :duration='0')
            message(:title="'Primary'", :type="'primary'", :direction="'right'", :message="'Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit'", :duration='0')
            message(:title="'Info'", :type="'info'", :direction="'right'", :message="'Info lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit'", :duration='0')
            message(:title="'Success'", :type="'success'", :direction="'left'", :message="'Success lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit'", :duration='0')
            message(:title="'Warning'", :type="'warning'", :direction="'left'", :message="'Warning lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit'", :duration='0')
            message(:title="'Danger'", :container="'.styles-box'", :type="'danger'", :direction="'down'", :message="'Danger lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit'", :duration='0')
      .tile.is-parent.is-6
        article.tile.is-child.box
          h1.title Buttons
          .block
            button.button(@click="openMessageWithType('')") Normal
            button.button.is-primary(@click="openMessageWithType('primary')") Primary
            button.button.is-info(@click="openMessageWithType('info')") Info
            button.button.is-success(@click="openMessageWithType('success')") Success
            button.button.is-warning(@click="openMessageWithType('warning')") Warning
            button.button.is-danger(@click="openMessageWithType('danger')") Danger
</template>

<style lang="scss" rel="stylesheet/scss" scoped>
  .styles-box .message-box {
    margin-bottom: 20px;
  }

  .button {
    margin: 5px 0 0;
  }
</style>

<script type="text/ecmascript-6">
  import Vue from 'vue'
  import Message from 'vue-bulma-message'

  const MessageComponent = Vue.extend(Message)

  const openMessage = (propsData = {
    title: '',
    message: '',
    type: '',
    direction: '',
    duration: 1500,
    container: '.messages'
  }) => {
    return new MessageComponent({
      el: document.createElement('div'),
      propsData
    })
  }

  export default {
    components: {
      Message
    },

    mounted () {
      openMessage({
        message: 'Success lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit',
        type: 'success',
        duration: 0,
        showCloseButton: true
      })
    },

    methods: {
      openMessageWithType (type) {
        openMessage({
          title: 'This is a title',
          message: 'This is the message.',
          type: type
        })
      }
    }

  }
</script>
