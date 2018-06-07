<template>
  <f7-page>
    <f7-navbar title="Inbox" back-link="Back"></f7-navbar>
    <!--<f7-button @click="pattaya">Pattaya Boy</f7-button>-->

    <f7-block-title>ChatRooms</f7-block-title>
    <f7-list v-for="chat in inboxRenderComponents">
      <f7-list-item @click="goToChatBox(chat.chatId, chat.name, chat.uid)" :title="chat.name" ></f7-list-item>
    </f7-list>

    <f7-popup :opened=popupStart >
      <f7-button icon-f7="left_arrow" @click='closePopup'></f7-button>
      <!--<initiate :gid= this.gid ></initiate>-->
      <Chatbox :c_id="chosenChat_id" :targetName="targetName" :targetId="targetId"> </Chatbox>
    </f7-popup>

  </f7-page>
</template>

<script>
  import F7List from "framework7-vue/src/components/list";
  import {auth, db} from "../../firebase";
  import { getCurrentChats,getInboxRenderComponent } from './MessageSyetem/MessageUtils'
  import F7Button from "framework7-vue/src/components/button";
  import Chatbox from "./Chatbox";
  import F7Icon from "framework7-vue/src/components/icon";
  import F7Link from "framework7-vue/src/components/link";

  export default {
    components: {F7Link, F7Icon, Chatbox, F7Button, F7List},
    props:[],
    data () {
      return {
        popupStart:false,
        chosenChat_id:null,
        targetName: null,
        targetId:null,
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
        if(this.chatId_lst === null) {
          return
        }
        console.log("something get update chatId_lst change")
        console.log(this.chatId_lst)
        console.log(auth.currentUser.uid)
        // console.log(this.chatId_lst);
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
        console.log(this.inboxRenderComponents)
      },
    },
    methods: {
      pattaya(){
        console.log(this.chatId_lst)
        console.log(auth.currentUser.uid)
      },
      closePopup() {
        this.popupStart = false
        console.log('hello from close popup')
      },
      goToChatBox(c_id, name, uid){
        this.chosenChat_id = c_id;
        this.targetName = name
        this.targetId = uid
        this.popupStart =true
        // console.log('hellooo c_id= '+this.chatId_lst)

      }

    }

  }
</script>
