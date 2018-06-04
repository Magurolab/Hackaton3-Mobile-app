<template>
  <f7-page>
    <div>
      Hellloooofrom buy
    </div>
  </f7-page>
</template>
<script>
  import { auth, db } from '../../firebase'
  export default {
    created: function () {
      console.log('current user on buy page', auth.currentUser)
    },
  }
</script>
