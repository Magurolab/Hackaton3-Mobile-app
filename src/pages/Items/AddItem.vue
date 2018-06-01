<template>
  <f7-page>
    <f7-navbar title="Add Item" back-link="Back"></f7-navbar>

    <f7-list form>

      <f7-list-item>
        <f7-label>Item Name</f7-label>
        <f7-input @input="name = $event.target.value" type="text" placeholder="Name"></f7-input>
      </f7-list-item>

      <!--<f7-list-item>-->
        <!--<div>-->
          <!--<p>My File Selector: <file-select :value="file" @input="file = $event.target.value" ></file-select></p>-->
          <!--<p v-if="file">{{file.name}}</p>-->
        <!--</div>-->
      <!--</f7-list-item>-->

      <f7-list-item>
        <div>
          <f7-label>Photo</f7-label>
          <f7-button> Add a photo</f7-button>
        </div>
      </f7-list-item>

      <f7-list-item>
        <f7-label>Category</f7-label>
        <f7-input @input="category = $event.target.value" type="select">
          <option value="Book">Book</option>
          <option value="Clothing">Clothing</option>
          <option value="Electronics">Electronics</option>
          <option value="Furniture">Furniture</option>
          <option value="Other">Other</option>
        </f7-input>
      </f7-list-item>

      <f7-list-item>
        <f7-label>Price</f7-label>
        <f7-input @input="price = $event.target.value" type="text" placeholder="฿"></f7-input>
      </f7-list-item>

      <f7-list-item>
        <f7-label>Description</f7-label>
        <f7-input @input="description = $event.target.value" type="textarea" placeholder="Describe it"></f7-input>
      </f7-list-item>

      <f7-list-button
        @click="addItem"
        title="SELL IT!!"
      ></f7-list-button>

    </f7-list>

    <!--<f7-block >-->
      <!--<f7-row tag="p">-->
        <!--<f7-button-->
          <!--@click="addItem"-->
          <!--class="col"-->
          <!--fill >SELL IT!</f7-button>-->
      <!--</f7-row>-->
    <!--</f7-block>-->

  </f7-page>
</template>

<script>
import F7List from "framework7-vue/src/components/list";
import F7ListItem from "framework7-vue/src/components/list-item";
import FileSelect from './../../components/Items/FileSelect'
import F7Button from "framework7-vue/src/components/button";
import F7Label from "framework7-vue/src/components/label";

export default {
  components: {
    F7Label,
    F7Button,
    F7ListItem,
    F7List,
    FileSelect,

  },
  data() {
    return {
      name: '',
      price: '',
      description: '',
      category: '',
      file: null
    }
  },

  methods: {
    takePhoto () {
      let opts = {
        quality: 80,
        destinationType: Camera.DestinationType.FILE_URI,
        sourceType: Camera.PictureSourceType.CAMERA,
        mediaType: Camera.MediaType.PICTURE,
        encodingType: Camera.EncodingType.JPEG,
        cameraDirection: Camera.Direction.BACK,
        targetWidth: 300,
        targetHeight: 400
      };
      navigator.camera.getPicture(app.ftw, app.wtf, opts);
    },
    ftw () {
      document.getElementById('msg').textContent = imgURI;
      document.getElementById('photo').src = imgURI;
    },
    wtf () {
      document.getElementById('msg').textContent = msg;
    },
    addItem () {
      console.log(this.description)

      // var fileName = payload.file.name
      // var storageRef = firebase.storage().ref('images/' + fileName)
      // var uploadTask = storageRef.put(payload.file)
      // uploadTask.on('state_changed', function (snapshot) {
      //   var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      //   console.log('Upload is ' + progress + '% done')
      //   switch (snapshot.state) {
      //     case firebase.storage.TaskState.PAUSED: // or 'paused'
      //       console.log('Upload is paused')
      //       break
      //     case firebase.storage.TaskState.RUNNING: // or 'running'
      //       console.log('Upload is running')
      //       break
      //     case firebase.storage.TaskState.SUCCESS:
      //       console.log('Upload success')
      //   }
      // }, function (error) {
      //   console.log(error)
      // }, function () {
      //   const uid = auth.currentUser.uid
      //   var postKey = db.ref('Posts/').push().key
      //   var updates = {}
      //   var postData = {
      //     name: payload.name,
      //     description: payload.description,
      //     price: payload.price,
      //     category: payload.category,
      //     user: uid,
      //     url: ''
      //   }
      //   uploadTask.snapshot.ref.getDownloadURL().then(url => {
      //     db.ref('Posts/' + postKey + '/url').set(url)
      //   })
      //   updates['/Posts/' + postKey] = postData
      //   db.ref().update(updates)
      // })
    },
  }
}
</script>
