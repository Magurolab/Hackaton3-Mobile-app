<template>
  <f7-page>
    <!--<f7-navbar title="Messsages">-->
    <!--</f7-navbar>-->
    <f7-messagebar
      :placeholder="placeholder"
      ref="messagebar"
      :attachmentsVisible="attachmentsVisible"
      :sheetVisible="sheetVisible"
    >
      <!-- Link to toggle Sheet -->
      <f7-link
        icon-if-ios="f7:camera_fill"
        icon-if-md="material:camera_alt"
        slot="inner-start"
        @click="sheetVisible = !sheetVisible"
      ></f7-link>
      <!-- Send Message Link -->
      <f7-link
        icon-if-ios="f7:arrow_up_fill"
        icon-if-md="material:send"
        slot="inner-end"
        @click="sendMessage"
      ></f7-link>
      <!-- Attachments -->
      <f7-messagebar-attachments>
        <f7-messagebar-attachment
          v-for="(image, index) in attachments"
          :key="index"
          :image="image"
          @attachment:delete="deleteAttachment(image)"
        ></f7-messagebar-attachment>
      </f7-messagebar-attachments>
      <!-- Sheet -->
      <f7-messagebar-sheet>
        <f7-messagebar-sheet-image
          v-for="(image, index) in images"
          :key="index"
          :image="image"
          :checked="attachments.indexOf(image) >= 0"
          @change="handleAttachment"
        ></f7-messagebar-sheet-image>
      </f7-messagebar-sheet>
    </f7-messagebar>

    <f7-messages>
      ...(from data base)
    </f7-messages>
  </f7-page>
</template>
<script>
  import { createMessage } from './MessageSyetem/MessageUtils.js'
  import { auth }from './../../firebase.js'
  import F7Button from "framework7-vue/src/components/button";
  import F7Icon from "framework7-vue/src/components/icon";
  export default {
    components: {F7Icon, F7Button},
    props: ['closePopup'],
    data() {
      return {
        attachments: [],
        sheetVisible: false,
        // Sheet images available
        images: [
          'http://lorempixel.com/300/300/cats/1/',
          'http://lorempixel.com/200/300/cats/2/',
          'http://lorempixel.com/400/300/cats/3/',
          'http://lorempixel.com/300/150/cats/4/',
          'http://lorempixel.com/150/300/cats/5/',
          'http://lorempixel.com/300/300/cats/6/',
          'http://lorempixel.com/300/300/cats/7/',
          'http://lorempixel.com/200/300/cats/8/',
          'http://lorempixel.com/400/300/cats/9/',
          'http://lorempixel.com/300/150/cats/10/',
        ],
        receiver: null //might need it for rendering on top of the chat
      };
    },
    computed: {
      attachmentsVisible() {
        const self = this;
        return self.attachments.length > 0;
      },
      placeholder() {
        const self = this;
        return self.attachments.length > 0 ? 'Add comment or Send' : 'Message';
      },
    },
    methods: {
      deleteAttachment(image) {
        const self = this;
        const index = self.attachments.indexOf(image);
        self.attachments.splice(index, 1)[0]; // eslint-disable-line
      },
      handleAttachment(e) {
        const self = this;
        const index = self.$$(e.target).parents('label.checkbox').index();
        const image = self.images[index];
        if (e.target.checked) {
          // Add to attachments
          self.attachments.unshift(image);
        } else {
          // Remove from attachments
          self.attachments.splice(self.attachments.indexOf(image), 1);
        }
      },
      sendMessage() {
        console.log("sendMessage get call!!!")
        const self = this;
        const text = self.messagebar.getValue().replace(/\n/g, '<br>').trim();
        // the rest of logic to send a message

        const senderId = auth.currentUser.uid
        const roomId = null // need to get it by passing it in.
        createMessage(senderId, roomId, text);

      },
      onF7Ready() {
        const self = this;
        self.messagebar = self.$refs.messagebar.f7Messagebar;
      },
    },
  };
</script>
