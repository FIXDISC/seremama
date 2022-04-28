<template>
  <div class="content_det">
        <div class="prods_det" >
            <div class="prods_img_det">
              <img v-bind:src="'https://'+ products[0].image" style="height:100%">
            </div>
            <div class="det_description">
              <div>{{ products[0].description }}</div>
              <div class="prods_brand_det">{{ products[0].brand }}</div>
              <div class="prods_precio_det">$ {{ products[0].price.toLocaleString().replace(/,/g, '.')  }}</div>
            </div>
          </div>
        <div style="width: 100%; height:60px; float:left;"></div>
  </div>
  
</template>
<script>
  export default {
      name: "DetallePage",
      computed: {
        products: function(){
          let filter_products = []
          let index = null
          let prods = JSON.parse(localStorage.getItem('products'))
          for(let i=0; i < prods.length; i++) {
            if(parseInt(prods[i].id) == parseInt(this.$route.params.id)) {index = i}
          }
          if(index!=null){ filter_products.push(prods[index]) }
          return filter_products
        }
      },
      methods:{
        substr: function(val){ return val.substr(0,70) }
      }
  }
</script>

<style>
@import "../..//assets/css/detalle.css";
</style>