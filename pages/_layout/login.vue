<template>
 <div>asdas</div>
</template>

<script>
  import Page from '~/components/Page'
  import {LumaLoginPage} from 'vue-luma'

  export default {

    extends: Page,
    layout: 'blank',
    data() {
      return {
        title: 'Login'
      }
    },
    async asyncData() {
      return {
        title: 'Login'
      }
    }
  }
</script>
