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
            <!-- form -->

            <b-form
              @submit.prevent="twoFactorChallenge">

              <!-- code -->
              <b-form-group label-for="code">
                <template v-slot:label>
                  Code
                </template>
                <b-form-input
                  id="code"
                  v-model="form.code"
                  name="code"
                  :state="this.errors && this.errors.code ? false : null"
                  placeholder="Enter code" />
                <b-form-invalid-feedback
                  v-if="errors && errors.code"
                  id="code-feedback">
                  {{ errors.code[0] }}
                </b-form-invalid-feedback>
              </b-form-group>

              <!-- link -->
              <div class="mb-2">
                <nuxt-link
                  :to="{path: '/two-factor-challenge-recovery'}">
                  Or enter recovery code
                </nuxt-link>
              </div>


              <!-- button-->
              <div
                class="d-flex justify-content-center">
                <b-button
                  type="submit"
                  variant="primary"
                  class="mt-n2 ml-2">
                  Submit code
                </b-button>
              </div>
            </b-form>
          </b-card>
          <div class="d-flex justify-content-center mt-3">
            Forgot QR code?
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
        code:''
      }
    }
  },
  methods:{
    async twoFactorChallenge(){
      try{
        await this.$axios.get('sanctum/csrf-cookie')
        await this.$axios.post('two-factor-challenge' ,this.form)

        await this.$auth.fetchUser()

        await this.$router.replace({path:'/auth/'})
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
