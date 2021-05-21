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
              @submit.prevent="resendEmailVerification">

              <div class="text-center">
                <h5>Email Confirmation</h5>
                <div class="mt-n2">
                  Hey {{ $auth.user.name }} , you're almost ready to start enjoying Template.
                  Please check your email and verify confirmation message
                  Simply click the button to verify your email address Again
                </div>
              </div>

              <!-- button-->
              <div class="d-flex justify-content-center">
                <b-button
                  type="submit"
                  variant="primary"
                  class="mt-3">
                  Verify email address
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
export default {
  methods:{
    async resendEmailVerification(){
      await this.$axios.post('email/verification-notification')
    }
  }
}
</script>
