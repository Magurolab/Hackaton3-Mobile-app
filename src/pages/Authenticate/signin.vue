<template>
  <f7-page login-screen>
    <f7-login-screen-title>Login</f7-login-screen-title>
    <f7-list form>
      <f7-list-item>
        <f7-label>Username</f7-label>
        <f7-input name="username" placeholder="Username" type="text"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Password</f7-label>
        <f7-input name="password" type="password" placeholder="Password"></f7-input>
      </f7-list-item>
    </f7-list>

    <f7-list>
      <f7-list-button title="Sign In" login-screen-close></f7-list-button>
      <f7-block-footer>
        <p>Don't have an account ? </p>
      </f7-block-footer>
    </f7-list>
    <f7-link href="/signup/">Signup for Aibay</f7-link>
  </f7-page>
</template>

<script>

  import F7View from "framework7-vue/src/components/view";
  import F7Page from "framework7-vue/src/components/page";

  export default {components: {
      F7Page,
      F7View}}
</script>
