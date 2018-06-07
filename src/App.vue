<template>
  <!-- App -->

  <div id="app">

    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>

     <!--Main View -->
    <f7-view id="main-view" url="/" main></f7-view>

  </div>
</template>

<script>

  import F7View from "framework7-vue/src/components/view";
  import F7Page from "framework7-vue/src/components/page";
  import { auth, db } from './firebase'

  export default {
    data () {
      return {
        email: '',
        password: ''
      }
    },
    components: {
      F7Page,
      F7View,
      auth,db
    },
    methods: {
      isAuthen () {
        return auth().currentUser!==null
      }
    },
  }
</script>
