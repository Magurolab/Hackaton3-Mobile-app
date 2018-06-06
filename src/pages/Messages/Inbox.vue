<template>
  <f7-page>
    <f7-navbar title="Inbox" back-link="Back"></f7-navbar>
    <!--<f7-button @click="pattaya">Pattaya Boy</f7-button>-->

    <f7-block-title>ChatRooms</f7-block-title>
    <f7-list v-for="chat in inboxRenderComponents">
      <f7-list-item link="/chatbox/" :title="chat.name" ></f7-list-item>
    </f7-list>
  </f7-page>
</template>

<script>
  import F7List from "framework7-vue/src/components/list";
  import {auth, db} from "../../firebase";
  import { getCurrentChats,getInboxRenderComponent } from './MessageSyetem/MessageUtils'
  import F7Button from "framework7-vue/src/components/button";

  export default {
    components: {F7Button, F7List},
    data () {
      return {
        chatId_lst: {},
        AllChat:{},
        currentChats:{},
        inboxRenderComponents:{}
      }
    },
    firebase: function () {
      return {
        chatId_lst:{
          source: db.ref('Users/'+auth.currentUser.uid+'/currentChats')
        },
        AllChat:{
          source: db.ref('ChatRooms/')
        }
      }
    },
    mounted () {
      // console.log('mouth :',auth.currentUser.uid)
    },
    watch: {
      chatId_lst: function () {
        console.log("something get update chatId_lst change")
        console.log(this.chatId_lst);
        // console.log(auth.currentUser.uid);
        const uid = auth.currentUser.uid;
        const data = getCurrentChats(uid, this.chatId_lst, this.AllChat)
        //data [users that are talking with,chats]
        if(data === null){
          this.currentChats = []
          return
        }
        this.currentChats = data
        this.inboxRenderComponents= getInboxRenderComponent(uid, this.currentChats)

      },
    },
    methods: {
      pattaya(){
        console.log(this.chatId_lst)
        console.log(auth.currentUser.uid)
      },

    }

  }
</script>
