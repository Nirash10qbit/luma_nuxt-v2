<template>
  <div>
    <b-container
      fluid
      class="mt-5">
      <b-row>
        <b-col
          md="4" />
        <b-col
          md="4"
          class="mt-5">

          <div
            class="mb-2 mt-5 d-flex justify-content-center"
            width="30pt"
            height="30pt">
            <img
              src="~/assets/images/logo.png">
          </div>
          <b-card>
            <b-form
              class="auth-login-form mt-2"
              @submit.prevent="confirmPassword">


              <!-- password -->
              <b-form-group label-for="input-password">
                <template v-slot:label>
                  Password
                </template>
                <b-form-input
                  id="input-password"
                  v-model="form.password"
                  type="password"
                  :state="this.errors && this.errors.password ? false : null"
                  placeholder="Enter password" />
                <b-form-invalid-feedback
                  v-if="errors && errors.password"
                  id="input-password-feedback">
                  {{ errors.password[0] }}
                </b-form-invalid-feedback>
              </b-form-group>

              <!-- button-->
              <div class="d-flex justify-content-center">
                <b-button
                  type="submit"
                  variant="primary"
                  class="">
                  Confirm Password
                </b-button>
              </div>

            </b-form>
          </b-card>
          <div
            class="d-flex justify-content-center">
            <p>
              Back to
              <nuxt-link
                :to="{ path: '/auth/profile'}"
                class="px-1 mt-2">
                <u>profile</u>
              </nuxt-link>
            </p>
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
        password: '',
      }
    }
  },
  methods:{
    async confirmPassword(){
      try{
        await this.$axios.get('sanctum/csrf-cookie')
        await this.$axios.post('user/confirm-password', this.form)
        this.$router.replace({name: this.$route.query.return || 'index'})

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
