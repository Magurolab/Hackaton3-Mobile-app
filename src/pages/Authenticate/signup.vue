<template>
  <f7-page login-screen>
    <f7-login-screen-title>Sign Up</f7-login-screen-title>
    <f7-list form>
      <f7-list-item>
        <f7-label>Username</f7-label>
        <f7-input @input="username = $event.target.value" name="username" placeholder="Username" type="text"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Password</f7-label>
        <f7-input @input="password = $event.target.value" name="password" type="password" placeholder="Password"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Confirm Password</f7-label>
        <f7-input @input="passwordConfirm = $event.target.value" name="confirmpassword" type="password" placeholder="Confirm Password"></f7-input>
      </f7-list-item>

      <f7-list-item>
        <f7-label>Email</f7-label>
        <f7-input @input="email = $event.target.value" name="email" placeholder="Email" type="email"></f7-input>
      </f7-list-item>
      <f7-list-item >
        <f7-label>University</f7-label>
        <f7-input @input="university = $event.target.value" type="select" placeholder="Please choose...">
          <option v-for="college in this.colleges" :value="college" >{{college}}</option>
        </f7-input>
      </f7-list-item>
      <f7-list-button
        @click="userSignUp"
        title="Create an Account"
        login-scrren-close
      ></f7-list-button>
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
    },
    computed: {
      comparePasswords () {
        return this.password === this.passwordConfirm ? true : 'Passwords don\'t match'
      },
    },
    methods: {
      userSignUp () {
        if (this.comparePasswords !== true) {
          return
        }
        const app = this.$f7;
        // console.log('hello')
        auth.createUserWithEmailAndPassword(this.email, this.password)
          .then(firebaseUser => {
            const uid = auth.currentUser.uid
            db.ref('Users/' + uid).set({
              email: this.email,
              username: this.username,
              university: this.university,
              description: 'No description yet'
            })
          })
          .catch(authError => {
            alert(authError);
          })
        app.dialog.alert(`username: ${this.username} success!`)
      }
    },
    // created: function() {
    //   console.log('username', username)
    // },

  }
</script>
