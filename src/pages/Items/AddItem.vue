<template>
  <f7-page>
    <f7-navbar title="Add Item" back-link="Back"></f7-navbar>
    <img class="zura" src="../../../static/sticker4.png">
    <f7-list>
      <f7-block-title>Sell item</f7-block-title>
    </f7-list>
    <f7-list form>
      <f7-list-item>
        <f7-label>Item Name</f7-label>
        <f7-input @input="name = $event.target.value" type="text" placeholder="Name" required validate></f7-input>
      </f7-list-item>

      <!--<f7-list-item>-->
        <!--&lt;!&ndash;<f7&ndash;&gt;-->
      <!--</f7-list-item>-->

      <f7-block>
        <f7-label>Photo</f7-label>
        <br/>
        <file-select v-model="file"></file-select>
        <p v-if="file">{{file.name}}</p>
      </f7-block>

      <f7-list-item>
        <f7-label>Category</f7-label>
        <f7-input @input="category = $event.target.value" type="select" required validate>
          <option value="Book">Book</option>
          <option value="Clothing">Clothing</option>
          <option value="Electronics">Electronics</option>
          <option value="Furniture">Furniture</option>
          <option value="Other">Other</option>
        </f7-input>
      </f7-list-item>

      <f7-list-item>
        <f7-label>Price</f7-label>
        <f7-input @input="price = $event.target.value" type="text" placeholder="฿" required validate></f7-input>
      </f7-list-item>

      <f7-list-item>
        <f7-label>Description</f7-label>
        <f7-input @input="description = $event.target.value" type="textarea" placeholder="Describe it"></f7-input>
      </f7-list-item>

      <f7-list>
        <f7-block-footer>
          <div v-if="loading" class="center"><f7-preloader ></f7-preloader></div>
          <f7-button
            v-else
            @click="addProduct"
            class="col"
            fill >SELL IT!</f7-button>
        </f7-block-footer>
      </f7-list>
    </f7-list>

  </f7-page>
</template>

<script>
import F7List from "framework7-vue/src/components/list";
import F7ListItem from "framework7-vue/src/components/list-item";
import F7Button from "framework7-vue/src/components/button";
import F7Label from "framework7-vue/src/components/label";
import F7BlockFooter from "framework7-vue/src/components/block-footer";
import Vue from 'vue'
import {auth,db, storage} from "../../firebase";
import FileSelect from './FileSelect'
import firebase from 'firebase'
import F7Block from "framework7-vue/src/components/block";

export default {
  components: {
    F7Block,
    F7BlockFooter,
    F7Label,
    F7Button,
    F7ListItem,
    F7List,
    FileSelect,

  },
  data() {
    return {
      loading: false,
      currentuser: auth.currentUser,
      name: '',
      price: '',
      description: 'No description',
      category: '',
      file: null,
      uri: '',
      cordova: Vue.cordova,
      plugins: {
        'cordova-plugin-camera': function () {
          if (!Vue.cordova.camera) {
            window.alert('Vue.cordova.camera not found !')
            return
          }
          Vue.cordova.camera.getPicture((imageURI) => {
            this.uri = imageURI
            this.file = cfUploadFile(imageURI, "image/jpeg")
            window.alert('Photo URI : ' + imageURI)
          }, (message) => {
            window.alert('FAILED : ' + message)
          }, {
            quality: 50,
            destinationType: Vue.cordova.camera.DestinationType.FILE_URI
          })
        },
      },
    }
  },

  methods: {
    pluginEnabled: function (pluginName) {
      return this.cordova.plugins.indexOf(pluginName) !== -1
    },
    myURI () {
      window.alert("plugins: " + this.uri)
    },
    userInfo(){
      var userInfo = null;
      const uid = auth.currentUser.uid
      const ref = db.ref('Users/' + uid)
      ref.on('value', function (snapshot) {
        userInfo = snapshot.val()
      })
      return userInfo
    },
    addProduct() {
      this.loading = true
      if(!this.name||!this.price||!this.category){
        this.$f7.dialog.alert('Dont leave field(s) blank.', ' ')
        return
      }
      var payload = {
        name: this.name,
        price: this.price,
        description: this.description,
        category: this.category
      }
      var app = this
      var userInfo = null;
      const uid = auth.currentUser.uid
      const ref = db.ref('Users/' + uid)
      ref.on('value', function (snapshot) {
        userInfo = snapshot.val()
      })
      var fileName = this.file.name
      var storageRef = firebase.storage().ref('images/' + fileName)
      var uploadTask = storageRef.put(this.file)
      uploadTask.on('state_changed', function (snapshot) {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        console.log('Upload is ' + progress + '% done')
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED: // or 'paused'
            console.log('Upload is paused')
            break
          case firebase.storage.TaskState.RUNNING: // or 'running'
            console.log('Upload is running')
            break
          case firebase.storage.TaskState.SUCCESS:
            console.log('Upload success')

        }
      }, function (error) {
        console.log(error)
      }, function () {
        console.log(userInfo)
        var postKey = db.ref('Posts/').push().key
        var updates = {}
        var postData = {
          name: payload.name,
          description: payload.description,
          price: payload.price,
          category: payload.category,
          userid: uid,
          user: userInfo.username,
          url: 'https://firebasestorage.googleapis.com/v0/b/hackaton3-e8c2f.appspot.com/o/29342404_1651558714912885_8821876827908993035_n.jpg?alt=media&token=fd2ea1fb-f3e6-441a-a936-20144f80f2d6'
        }
        uploadTask.snapshot.ref.getDownloadURL().then(url => {
          db.ref('Posts/' + postKey + '/url').set(url)
        })
        updates['/Posts/' + postKey] = postData
        db.ref().update(updates)
        app.loading = false
        app.name=''
        app.category=''
        app.price=''
        app.description=''
        app.file=null
        app.$f7.dialog.alert('Item added', ' ')
      })

    },
  },
  created: function () {
    // console.log('current user on profile', auth.currentUser.email)
  },
}
</script>
<style scoped>
  .zura {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 25%;
  }
  header {
    background: url(../../../static/clem.jpg) no-repeat;
    background-size: cover;
    min-height:14em;
    position: relative;
    z-index: -2;
  }
  .center{
    text-align: center;
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
