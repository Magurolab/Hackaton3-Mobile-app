<template>
  <f7-page>
    <f7-navbar title="Aibay" back-link="Back"> </f7-navbar>
    <f7-toolbar tabbar>
      <f7-link tab-link href="/home/" route-tab-id="tab1"> <f7-icon f7="home_fill"></f7-icon> </f7-link>
      <f7-link tab-link href="/wish-list/" route-tab-id="tab2"> <f7-icon f7="heart_fill"></f7-icon> </f7-link>
      <f7-link tab-link href="/add-item/" route-tab-id="tab3"> <f7-icon f7="add_around"></f7-icon> </f7-link>
      <f7-link tab-link href="/inbox/" route-tab-id="tab4"> <f7-icon f7="drawer"></f7-icon> </f7-link>
      <f7-link tab-link href="/profile/" route-tab-id="tab5"> <f7-icon f7="person_fill"></f7-icon> </f7-link>
    </f7-toolbar>
    <f7-tabs routable>
      <f7-tab class="page-content" id="tab1"></f7-tab>
      <f7-tab class="page-content" id="tab2"></f7-tab>
      <f7-tab class="page-content" id="tab3"></f7-tab>
      <f7-tab class="page-content" id="tab4"></f7-tab>
      <f7-tab class="page-content" id="tab5"></f7-tab>
    </f7-tabs>
  </f7-page>
</template>
<script>
  export default {}
</script>
