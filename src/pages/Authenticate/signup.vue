<template>
  <f7-page login-screen>
    <f7-login-screen-title>Sign Up</f7-login-screen-title>
    <f7-list form @submit.prevent="userSignUp">
      <f7-list-item>
        <f7-label>Username</f7-label>
        <f7-input :value="this.username" name="username" placeholder="Username" type="text"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Password</f7-label>
        <f7-input :value="this.password" name="password" type="password" placeholder="Password"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Confirm Password</f7-label>
        <f7-input :value="this.passwordConfirm" name="confirmpassword" type="password" placeholder="Confirm Password"></f7-input>
      </f7-list-item>

      <f7-list-item>
        <f7-label>Email</f7-label>
        <f7-input :value="this.email" name="email" placeholder="Email" type="email"></f7-input>
      </f7-list-item>
      <f7-list-item >
        <f7-label>University</f7-label>
        <f7-input type="select" placeholder="Please choose...">
          <option v-for="college in this.colleges" :value="college">{{college}}</option>
        </f7-input>
      </f7-list-item>
      <f7-list-button title="Create an Account" login-screen-close></f7-list-button>
      <f7-link href="/signin/">Already have an account?</f7-link>
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
        username: '',
        email: '',
        password: '',
        passwordConfirm: '',
        university: '',
        colleges: [
          'Mahidol University', 'Kasetsart University', 'Chulalongkorn University', 'Thammasat University',
          'Chiang Mai University', 'Prince of Songkla University', 'Khon Kaen University',
          'Burapha University', 'Sripatum University', 'King Mongkut\'s University of Technology Thonburi'
        ]
      }
    },
    components: {
      F7Page,
      F7View,
      auth, db},
    methods: {
      userSignUp () {
        console.log(data())
        auth().createUserWithEmailAndPassword(this.email, this.password)
          .then(firebaseUser => {
            const uid = auth.currentUser.uid
            db.ref('Users/' + uid).set({
              email: this.email,
              username: this.username,
              university: this.university,
              description: this.description
            })
          })
          .catch(authError => {
            alert(authError);
          })
      }
    },
  }
</script>
