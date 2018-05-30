<template>
  <f7-page login-screen>
    <f7-login-screen-title>Login</f7-login-screen-title>
    <f7-list form>
      <f7-list-item>
        <f7-label>Email</f7-label>
        <f7-input @input="email = $event.target.value" name="email" placeholder="Email" type="text"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Password</f7-label>
        <f7-input @input="password = $event.target.value" name="password" :value="password" type="password" placeholder="Password"></f7-input>
      </f7-list-item>
    </f7-list>
    <f7-list>
      <f7-list-button
        @click="userSignIn"
        title="Sign In"
        login-screen-close></f7-list-button>
      <f7-block-footer>
        <p>Don't have an account ?</p>
        <f7-link href="/signup/">Signup for Aibay</f7-link>
      </f7-block-footer>
    </f7-list>
  </f7-page>
</template>

<script>

  import F7View from "framework7-vue/src/components/view";
  import F7Page from "framework7-vue/src/components/page";
  import { auth, db } from '../../firebase'

  export default {
    data () {
      return {
        email: '',
        password: ''
      }
    },
    components: {
      F7Page,
      F7View},
    methods: {
      userSignIn () {
        auth.signInWithEmailAndPassword(this.email,this.password)
          .then(authUser => {
            console.log(authUser)
          })
          .catch(authError => {
            alert(authError);
          })
      }
    },
  }
</script>
