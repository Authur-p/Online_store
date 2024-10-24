<template>



  <div>
    <div class="row">
      <div class="col"><h1 class="text-weight-light  text-primary text-h4 ">Our Products</h1></div>
      <header class="text-primary text-h4 text-weight-light q-pa-md">{{cart.length}} in cart</header>
    </div>

    <div class="products">
      <div v-for="product in products" :key="product.name" class="text-weight-bold q-pa-md" >{{product.name}}
        <img :src="product.image" height="200"/>
          <div>{{product.cost}}</div>
        <button  v-on:click="addItemToCart(product)" >Add to cart</button>
      </div>
    </div>
  </div>
</template>

<script>

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageHome',
  data: () => {
    return{
      cart: [],
      products: [
        {
          name: "Kim Crawford",
          cost: "$24.99",
          image: "https://www.nzhouseofwine.co.uk/pub/media/catalog/product/cache/fa6a9646b31a7991253155167cd3f867/k/i/kimczzzwhsa18mazz_1.png"
        },
        {
          name: "Napa Cellars",
          cost: "$20.99",
          image: "https://tse3.mm.bing.net/th?id=OIP.hL7JpaDF8kxIDim73BEgYAAAAA&pid=Api"
        },
        {
          name: "Barefoot Pinot",
          cost: "$80.99",
          image: "https://www.liquorstore-online.com/product_images/p_115568.jpg"
        },
        {
          name: "Margherita",
          cost: "$48.99",
          image: "https://products3.imgix.drizly.com/ci-santa-margherita-pinot-grigio-8d998254dd5b8901.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20"
        },
        {
          name: "Martini & Rossi",
          cost: "$35.99",
          image: "https://products1.imgix.drizly.com/ci-martini-rossi-rosso-sweet-vermouth-17925fd6f29021bd.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20"
        },
        {
          name: "La Crema",
          cost: "$13.99",
          image: "https://products2.imgix.drizly.com/ci-la-crema-pinot-noir-rose-d781cec722bf5ac8.png?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20"
        },
        {
          name: "Perrier Jouet",
          cost: "$128.99",
          image: "https://products2.imgix.drizly.com/ci-perrier-jouet-blanc-de-blancs-champagne-e663a7a79f8d1315.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20"
        },
        {
          name: "Kendall Jackson",
          cost: "$26.99",
          image: "https://products3.imgix.drizly.com/ci-kendall-jackson-cabernet-sauvignon-vintners-reserve-665fe5370ff50b81.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20"
        },
        {
          name: "Josh Cellars",
          cost: "$79.99",
          image: "https://products1.imgix.drizly.com/ci-josh-cellars-cabernet-sauvignon-c375f665c8fd9215.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20"
        },
      ]
    };
  },
  methods: {
    addItemToCart(product) {
      this.cart.push(product);
    },
  }
})
</script>

<style scoped>
.products{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

</style>



