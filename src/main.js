// Import Vue
import Vue from 'vue';

// Import F7
import Framework7 from 'framework7/dist/framework7.esm.bundle.js';

// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue/dist/framework7-vue.esm.bundle.js';

// Import F7 Styles
import Framework7Styles from 'framework7/dist/css/framework7.css';

// Import Icons and App Custom Styles
import IconsStyles from './css/icons.css';
import AppStyles from './css/app.css';

// Import Routes
import Routes from './routes.js'

// Import App Component
import App from './app';

<<<<<<< HEAD
// import
import VueCordova from 'vue-cordova'
Vue.use(VueCordova)
=======
import VueCordova from 'vue-cordova'
>>>>>>> 706c97c8181664dfe3289a7c9af8a0859addd026

import {auth} from "./firebase";

// Init F7 Vue Plugin
Vue.use(Framework7Vue, Framework7)

<<<<<<< HEAD
=======
Vue.use(VueCordova, {
  optionTestKey: 'optionTestValue'
})

>>>>>>> 706c97c8181664dfe3289a7c9af8a0859addd026
// add cordova.js only if serving the app through file://
if (window.location.protocol === 'file:' || window.location.port === '3000') {
  var cordovaScript = document.createElement('script')
  cordovaScript.setAttribute('type', 'text/javascript')
  cordovaScript.setAttribute('src', 'cordova.js')
  document.body.appendChild(cordovaScript)
}

<<<<<<< HEAD

=======
console.log('main.js cordova', Vue.cordova);
>>>>>>> 706c97c8181664dfe3289a7c9af8a0859addd026

// Init App
new Vue({
  el: '#app',
  template: '<app/>',
  // Init Framework7 by passing parameters here
  framework7: {
    id: 'io.framework7.testapp', // App bundle ID
    name: 'Framework7', // App name
    theme: 'auto', // Automatic theme detection
    // App routes
    routes: Routes,
  },
  // Register App Component
  components: {
    app: App
  },
<<<<<<< HEAD
  data: function () {
    return {
      cordova: Vue.cordova
    }
  },
=======
  methods: {
    onF7Ready(f7) {
      auth.onAuthStateChanged((firebaseUser) => {
        if (firebaseUser) {
          f7.router.navigate('/')
        }
        else {
          f7.router.navigate('/signin/')
        }
      })
    }
  }
>>>>>>> 8b5fd5965c4481f21cc28c2548d32ab2759cf54a
});
