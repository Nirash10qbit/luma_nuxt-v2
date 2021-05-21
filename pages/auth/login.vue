<template>
  <div>
    <b-container
      fluid
      class="mt-5">
      <b-row>
        <b-col md="4"/>
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
            <b-form @submit.prevent="login">

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
                  { {errors.password[0] }}
                </b-form-invalid-feedback>
              </b-form-group>

              <!-- check box -->
              <b-form-checkbox
                id="checkbox-1"
                name="checkbox-1"
                value="true"
                unchecked-value="false">
                Remember Me
              </b-form-checkbox>

              <!-- link & button-->
              <div
                class="d-flex justify-content-end">
                <nuxt-link
                  :to="{ path: '/auth/forgot-password'}">
                  Forgot Your Password?
                </nuxt-link>
                <b-button
                  type="submit"
                  variant="primary"
                  class="mt-n2 ml-2">
                  Login
                </b-button>
              </div>
            </b-form>
          </b-card>

          <div class="d-flex justify-content-center mt-3">
            Don’t have an account?
            <nuxt-link
              :to="{ path: '/auth/register'}"
              class="px-1 ">
              <u>Sign up</u>
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
        password: '',
      }
    }
  },
  methods:{
    async login(){
      try{
        await this.$auth.loginWith('laravelSanctum' , {
          data: this.form
        })
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
