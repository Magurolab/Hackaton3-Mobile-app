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

//import VueFire
import VueFire from 'vuefire';

// import
import VueCordova from 'vue-cordova'
import {auth} from "./firebase";

// Init F7 Vue Plugin
Vue.use(VueCordova)
Vue.use(VueFire);
Vue.use(Framework7Vue, Framework7)

// add cordova.js only if serving the app through file://
if (window.location.protocol === 'file:' || window.location.port === '3000') {
  var cordovaScript = document.createElement('script')
  cordovaScript.setAttribute('type', 'text/javascript')
  cordovaScript.setAttribute('src', 'cordova.js')
  document.body.appendChild(cordovaScript)
}

const unsubscribe = auth.onAuthStateChanged(firebaseUser => {
  new Vue({
    el: '#app',
    // render: h => h(App),
    template: '<app/>',
    // Init Framework7 by passing parameters here
    framework7: {
      routes: Routes,
      id: 'io.framework7.testapp', // App bundle ID
      name: 'Framework7', // App name
      theme: 'auto', // Automatic theme detection
      // App routes
    },
    // Register App Component
    components: {
      app: App
    },
    beforeCreate() {
      unsubscribe();
    },
    methods: {
      onF7Ready(f7) {
        if (firebaseUser) {
          f7.router.navigate('/')
        } else {
          f7.router.navigate('/signin/')
        }


      }
    }
  })
});

// Init App
// new Vue({
//   el: '#app',
//   // render: h => h(App),
//   template: '<app/>',
//   // Init Framework7 by passing parameters here
//   framework7: {
//     routes: Routes,
//     id: 'io.framework7.testapp', // App bundle ID
//     name: 'Framework7', // App name
//     theme: 'auto', // Automatic theme detection
//     // App routes
//   },
//
//   data() {
//     loaded: false
//   },
//   // Register App Component
//   components: {
//     app: App
//   },
//   methods: {
//     onF7Ready(f7) {
//       auth.onAuthStateChanged((firebaseUser) => {
//
//
//         if (firebaseUser) {
//           this.time(() => f7.router.navigate('/'))
//         }
//         else {
//           f7.router.navigate('/signin/')
//         }
//       })
//     },
//     time(cb){
//       console.log("time")
//      const aaa =  new Promise((accept, reject) => {
//        while (auth.currentUser == null){
//          console.log("Waiting")
//        }
//
//        accept();
//       });
//
//      aaa.then (() => cb())
//     }
//   }
// });
