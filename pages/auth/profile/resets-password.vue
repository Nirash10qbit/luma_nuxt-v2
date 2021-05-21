<template>
<div>
  <b-row>
    <b-col
      md="4"
      class="mt-3">
      <h5>Password</h5>
      Ensure your account is using a long. random password to stay secure.
      <div class="text-warning">
        Changing your password revokes all existing API Tokens.
      </div>
    </b-col>
    <b-col
      md="8"
      class="mt-3">
      <b-card>
        <!-- form -->
        <b-form
          @submit.prevent="resetPassword">


          <!-- password -->
          <b-form-group label-for="password">
            <template v-slot:label>
              Password
            </template>
            <b-form-input
              id="password"
              v-model="form.password"
              type="password"
              :state="this.errors && this.errors.password ? false : null"
              placeholder="Enter password" />
            <b-form-invalid-feedback
              v-if="errors && errors.password"
              id="password-feedback">
              {{ errors.password[0] }}
            </b-form-invalid-feedback>
          </b-form-group>

          <!-- Comfirm password -->

          <b-form-group label-for="input-password">
            <template v-slot:label>
              Password
            </template>
            <b-form-input
              id="password_confirmation"
              v-model="form.password_confirmation"
              type="password"
              :state="this.errors && this.errors.password_confirmation ? false : null"
              placeholder="Enter password" />
            <b-form-invalid-feedback
              v-if="errors && errors.password_confirmation"
              id="password_confirmation-feedback">
              {{ errors.password_confirmation[0] }}
            </b-form-invalid-feedback>
          </b-form-group>

          <!-- button-->
          <div
            class="d-flex justify-content-center">
            <b-button
              type="submit"
              variant="primary"
              class="mt-n2 ml-2">
              Set Password
            </b-button>
          </div>
        </b-form>
      </b-card>
    </b-col>
  </b-row>
</div>
</template>



<script>
export default {
  data(){
    return{
      errors:{},
      form: {
        password: '',
        password_confirmation: '',
      }
    }
  },
  mounted() {
    console.log(this.$route.query)
  },
  methods:{
    async resetPassword() {
      try{
        await this.$axios.get('sanctum/csrf-cookie')
        await this.$axios.post('reset-password', this.form)
        // await this.$router.replace({path: '/auth/login'})
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
