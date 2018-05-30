<template>
  <f7-page>
    <f7-navbar title="Add Item" back-link="Back"></f7-navbar>
    <f7-list form>

      <f7-list-item>
        <f7-label>Item Name</f7-label>
        <f7-input type="text" placeholder="Name"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <div>
          <p>My File Selector: <file-select name="file"></file-select></p>
          <p v-if="file">{{file.name}}</p>
        </div>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Category</f7-label>
        <f7-input type="select">
          <option value="Book">Book</option>
          <option value="Clothing">Clothing</option>
          <option value="Electronics">Electronics</option>
          <option value="Furniture">Furniture</option>
          <option value="Other">Other</option>
        </f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Price</f7-label>
        <f7-input type="text" placeholder="฿"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Description</f7-label>
        <f7-input type="textarea" placeholder="Describe it"></f7-input>
      </f7-list-item>
    </f7-list>


    <f7-block >
      <f7-row tag="p">
        <f7-button class="col" fill>SELL IT!</f7-button>
      </f7-row>
    </f7-block>

  </f7-page>
</template>

<script>
import F7List from "framework7-vue/src/components/list";
import F7ListItem from "framework7-vue/src/components/list-item";
import FileSelect from './../../components/Items/FileSelect'

export default {
  components: {
    F7ListItem,
    F7List,
    FileSelect
  },
  data() {
    return {
      file: null
    }
  }
}
</script>
