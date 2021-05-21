<template>
  <div>
    <b-container
      fluid
      class="mt-5">
      <b-row>
        <b-col md="4" />
        <b-col
          md="4"
          class="mt-5">
          <div
            class="mb-2 mt-5 d-flex justify-content-center"
            width="30pt"
            height="30pt">
            <img
              src="@/assets/images/logo.png">
          </div>
          <b-card>
            <!-- form -->
            <b-form @submit.prevent="sendForgotPasswordEmail">
              <div class="mb-2">
                If you can't remember your password. please provide your email address and we will send you
                a link which you use to change your password.
              </div>

              <!-- email -->
              <b-form-group label-for="input-email">
                <template v-slot:label>
                  Email
                </template>
                <b-form-input
                  id="input-email"
                  v-model="form.email"
                  type="text"
                  :state="this.errors && this.errors.email ? false : null"
                  placeholder="Enter Email" />
                <b-form-invalid-feedback
                  v-if="errors && errors.email"
                  id="input-email-feedback">
                  {{ errors.email[0] }}
                </b-form-invalid-feedback>
              </b-form-group>

              <!-- button-->
              <div class="d-flex justify-content-end">
                <b-button
                  type="submit"
                  variant="primary"
                  class="mt-n2 ml-2">
                  send reset link
                </b-button>
              </div>
            </b-form>
          </b-card>

          <div class="d-flex justify-content-center mt-3">
            Back to
            <nuxt-link
              :to="{ path: '/auth/login'}"
              class="px-1 ">
              <u>Sign in</u>
            </nuxt-link>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data(){
    return{
      errors:{},
      form: {
        email: '',
      }
    }
  },
  methods:{
    async sendForgotPasswordEmail(){
      try{
        await this.$axios.get('sanctum/csrf-cookie')
        await  this.$axios.post('forgot-password', this.form)
      }catch (error) {
        if(error.response.status === 422) {
          this.errors = error.response.data.errors;
        }
      }
    }
  }
}
</script>

<style>

</style>
