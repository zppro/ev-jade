<template lang="pug">
  .content.has-text-centered
    h1.is-title.is-bold 用户登录
    .columns.is-vcentered
      .column.is-6.is-offset-3
        .box
          div(v-show='error', style='color:red; word-wrap:break-word;') {{ error }}
          form(v-on:submit.prevent='login')
            label.label 用户名
            p.control
              input.input(v-model='data.body.username', type='text', placeholder='email@example.org')
            label.label 密  码
            p.control
              input.input(v-model='data.body.password', type='password', placeholder='password')
            p.control
              label.checkbox
                input(type='checkbox', v-model='data.rememberMe')
                |    记住我
            hr
            .columns
              .column
              .column
                .field.is-grouped
                  .control
                    button.button.is-primary(type='submit', :class='{"is-loading": isSubmitting}', :disabled="isSubmitting") 登录
                  .control
                  .control
                    button.button.is-default(@click.prevent="cancel()") 取消
              .column
</template>

<style lang="scss" rel="stylesheet/scss" scoped>
  .is-title {
    text-transform: capitalize;
  }
</style>

<script type="text/ecmascript-6">
export default {

  data () {
    return {
      isSubmitting: false,
      data: {
        body: {
          username: null,
          password: null
        },
        rememberMe: false
      },
      error: null
    }
  },
  mounted () {
    //  if (this.$auth.redirect()) {
    //  console.log('Redirect from: ' + this.$auth.redirect().from.name)
    //  }
    // Can set query parameter here for auth redirect or just do it silently in login redirect.
  },
  methods: {
    async login () {
      this.isSubmitting = true
      console.log('isSubmitting:', this.isSubmitting, this)
      const ret = await this.$http.post(`services/share/login/signin`, {code: this.data.body.username, password: this.data.body.password})
      console.log('>>>', ret)
    },
    cancel () {
      this.isSubmitting && (this.error = '您取消了本次登录过程')
      this.isSubmitting = false
    }
  }
  // filters: {
  //   json: function (value) {
  //     console.log(value)
  //     return value
  //   }
  // }

}
</script>


