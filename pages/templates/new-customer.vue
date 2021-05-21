<template>
  <div>
    <div class="p-1 px-4 bg-white border-top-3">
      <b-row class="d-flex">
        <b-col class="mr-auto">

          <div class="d-flex flex-row">
            <div class="p-2">
              <b-button
                class="btn-sm-block border-1"
                variant="white"
                :to="{ path: '/templates/tables'}">
                <md-icon>
                  arrow_back_ios
                </md-icon>
              </b-button>
            </div>
            <div class="pt-3">
              <h5>
                New Customer
              </h5>
            </div>
          </div>
        </b-col>
      </b-row>
    </div>

    <b-container
      fluid
      md="8"
      class="mt-3">

      <b-row>
        <b-col
          md="4"
          class="mt-3">
          <h5>customer details</h5>
        </b-col>
        <b-col
          md="8"
          class="mt-3">

          <b-form
            @submit.prevent="updateProfileInformation">
            <b-card>
              <!-- name -->
              <b-form-group label-for="fname">
                <template v-slot:label>
                  First Name
                </template>
                <b-form-input
                  id="fname"
                  type="text"
                  placeholder="Enter first name"/>
              </b-form-group>

              <!-- name -->
              <b-form-group label-for="lname">
                <template v-slot:label>
                  Last Name
                </template>
                <b-form-input
                  id="lname"
                  type="text"
                  placeholder="Enter last name" />
              </b-form-group>

              <!-- name -->
              <b-form-group label-for="company">
                <template v-slot:label>
                  Company
                </template>
                <b-form-input
                  id="company"
                  type="text"
                  placeholder="Enter company name" />
              </b-form-group>

              <!-- name -->
              <b-form-group label-for="name">
                <template v-slot:label>
                  Email
                </template>
                <b-form-input
                  id="email"
                  type="email"
                  placeholder="Enter email" />
              </b-form-group>

              <!-- name -->
              <b-form-group label-for="phone">
                <template v-slot:label>
                  Phone Number
                </template>
                <b-form-input
                  id="phone"
                  type="text"
                  placeholder="Enter phone number" />
              </b-form-group>
            </b-card>
          </b-form>
        </b-col>
      </b-row>

      <b-row>
        <b-col
          md="4"
          class="mt-3">
          <h5>Configurations</h5>
        </b-col>
        <b-col
          md="8"
          class="mt-3">
          <b-card>
            <!-- form -->

            <!-- current password -->
            <b-form-group label-for="currentpassword">
              <template v-slot:label>
                Local
              </template>
              <b-select
                name="customers.locale">
                <option value="">Select Locale</option>

                <option value="en">
                  English
                </option>
                <option value="en-AU">
                  English (Australia)
                </option>
                <option value="en-CA">
                  English (Canada)
                </option>
                <option value="en-IN">
                  English (India)
                </option>
                <option value="en-IE">
                  English (Ireland)
                </option>
                <option value="en-MT">
                  English (Malta)
                </option>
              </b-select>
            </b-form-group>

            <!-- password -->
            <b-form-group label-for="newpassword">
              <template v-slot:label>
                Preferred Currency
              </template>
              <b-select
                id="customer.currency"
                validate="true">
                <option>
                  Select Currency
                </option>
                <option value="300">
                  GBP
                </option>
              </b-select>
            </b-form-group>
            <div
              class="d-flex justify-content-end">
              <b-button
                class="mt-n2 ml-2"
                type="submit"
                variant="primary">
                create customer
              </b-button>

              <b-button
                class="mt-n2 ml-2"
                type="submit"
                variant="outline-primary">
                cancle
              </b-button>
            </div>
          </b-card>
        </b-col>
      </b-row>

    </b-container>
  </div>
</template>

<script>

export default {
  layout: 'sticky',

  data() {
    return {
    }
  },
  methods: {

  },
}
</script>

<style>

</style>
