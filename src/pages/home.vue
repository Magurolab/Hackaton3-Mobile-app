<template>
  <f7-page>

    <f7-toolbar>
      <f7-link>Left Link</f7-link>
      <f7-link>Right Link</f7-link>
    </f7-toolbar>

    <f7-block strong>
      <p>Here is your blank Framework7 app. Let's see what we have here.</p>
    </f7-block>

    <f7-block-title>Navigation</f7-block-title>
    <f7-list>
      <f7-list-item link="/about/" title="About"></f7-list-item>
      <f7-list-item link="/add-item/" title="Add Item"></f7-list-item>
      <f7-list-item link="/wish-list/" title="Wish list"></f7-list-item>
      <f7-list-item link="/inbox/" title="Inbox"></f7-list-item>
      <f7-list-item link="/profile/" title="My account"></f7-list-item>
      <f7-list-item link="/home/" title="Home"></f7-list-item>
      <f7-list-item link="/signin/" title="Sign In"></f7-list-item>
      <f7-list-item link="/signup/" title="Sign Up"></f7-list-item>
      <f7-button @click="Whoami" >Who am I</f7-button>
      <f7-button @click="signOut" >SignOut</f7-button>

    </f7-list>


    <f7-list>
      <f7-list-item link="/dynamic-route/blog/45/post/125/?foo=bar#about" title="Dynamic Route"></f7-list-item>
      <f7-list-item link="/load-something-that-doesnt-exist/" title="Default Route (404)"></f7-list-item>
    </f7-list>

  </f7-page>
</template>
<script>
  import {auth} from "../firebase"
export default {
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
    Whoami() {
      console.log("current user ",auth.currentUser.email)
    }
  },
  created: function () {
    console.log('current user on profile', auth.currentUser)
  },

}
</script>
