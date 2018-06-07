<template>
  <f7-page login-screen>
    <header>
      <div class="heading">
        <f7-login-screen-title class="city" >Welcome to Aibay</f7-login-screen-title>
      </div>
    </header>
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
        login-screen-close>
      </f7-list-button>
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
            this.$f7router.navigate('/')
            // location.reload(true)
          })
          .catch(authError => {
            this.$f7.dialog.alert(authError, '')
          })

        // location.reload()
      }
    },
  }
</script>

<style scoped>
  header {
    background: url(../../../static/clem.jpg) no-repeat;
    background-size: cover;
    min-height:14em;
    position: relative;
    z-index: -2;
  }

  .heading{
    padding: 0 1em 1em 1em;
    text-transform: uppercase;
    position: absolute;
    bottom: 0;
    width:100%;
    box-sizing: border-box;
  }

  .heading::before{
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left:0;
    bottom: 0;
    background-image: linear-gradient(to bottom, rgba(255,255,255, 0), rgba(8,61, 80, 0.9));
    z-index: -1;
  /*//  opacity:0.8;*/
  }
  .city{
    font-size: 2.3em;
    font-weight: 450;
    letter-spacing: 2px;
    margin: 0;
    color: #fff;
  }
</style>
