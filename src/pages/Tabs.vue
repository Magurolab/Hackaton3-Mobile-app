<template>
  <f7-page tabbar-fixed with-subnavbar>
    <f7-navbar title="Home" sliding />

    <!-- iOS TabBar has icons, Material TabBar does not -->
    <f7-toolbar tabbar>
      <f7-link tab-link="#home"><f7-icon f7="home_fill"></f7-icon></f7-link>
      <f7-link tab-link="#buy" active><f7-icon f7="home_fill"></f7-icon></f7-link>
      <f7-link tab-link="#wishlist"><f7-icon f7="heart_fill"></f7-icon></f7-link>
      <f7-link tab-link="#additem"><f7-icon f7="add_around"></f7-icon></f7-link>
      <f7-link tab-link="#inbox"><f7-icon f7="drawer"></f7-icon></f7-link>
      <f7-link tab-link="#profile"><f7-icon f7="person_fill"></f7-icon> </f7-link>
    </f7-toolbar>

    <f7-tabs>
      <f7-tab id="home">
        <home-page />
      </f7-tab>
      <f7-tab id="buy" tab-active>
        <buy-page />
      </f7-tab>
      <f7-tab id="wishlist">
        <wishlist-page />
      </f7-tab>
      <f7-tab id="additem">
        <additem-page />
      </f7-tab>
      <f7-tab id="inbox">
        <inbox-page />
      </f7-tab>
      <f7-tab id="profile">
        <profile-page />
      </f7-tab>

    </f7-tabs>

  </f7-page>
</template>

<script>
  import Home from './home';
  import Buy from './Items/buy'
  import Wishlist from './Items/WishList'
  import Additem from './Items/AddItem'
  import Inbox from './Messages/Inbox'
  import Profile from './User/Profile'
  export default {
    name: 'Tabs',
    components: {
      'home-page': Home,
      'buy-page': Buy,
      'wishlist-page': Wishlist,
      'additem-page': Additem,
      'inbox-page': Inbox,
      'profile-page': Profile,
    },
  };
</script>
