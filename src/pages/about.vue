<template>
  <f7-page>
    <f7-navbar title="Action Sheet" back-link="Back"></f7-navbar>


    <f7-block-title>Action Sheet To Popover</f7-block-title>
    <f7-block strong>
      <p>Action Sheet can be automatically converted to Popover (for tablets). This button will open Popover on tablets and Action Sheet on phones: <f7-button style="display:inline-block" class="button-to-popover" @click="openActionsPopover">Actions</f7-button></p>
    </f7-block>



  </f7-page>
</template>
<script>
  import { f7Navbar, f7Page, f7BlockTitle, f7Block, f7Link, f7Button, f7Actions, f7ActionsGroup, f7ActionsLabel, f7ActionsButton } from 'framework7-vue';
  export default {
    components: {
      f7Page,
      f7Navbar,
      f7BlockTitle,
      f7Block,
      f7Link,
      f7Button,
      f7Actions,
      f7ActionsGroup,
      f7ActionsLabel,
      f7ActionsButton,
    },
    data() {
      return {
        actionGridOpened: false,
      };
    },
    methods: {
      openActionsPopover() {
        const self = this;
        const app = self.$f7;
        if (!self.actionsToPopover) {
          self.actionsToPopover = app.actions.create({
            buttons: [
              {
                text: 'Are you sure to remove?',
                label: true,
              },
              {
                text: 'Remove',
                bold: true,
                onClick: function () {
                  app.dialog.alert('removed')
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
        }
        // Open
        self.actionsToPopover.open();
      },
    },
  };
</script>
