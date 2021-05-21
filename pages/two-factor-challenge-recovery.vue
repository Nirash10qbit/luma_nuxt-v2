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
              <b-form-group label-for="recovery_code">
                <template v-slot:label>
                  Recovery Code
                </template>
                <b-form-input
                  id="recovery_code"
                  v-model="form.recovery_code"
                  name="recovery_code"
                  placeholder="Enter recovery code" />
              </b-form-group>


              <!-- link -->
              <div class="mb-2">
                <nuxt-link
                  :to="{path: '/two-factor-challenge'}">
                  Or Enter QR code
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
            Forgot Recovery code?
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
        recovery_code:'',
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
      }
    }
  }
}
</script>

<style>

</style>
