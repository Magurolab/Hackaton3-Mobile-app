<template>
  <f7-page>
    <div class="card demo-facebook-card" v-for="card in cards">
      <div class="card-header">
        <div class="demo-facebook-name"> {{card.name}} </div>
        <div class="demo-facebook-date">{{card.user}}</div>
      </div>
      <div class="card-content card-content-padding">
        <p>{{card.name}}</p><img :src="card.url" width="100%"/>
      </div>
      <div class="card-footer">
        <div class="demo-facebook-name"> {{card.price}} </div>
        <div class="demo-facebook-date">{{card.description}}</div>
      </div>
    </div>

  </f7-page>
</template>

<script>
  import { auth, db } from '../../firebase'
  export default {
    components: {
      auth, db
    },
    computed: {
      cards () {
        var tmp = []
        db.ref('/Posts/').on('value', function (snapshot) {
          console.log(snapshot.val())
          for (let key in snapshot.val()) {
            tmp.push({
              id: key,
              category: snapshot.val()[key].category,
              description: snapshot.val()[key].description,
              name: snapshot.val()[key].name,
              price: snapshot.val()[key].price,
              url: snapshot.val()[key].url,
              user: snapshot.val()[key].user,
              uid: snapshot.val()[key].uid
            })
          }
        })

        return tmp
        //   .filter(function (u) {
        //   return u.user !== auth.currentUser.uid
        // })
      }
    },
    methods: {
      // onLoadItem (id) {
      //   this.$router.push('/items/' + id)
      // },
      // addWishlist (id) {
      //   const uid = auth.currentUser.uid
      //   db.ref('Users/' + uid + '/wishlist').push(id)
      // }
    },
    // beforeMount () {
    //   this.$store.dispatch('loadCards')
    // },
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
