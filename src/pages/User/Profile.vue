<template>
  <f7-page>
    <f7-navbar title="My Account" back-link="Back"></f7-navbar>

    <div class="card demo-facebook-card">
      <div class="card-header">
        <div class="demo-facebook-name">{{userInfo.username}}</div>
        <div class="demo-facebook-date">Email: {{userInfo.email}}</div>
        <div class="demo-facebook-date">University: {{userInfo.university}}</div>
        <div class="demo-facebook-date">Description: {{userInfo.description}}</div>
      </div>
      <!--<f7-button @click="Whoami" >Who am I</f7-button>-->
      <f7-button @click="signOut" >Log out</f7-button>
    </div>

  </f7-page>
</template>
<script>
  import F7View from "framework7-vue/src/components/view";
  import F7Page from "framework7-vue/src/components/page";
  import { auth, db } from '../../firebase'
  export default {
    data() {
      return {
        email: '',
        password: ''
      }
    },
    components: {
      F7Page,
      F7View,
      auth, db
    },
    computed: {
      userInfo() {
        var currentuserInfo = null;
        const uid = auth.currentUser.uid
        const ref = db.ref('Users/' + uid)
        ref.on('value', function (snapshot) {
          currentuserInfo = snapshot.val()
        })
        return currentuserInfo
      },
    },
    methods: {
      userEmail(){
        return auth.currentUser.email
      },
      signOut() {
        auth.signOut().then(()=>{
          console.log("current user" + auth.currentUser)
        })
        this.$f7router.navigate('/signin/')
      },
      // Whoami() {
      //   console.log("current user ",auth.currentUser.email)
      // }
    },
    created: function () {
      console.log('current user on profile', auth.currentUser)
    },
  }

</script>

<style scoped>
  .demo-facebook-card .card-header {
    display: block;
    /*padding: 10px;*/
  }
  .demo-facebook-card .demo-facebook-avatar {
    float: left;
  }
  .demo-facebook-card .demo-facebook-name {
    /*margin-left: 44px;*/
    font-size: 14px;
    font-weight: 500;
  }
  .demo-facebook-card .demo-facebook-date {
    /*margin-left: 44px;*/
    font-size: 13px;
    color: #8e8e93;
  }
  .demo-facebook-card .card-footer {
    background: #fafafa;
  }
  .demo-facebook-card .card-footer a {
    color: #81848b;
    font-weight: 500;
  }
  .demo-facebook-card .card-content img {
    display: block;
  }
  .demo-facebook-card .card-content-padding {
    /*padding: 15px 10px;*/
  }
  .demo-facebook-card .card-content-padding .likes {
    color: #8e8e93;
  }
</style>
