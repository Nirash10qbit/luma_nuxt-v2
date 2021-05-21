<template>
  <div>

    <!-- Back button & create subscription button -->

    <div class="p-2 px-4 bg-white border-top-3">
      <b-row class="d-flex">
        <b-col class="mr-auto">

          <div class="d-flex flex-row">
            <div class="p-2">
              <b-button
                class="btn-sm-block border-1"
                variant="white"
                :to="{ path: '/auth/'}">
                <md-icon class="">
                  arrow_back_ios
                </md-icon>
              </b-button>
            </div>
            <div class="pt-3">
              <h5>
                All Customers
              </h5>
            </div>
          </div>
        </b-col>
        <b-col class="pt-2">
          <b-button
            class="btn-sm-block float-right border-1"
            variant="primary"
            :to="{ path: '/templates/new-customer'}">
            <md-icon class="mr-1">add</md-icon>
            <span>create subscription</span>
          </b-button>
        </b-col>
      </b-row>
    </div>

    <!-- Search Button -->

    <div class="p-2 px-4 bg-white border-top-3">
      <b-row class="d-flex">
        <b-col class="mr-auto">
          <div class="d-flex flex-row">
            <div class="p-1">
              <div
                class="flex search-form form-control-rounded search-form--light"
                style="min-width: 400px;">
                <b-form-input
                  placeholder="Search Customer name / Id " />
                <b-btn
                  class="pr-3"
                  type="submit"
                  variant="flush">
                  <md-icon v-text="'search'" />
                </b-btn>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </div>

    <!--    Table-->

    <div class="p-4">
      <b-card>
        <b-table
          :current-page="currentPage"
          :fields="fields"
          :filter="filter"
          :filter-included-fields="filterOn"
          :items="items"
          :per-page="perPage"
          :sort-by.sync="sortBy"
          :sort-desc.sync="sortDesc"
          :sort-direction="sortDirection"
          class="custom_align mobile_table_css bank-tbl"
          hover
          responsive
          @row-clicked="$router.push({path: '/templates/customer-details', params: { id: 123 }})">


          <!-- Name & Checkbox -->

          <template #cell(name)="data">
            <ul class="list-inline mb-0">
              <li class="list-inline-item">
                <b-form-checkbox
                  @click.native.stop>
                </b-form-checkbox>
              </li>
              <li class="list-inline-item">
                {{ data.item.name }}
              </li>
            </ul>
          </template>

        </b-table>
      </b-card>
    </div>
  </div>
</template>

<script>
import {
  MdIcon
} from 'vue-luma'
export default {
  name: "tables",
  layout:"sticky",
  // middleware: ['auth', 'verified'],
  components: {
    MdIcon
  },
  data() {
    return {
      perPage: 10,
      pageOptions: [3, 5, 10],
      totalRows: 1,
      currentPage: 1,
      sortBy: '',
      sortDesc: false,
      sortDirection: 'asc',
      filter: null,
      filterOn: [],
      infoModal: {
        id: 'info-modal',
        title: '',
        content: '',
      },
      fields:
        [
          {
            key: 'name',
            label: 'NAME',
            sortable: true
          },
          {
            key: 'role',
            label: 'role',
            sortable: true
          },
          {
            key: 'telephone',
            label: 'telephone',
          },
          {
            key: 'email',
            label: 'email',
          },
          {
            key: 'total_hours_worked',
            label: 'Total hours worked',
            sortable: true
          },
          {
            key: 'total_earning',
            label: 'Total earnings',
            sortable: true
          }
        ],
      items: [

        {
          'name': 'Eleanar Pena',
          'role': 'Clinical pharmacist',
          'telephone': '078 4914 9377',
          'email': 'eleanor.pena@mp.co.uk',
          'total_hours_worked': 20,
          'total_earning': '£1,100.00'

        },
        {
          'name': 'Courtney Henry',
          'role': 'Health and wellbeing coach',
          'telephone': '070 5820 6592',
          'email': 'courtney.henry@mp.co.uk',
          'total_hours_worked': 54,
          'total_earning': '£2,970.00'

        },
        {
          'name': 'Esther Howard',
          'role': 'Physician associate',
          'telephone': '079 2733 0515',
          'email': 'esther.howard@mp.co.uk',
          'total_hours_worked': 33,
          'total_earning': '£1,815.00'

        },
        {
          'name': 'Ronald Richards',
          'role': 'Clinical pharmacist',
          'telephone': '078 4421 7601',
          'email': 'ronald.richards@mp.co.uk',
          'total_hours_worked': 40,
          'total_earning': '£2,200.00'

        },
        {
          'name': 'Cody Fisher',
          'role': 'Clinical pharmacist',
          'telephone': '0123456789',
          'email': 'cody.fisher@mp.co.uk',
          'total_hours_worked': 20,
          'total_earning': '£12356.00'

        },
        {
          'name': 'Kathryn Murphy',
          'role': 'Health and wellbeing coach',
          'telephone': '078 4914 9377',
          'email': 'kathryn.murphy@mp.co.uk',
          'total_hours_worked': 29,
          'total_earning': '£1,595.00'

        },
        {
          'name': 'Jenny Wilson',
          'role': 'Clinical pharmacist',
          'telephone': '077 1233 8701',
          'email': 'jenny.jilson@mp.co.uk',
          'total_hours_worked': 12,
          'total_earning': '£660.00'

        },
        {
          'name': 'Leslie Alexander',
          'role': '078 4421 7601',
          'telephone': '078 4421 7601',
          'email': 'leslie.alexander@mp.co.uk',
          'total_hours_worked': 20,
          'total_earning': '£1,100.00'

        },
        {
          'name': 'Jenny Wilson',
          'role': 'Physician associate',
          'telephone': '078 4914 9377',
          'email': 'jenny.wilson@mp.co.uk',
          'total_hours_worked': 18,
          'total_earning': '£990.00'

        },
        {
          'name': 'Darlene Robertson',
          'role': 'Care coordinator',
          'telephone': '079 2733 0515',
          'email': 'darlene.robertson@mp.co.uk',
          'total_hours_worked': 0,
          'total_earning': '£0.00'

        },
        {
          'name': 'Kabier Hashim',
          'role': 'Dietician',
          'telephone': '080 1221 9897',
          'email': 'kabier.hashim@mp.co.uk',
          'total_hours_worked': 50,
          'total_earning': '£2,650.00'

        },
        {
          'name': 'Mildred Mcleod',
          'role': 'Clinical pharmacist',
          'telephone': '080 1221 9863',
          'email': 'mildred.micleod@mp.co.uk',
          'total_hours_worked': 50,
          'total_earning': '£2,650.00'

        },
      ],
    }
  }
}
</script>

<style scoped>

</style>
