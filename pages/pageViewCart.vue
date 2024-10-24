<template>
  <q-page>
    <h5>Cart</h5>
  </q-page>
</template>

<script>
import router from 'src/router';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageViewCart',
  data: () => {
    return{
      cart: []
    }
  },
  created(){
    this.cart=this.$routes
    console.log(this.cart)
  }
})
</script>
