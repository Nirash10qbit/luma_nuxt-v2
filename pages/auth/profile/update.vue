<template>
  <div>
    <b-row>
      <b-col
        md="4"
        class="mt-3">
        <h5>Contact Information</h5>
        Update your account's contact information and email address
      </b-col>
      <b-col
        md="8"
        class="mt-3">
        <b-card>
          <b-form
            @submit.prevent="updateProfileInformation">


            <!-- name -->
            <b-form-group label-for="name">
              <template v-slot:label>
                Name
              </template>
              <b-form-input
                id="name"
                v-model="form.name"
                :state="this.errors && this.errors.name ? false : null"
                placeholder="Enter name"
                type="text" />
              <b-form-invalid-feedback
                v-if="errors && errors.name"
                id="name-feedback">
                {{ errors.name }}
              </b-form-invalid-feedback>
            </b-form-group>

            <!-- email -->
            <b-form-group label-for="email">
              <template v-slot:label>
                Email
              </template>
              <b-form-input
                id="email"
                v-model="form.email"
                placeholder="Enter email"
                :state="this.errors && this.errors.email ? false : null"
                type="text" />
              <b-form-invalid-feedback
                id="email-feedback">
                {{ errors.email }}
              </b-form-invalid-feedback>
            </b-form-group>

            <div
              class="d-flex justify-content-end">
              <b-button
                class="mt-n2 ml-2"
                type="submit"
                variant="outline-primary">
                save
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
  layout: 'sticky',
  components: {

  },

  data() {
    return {
      errors:{},
      form: {
        email: this.$auth.user.email,
        name: this.$auth.user.name,
      },
    }
  },
  methods: {
    async updateProfileInformation() {

      try {
        await this.$axios.get('sanctum/csrf-cookie')
        await this.$axios.put('user/profile-information', this.form)

        await this.$router.replace({path: '/auth/profile/update'})
        await this.$router.replace({path: '/auth/profile/'})
      } catch (error) {
        if (error.response.status === 422) {
          this.errors = error.response.data.errors;
        }
      }
      await this.$auth.fetchUser()
      console.log(this.errors)
    },

  }
}
</script>

<style>

</style>
