<template>
  <f7-page>
    <!--<div class="card demo-facebook-card" v-for="card in cards">-->
    <!--<div class="card-header">-->
    <!--<div class="demo-facebook-name"> {{card.name}} </div>-->
    <!--<div class="demo-facebook-date">{{card.user}}</div>-->
    <!--</div>-->
    <!--<div class="card-content card-content-padding">-->
    <!--<p>{{card.name}}</p><img :src="card.url" width="100%"/>-->
    <!--</div>-->
    <!--<div class="card-footer">-->
    <!--<div class="demo-facebook-name"> {{card.price}} </div>-->
    <!--<div class="demo-facebook-date">{{card.description}}</div>-->
    <!--</div>-->
    <!--</div>-->

    <f7-list>
      <f7-card v-for="card in wishlistCards">
        <f7-card-header>
          {{card.user}}
          <f7-button @click="redirect" ><f7-icon material="send"></f7-icon></f7-button>
          <f7-button @click="removeItem(card['.key'])"><f7-icon f7="heart_fill" ></f7-icon></f7-button>
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
  export default {
    data () {
      return {
        cards: {},
        fav: null,
        wishlist: [],
      }
    },
    firebase: function () {
      return {
        cards:{
          source: db.ref('/Posts')
        },
        fav:{
          source: db.ref('/Users/'+auth.currentUser.uid+'/wishlist')
        },
      }
    },
    computed:{
      wishlistCards (){
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
      redirect () {
        console.log("fff")
        this.$f7router.navigate("/chatbox/")
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
      // onLoadItem (id) {
      //   this.$router.push('/items/' + id)
      // },
      // addWishlist (id) {
      //   const uid = auth.currentUser.uid
      //   db.ref('Users/' + uid + '/wishlist').push(id)
      // }
    },
    beforeMount () {
      const uid = auth.currentUser.uid
      db.ref('/Users/' + uid + '/wishlist').once('value')
        .then((data) => {
          const postObject = data.val()
          for (let key in postObject) {
            this.wishlist.push(postObject[key])
            // this.wishlistKey.push(key)
          }
        })

    },
  }
</script>

<style scoped>
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
