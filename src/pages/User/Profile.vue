<template>
  <f7-page>
    <f7-navbar title="My Account" back-link="Back"></f7-navbar>
    <img class="zura" src="../../../static/sticker5.png">
    <f7-list>
      <f7-block-title>Profile page</f7-block-title>
    </f7-list>
    <div class="card demo-facebook-card">
      <div class="card-header">
        <div class="demo-facebook-name">{{userInfo.username}}</div>
        <div class="demo-facebook-date">Email: {{userInfo.email}}</div>
        <div class="demo-facebook-date">University: {{userInfo.university}}</div>
        <div class="demo-facebook-date">Description: {{userInfo.description}}</div>
      </div>

      <f7-button @click="signOut" >Log out</f7-button>
    </div>

    <f7-list>
      <f7-card v-for="card in userCards">
        <f7-card-header>
          {{card.user}}
          <f7-button class="button-to-popover" @click="openActionsPopover(card['.key'])"><f7-icon f7="more_round" ></f7-icon></f7-button>
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
  import F7View from "framework7-vue/src/components/view";
  import F7Page from "framework7-vue/src/components/page";
  import firebase, { auth, db } from '../../firebase'
  export default {
    data() {
      return {
        email: '',
        password: '',
        cards: {},
        actionGridOpened: false,
      }
    },
    firebase: () => ({
      userInfo: {
        source: db.ref(`Users/${auth.currentUser.uid}`)
        ,asObject: true
      },
      cards:{
        source: db.ref('/Posts')
      },
    }),
    components: {
      F7Page,
      F7View,
      auth, db
    },
    computed: {
      userCards () {
        const c = this.cards
        return c.filter(function(u){
          return u.userid===auth.currentUser.uid
        })
      }
    },
    methods: {
      userEmail(){
        return auth.currentUser.email
      },
      signOut() {
        auth.signOut().then(()=>{
          // console.log("current user" + auth.currentUser)
        })
        this.$f7router.navigate('/signin/')
      },
      Whoami() {
        console.log("current user ",auth)
      },
      redirect (user2_id) {
        console.log("redicrct to chatroom")
        const user1_id = auth.currentUser.uid
        createChatRoom(user1_id, user2_id)
        this.$f7router.navigate("/chatbox/")
      },
      openActionsPopover (id) {
        const self = this;
        const app = self.$f7;
        self.actionsToPopover = app.actions.create({
            buttons: [
              {
                text: 'Are you sure to remove this item?',
                label: true,
              },
              {
                text: 'Remove',
                bold: true,
                onClick: function () {
                  console.log('removed ', id)
                  db.ref('Posts/').child(id).remove()
                  // app.dialog.alert('removed', id)
                }
              },
              {
                text: 'Cancel',
                color: 'red',
              },
            ],
            // Need to specify popover target
            targetEl: self.$el.querySelector('.button-to-popover'),
          });
        // Open
        self.actionsToPopover.open();
      },
    },
    created: function () {
      // console.log('current user on profile', auth.currentUser)
    },

  }

</script>

<style scoped>
  .demo-facebook-card .card-header {
    display: block;
    /*padding: 10px;*/
  }
  .demo-facebook-card .demo-facebook-avatar {
    float: left;
  }
  .demo-facebook-card .demo-facebook-name {
    /*margin-left: 44px;*/
    font-size: 14px;
    font-weight: 500;
  }
  .demo-facebook-card .demo-facebook-date {
    /*margin-left: 44px;*/
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
    /*padding: 15px 10px;*/
  }
  .demo-facebook-card .card-content-padding .likes {
    color: #8e8e93;
  }
</style>
