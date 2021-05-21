<template>
  <div>
    <b-container
      fluid
      md="8"
      class="mt-3">

      <div>
        <UpdateFrofile />
      </div>

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

              <!-- current password -->
              <b-form-group label-for="currentpassword">
                <template v-slot:label>
                  Current Password
                </template>
                <b-form-input
                  id="currentpassword"
                  v-model="form.password"
                  type="password"
                  :state="this.errors && this.errors.password ? false : null"
                  placeholder="Enter current password" />
                <b-form-invalid-feedback
                  v-if="errors && errors.password"
                  id="currentpassword-feedback">
                  {{ errors.password[0] }}
                </b-form-invalid-feedback>
              </b-form-group>

              <!-- password -->
              <b-form-group label-for="newpassword">
                <template v-slot:label>
                  Password
                </template>
                <b-form-input
                  id="newpassword"
                  v-model="form1.newpassword"
                  type="password"
                  :state="this.errors && this.errors.newpassword ? false : null"
                  placeholder="Enter password" />
                <b-form-invalid-feedback
                  v-if="errors && errors.newpassword"
                  id="newpassword-feedback">
                  {{ errors.newpassword[0] }}
                </b-form-invalid-feedback>
              </b-form-group>

              <!-- Comfirm password -->
              <b-form-group label-for="comfirmpassword">
                <template v-slot:label>
                  Comfirm Password
                </template>
                <b-form-input
                  id="comfirmpassword"
                  v-model="form1.comfirmpassword"
                  type="password"
                  placeholder="Comfirm password" />
                <b-form-invalid-feedback
                  v-if="errors && errors.password"
                  id="comfirmpassword-feedback">
                  {{ errors.password[0] }}
                </b-form-invalid-feedback>
              </b-form-group>


              <div
                class="d-flex justify-content-end">
                <b-button
                  type="submit"
                  variant="outline-primary"
                  class="mt-n2 ml-2 disabled">
                  save
                </b-button>
              </div>
            </b-form>
          </b-card>
        </b-col>
      </b-row>

      <b-row>
        <b-col md="4" class="mt-3">
          <h5>Two Factor Authontication</h5>
          Add additional security to your account using two factor authontication.
        </b-col>
        <b-col md="8" class="mt-3">
          <b-card>
            <!-- form -->
            <template
              v-if="$auth.user.two_factor_enabled">
              <b-row>
                <b-col md="7">
                  <form @submit.prevent="disableTwoFactorAuthentication">
                    <h6>Two factor authentication is enabled.</h6>
                    <div>
                      When two factor authentication is enabled. you will be prompted for a secure. random token during
                      authentication. You may retrieve this token from your phone's Google Authenticator application.
                    </div>
                    <div>
                      <b-button
                        type="submit"
                        variant="outline-primary"
                        class="mt-2">
                        disable
                      </b-button>
                    </div>
                  </form>
                </b-col>
                <b-col>
                  <div
                    v-if="qrCode"
                    class="mb-2"
                    v-html="qrCode">

                  </div>
                  <!--                  <ul-->
                  <!--                    v-if="recoveryCodes"-->
                  <!--                    class="mb-4">-->
                  <!--                    <li-->
                  <!--                      v-for="(code, index) in recoveryCodes "-->
                  <!--                      :key="index">-->
                  <!--                      {{code}}-->
                  <!--                    </li>-->
                  <!--                  </ul>-->
                </b-col>
              </b-row>



            </template>

            <template v-if="!$auth.user.two_factor_enabled">

              <form @submit.prevent="enableTwoFactorAuthentication">
                <h6>You have not enable two factor authentication.</h6>
                <div>
                  When two factor authentication is enabled. you will be prompted for a secure.
                  random token during authentication. You may retrieve this token from your phone's
                  Google Authenticator application
                </div>
                <b-button
                  type="submit"
                  variant="outline-primary"
                  class="mt-2">
                  Enable
                </b-button>
              </form>
            </template>
          </b-card>
        </b-col>
      </b-row>

      <b-row>
        <b-col
          md="4"
          class="mt-3">
          <h5>Delete Account</h5>
          <div class="text-warning">
            Deleting your Vapor account does not remove any remaining Vapor
            created resources from your AWS account. You may delete these resources manually
            via the AWS dashboard if you wish.
          </div>
        </b-col>
        <b-col
          md="8"
          class="mt-3">
          <b-card>
            <!-- form -->
            <b-form
              @submit.prevent="deleteAccount">

              <!-- current password -->
              <!-- current password -->
              <b-form-group label-for="currentpassword">
                <template v-slot:label>
                  Current Password
                </template>
                <b-form-input
                  id="currentpassword"
                  v-model="form.password"
                  type="password"
                  :state="this.errors && this.errors.password ? false : null"
                  placeholder="Enter current password" />
                <b-form-invalid-feedback
                  v-if="errors && errors.password"
                  id="currentpassword-feedback">
                  {{ errors.password[0] }}
                </b-form-invalid-feedback>
              </b-form-group>

              <div
                class="d-flex justify-content-end">
                <b-button
                  type="submit"
                  variant="outline-primary"
                  class="mt-n2 ml-2">
                  delete account
                </b-button>
              </div>
            </b-form>
          </b-card>
        </b-col>
      </b-row>

    </b-container>
  </div>
</template>

<script>
 import UpdateFrofile from '~/pages/auth/profile/update'


export default {
  layout: 'sticky',
  components: {
    UpdateFrofile,
  },

  data() {
    return {
      errors:{},
      qrCode: null,
      recoveryCodes:null,
      form: {
        email: this.$auth.user.email,
        name: this.$auth.user.name,
        password: '',
      },
      form1:{
        newpassword:'',
        comfirmpassword:'',
      },
    }
  },
  methods: {

    async resetPassword() {
      try {
        await this.$axios.get('sanctum/csrf-cookie')
        await this.$axios.post('user/confirm-password', this.form)
        await this.$axios.post('reset-password', this.form1)

        this.$router.replace({path: '/auth/login'})

      } catch (error) {
        if(error.response.status === 422) {
          this.errors = error.response.data.errors;
        }
        console.log(this.errors);
      }
    },

    async enableTwoFactorAuthentication(){
      await this.$axios.get('sanctum/csrf-cookie')
      await this.$axios.post('user/two-factor-authentication')

      await  this.$auth.fetchUser()

      this.qrCode = (await this.$axios.get('user/two-factor-qr-code')).data.svg
      this.getRecoveryCodes()

    },

    async disableTwoFactorAuthentication(){
      await this.$axios.delete('user/two-factor-authentication')
      await  this.$auth.fetchUser()
    },

    async getRecoveryCodes(){
      this.recoveryCodes = (await this.$axios.get('user/two-factor-recovery-codes')).data
    },

    async deleteAccount(){
      try{
        await this.$axios.get('sanctum/csrf-cookie')
        await this.$axios.post('user/confirm-password', this.form)
        await this.$axios.delete('api/user')
        await this.$auth.logout()

        this.$router.replace({path: '/auth/login'})
      } catch (error) {
        if(error.response.status === 422) {
          this.errors = error.response.data.errors;
        }
      }
    },
    async mounted() {
      if(this.$auth.user.two_factor_enabled){
        this.getRecoveryCodes()
      }
    }
  }
}
</script>

<style>

</style>
