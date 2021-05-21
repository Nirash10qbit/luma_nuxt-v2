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
              @submit.prevent="register">

              <!-- name -->
              <b-form-group label-for="name">
                <template v-slot:label>
                  Name <span class="text-danger">*</span>
                </template>
                <b-form-input
                  id="name"
                  v-model="form.name"
                  type="text"
                  :state="this.errors && this.errors.name ? false : null"
                  placeholder="Enter name"
                  required />
                <b-form-invalid-feedback
                  v-if="errors && errors.name"
                  id="name-feedback">
                  {{ errors.name[0] }}
                </b-form-invalid-feedback>
              </b-form-group>

              <!-- email -->
              <b-form-group label-for="email">
                <template v-slot:label>
                  Email <span class="text-danger">*</span>
                </template>
                <b-form-input
                  id="email"
                  v-model="form.email"
                  type="text"
                  :state="this.errors && this.errors.email ? false : null"
                  placeholder="Enter email"
                  required />
                <b-form-invalid-feedback
                  v-if="errors && errors.email"
                  id="email-feedback">
                  {{ errors.email[0] }}
                </b-form-invalid-feedback>
              </b-form-group>

              <!-- password -->
              <b-form-group label-for="password">
                <template v-slot:label>
                  Password <span class="text-danger">*</span>
                </template>
                <b-form-input
                  id="password"
                  v-model="form.password"
                  type="password"
                  :state="this.errors && this.errors.password ? false : null"
                  placeholder="Enter password"
                  required />
                <b-form-invalid-feedback
                  v-if="errors && errors.password"
                  id="password-feedback">
                  {{ errors.password[0] }}
                </b-form-invalid-feedback>
              </b-form-group>

              <!-- Comfirm password -->
              <b-form-group label-for="password_confirmation">
                <template v-slot:label>
                  Confirmed password <span class="text-danger">*</span>
                </template>
                <b-form-input
                  id="password_confirmation"
                  v-model="form.password_confirmation"
                  type="password"
                  :state="this.errors && this.errors.name ? false : null"
                  placeholder="Enter password confirmation"
                  required />
                <b-form-invalid-feedback
                  v-if="errors && errors.password_confirmation"
                  id="password_confirmation-feedback">
                  {{ errors.password_confirmation[0] }}
                </b-form-invalid-feedback>
              </b-form-group>


              <!-- check box -->
              <b-form-checkbox
                id="checkbox-2"
                name="checkbox-2"
                value="true"
                unchecked-value="false">
                I agree to the...
              </b-form-checkbox>

              <!-- button-->
              <div
                class="d-flex justify-content-end">
                <b-button
                  type="submit"
                  variant="primary"
                  class="mt-n2 ml-2">
                  Register
                </b-button>
              </div>
            </b-form>
          </b-card>

          <div
            class="d-flex justify-content-center mt-3">
            Already have an account?
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
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
      }
    }
  },
  methods:{
    async register() {

      try{
        await this.$axios.get('sanctum/csrf-cookie')
        await this.$axios.post('register',this.form)


        await this.$auth.loginWith('laravelSanctum' , {
          data: {email: this.form.email, password: this.form.password}
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
