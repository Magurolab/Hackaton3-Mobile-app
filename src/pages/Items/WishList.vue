<template>
  <f7-page ptr @ptr:refresh="onRefresh">
      <img class="zura" src="../../../static/sticker1.png">
    <f7-list>
      <f7-block-title>Wishlist - Pull to refresh</f7-block-title>
      <f7-card v-for="card in wishlistCards">
        <f7-card-header>
          {{card.user}}
          <f7-button @click="redirect(card.userid)" ><f7-icon material="send"></f7-icon></f7-button>
          <f7-button @click="removeItem(card['.key'])"><f7-icon material="delete" ></f7-icon></f7-button>
        </f7-card-header>
        <f7-card-content>
          <img :src="card.url" width="100%"/>
        </f7-card-content>
        <f7-card-footer>
          {{"Item: " + card.name}}
          <br/>
          {{"$"+card.price}}
          <br/>
          {{"Description: " + card.description}}
        </f7-card-footer>
      </f7-card>
    </f7-list>

  </f7-page>
</template>

<script>
  import { auth, db } from '../../firebase'
  import F7CardContent from "framework7-vue/src/components/card-content";
  import F7CardHeader from "framework7-vue/src/components/card-header";
  import F7Icon from "framework7-vue/src/components/icon";
  import F7Button from "framework7-vue/src/components/button";
  import { createMessage, createChatRoom } from "../Messages/MessageSyetem/MessageUtils";

  export default {
    data () {
      return {
        cards: {},
        wishlist: [],
      }
    },

    firebase: function () {
      return {
        cards:{
          source: db.ref('/Posts')
        },
      }
    },
    computed:{
      wishlistCards () {
        const wl = this.wishlist
        const c = this.cards
        return c.filter(function(u){
          return wl.includes(u['.key'])
        })
      }
    },
    components: {
      F7Button,
      F7Icon,
      F7CardHeader,
      F7CardContent,
      auth, db
    },
    methods: {
      onRefresh(event, done){
        this.wishlist = []
        setTimeout(() => {
          const uid = auth.currentUser.uid
          db.ref('/Users/' + uid + '/wishlist').once('value')
            .then((data) => {
              const postObject = data.val()
              for (let key in postObject) {
                this.wishlist.push(postObject[key])
              }
              done()
            })
        },1000);
      },
      async redirect (user2_id) {
        const user1_id = auth.currentUser.uid;
        const chatId = await createChatRoom(user1_id, user2_id);
        const text = "Hello, I am interested in your product."
        // console.log(chatId)
        createMessage(user1_id, chatId, text)
        this.$f7.dialog.alert("Your chat room has been created.", '')
        // this.$f7router.navigate("/inbox/")
        // location.reload()


      },
      removeItem (id) {
        this.wishlist = []
        const uid = auth.currentUser.uid
        db.ref('/Users/' + uid + '/wishlist').once('value')
          .then((data) => {
            const postObject = data.val()
            for (let key in postObject) {
              if (postObject[key] === id) {
                db.ref('/Users/' + uid + '/wishlist').child(key).remove()
              } else {
                this.wishlist.push(postObject[key])
              }
            }
          })
          .catch(
            (error) => {
              console.log(error)
            }
          )
      },
    },
    beforeMount () {
      const uid = auth.currentUser.uid
      db.ref('/Users/' + uid + '/wishlist').once('value')
        .then((data) => {
          const postObject = data.val()
          for (let key in postObject) {
            this.wishlist.push(postObject[key])
          }
        })

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
    text-align: center;
    background: url(../../../static/sticker1.png) no-repeat;
    /*background-size: cover;*/
    min-height:10em;
    /*position: relative;*/
    /*z-index: -2;*/
  }
  .heading{
    padding: 0 1em 1em 1em;
    text-transform: uppercase;
    position: absolute;
    bottom: 0;
    width:100%;
    box-sizing: border-box;
  }
  .demo-facebook-card .card-header {
    display: block;
    padding: 10px;
  }
  .demo-facebook-card .demo-facebook-avatar {
    float: left;
  }
  .demo-facebook-card .demo-facebook-name {
    margin-left: 44px;
    font-size: 14px;
    font-weight: 500;
  }
  .demo-facebook-card .demo-facebook-date {
    margin-left: 44px;
    font-size: 13px;
    color: #8e8e93;
  }
  .demo-facebook-card .card-footer {
    background: #fafafa;
  }
  .demo-facebook-card .card-footer a {
    color: #81848b;
    font-weight: 500;
  }
  .demo-facebook-card .card-content img {
    display: block;
  }
  .demo-facebook-card .card-content-padding {
    padding: 15px 10px;
  }
  .demo-facebook-card .card-content-padding .likes {
    color: #8e8e93;
  }
</style>
