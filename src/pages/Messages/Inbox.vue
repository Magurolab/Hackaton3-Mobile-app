<template>
  <f7-page>
    <f7-navbar title="Inbox" back-link="Back"></f7-navbar>

    <f7-block-title>Fake</f7-block-title>
    <f7-list>
      <f7-list-item link="/chatbox/" title="user1"></f7-list-item>
      <f7-list-item link="/chatbox/" title="user2"></f7-list-item>
      <f7-list-item link="/chatbox/" title="user3"></f7-list-item>
      <f7-list-item link="/chatbox/" title="user4"></f7-list-item>
    </f7-list>



  </f7-page>
</template>

<script>
  import F7List from "framework7-vue/src/components/list";
  import {db} from "../../firebase";

  export default {
    components: {F7List},
    data () {
      return {
        users:{}
      }
    },
    firebase: function () {
      return {
        users:{
          source: db.ref('/Users')
        },
      }
    },
  }
</script>
