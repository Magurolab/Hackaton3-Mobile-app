<template>
  <f7-page>
    <f7-navbar title="Aibay" back-link="Back">

      <f7-nav-right>
        <f7-link icon-if-ios="f7:menu" icon-if-md="material:menu" url="/inbox/"></f7-link>
      </f7-nav-right>

    </f7-navbar>
    <f7-toolbar tabbar labels>
      <f7-link tab-link="#tab1"> <f7-icon f7="home_fill"></f7-icon> </f7-link>
      <f7-link tab-link="#tab2"> <f7-icon f7="search"></f7-icon> </f7-link>
      <f7-link tab-link="#tab1"> <f7-icon f7="add_around"></f7-icon> </f7-link>
      <f7-link tab-link="#tab2"> <f7-icon f7="heart_fill"></f7-icon> </f7-link>
      <f7-link tab-link="#tab2"> <f7-icon f7="person_fill"></f7-icon> </f7-link>
    </f7-toolbar>
  </f7-page>
</template>
<script>
  export default {}
</script>
