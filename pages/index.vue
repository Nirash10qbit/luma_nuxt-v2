<template>
  <div>
    <b-button>
      <nuxt-link
        :to="{path: '/auth' }"
        class="">
        Home
      </nuxt-link>
    </b-button>
    <template v-if="$auth.loggedIn">
      <b-button>
        <nuxt-link
          :to="{path: '/auth/dashboard'}"
          class="px-2">
          Dashboard
        </nuxt-link>
      </b-button>
      <b-button>
        <nuxt-link
          :to="{path: '/templates/'}"
          class="px-2">
          Tables
        </nuxt-link>
      </b-button>
    </template>
    <template
      v-if="!$auth.loggedIn">
      <div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  layout:"sticky",
  methods:{

  }
}
</script>
