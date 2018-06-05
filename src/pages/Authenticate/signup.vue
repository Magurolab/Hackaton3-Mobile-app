<template>
  <f7-page login-screen>
    <header>
      <div class="heading">
        <f7-login-screen-title class="city">Sign Up</f7-login-screen-title>
      </div>
    </header>
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
      <f7-block-footer>
        <f7-link href="/signin/">Already have an account?</f7-link>
      </f7-block-footer>
    </f7-list>
  </f7-page>
</template>

<script>

  import F7View from "framework7-vue/src/components/view";
  import F7Page from "framework7-vue/src/components/page";
  import { auth, db } from '../../firebase'
  import F7ListItem from "framework7-vue/src/components/list-item";
  import F7BlockFooter from "framework7-vue/src/components/block-footer";
  import * as f7router from "framework7";


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
      F7BlockFooter,
      F7ListItem,
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
        this.$f7router.navigate('/')
      }
    },
  }
</script>

<style scoped>
  header {
    background: url(../../../static/ben-white.jpg) no-repeat;
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
  //  opacity:0.8;
  }
  .city{
    font-size: 2.8em;
    font-weight: 300;
    letter-spacing: 2px;
    margin: 0;
    color: #fff;
  }
</style>


