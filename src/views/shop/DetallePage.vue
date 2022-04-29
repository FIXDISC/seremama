<template>
  <div class="content_det" v-on:mouseover="mouseover" v-on:blur="mouseover" >

      <div class="detalle_prod">

          <div class="detalle_img">
              <div class="prods_img_det">
                <img style="position:relative;height:100%" class="det_img" v-bind:src="'https://'+ products[0].image" >
              </div>
          </div>

          <div class="detalle_info">
              <div class="detalle_brand">{{ products[0].brand }}</div>
              <div class="detalle_description">{{ products[0].description }}</div>
              <div class="detalle_precio">$ {{ products[0].price.toLocaleString().replace(/,/g, '.')  }}</div>
              
              <div class="detalle_description">Disponibles:</div>

              <div class="boton_big" style="margin-top:25px">Comprar</div>
              <div class="boton_big" style="margin-top:5px;vertical-align:middle; text-align:middle; background-color:#9180d6">
                <div style="position:relative; float:left; vertical_align: middle; left: 50px; top: -3px">
                  <svg id="ico_cart" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 24 24" width="30px" fill="rgba(255,255,255,0.5)"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path></svg>
                </div>
                <div v-on:click="add_product(products[0])" style="position:absolute; float:left; vertical_align:middle; width: 100%;">Agregar al Carro</div>
              </div>
          </div>
          
      </div>
      
      
  </div>
  <div style="width: 100%; height:130px; float:left;"></div>

  <!--
                <div class="prods_img_det">
              <img v-bind:src="'https://'+ products[0].image" style="position:relative;height:100%">
            </div>
            <div class="det_description">
              <div>{{ products[0].description }}</div>
              
              
            </div>
  -->
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
        mouseover: function(){
          alert("D")
          document.getElementById('user_options').style.display='none';
          document.getElementById('cart_options').style.display='none';
          document.getElementById('categorias_options').style.display='none';
        },  
        substr: function(val){ return val.substr(0,70) },
        add_product: function(item){
          let total = 0
          let despacho = 20000;
          this.$root.despacho = despacho
          let index = null
          for(let i=0; i < this.$root.carro.length; i++) {
            if(parseInt(this.$root.carro[i].id) == parseInt(item.id)) {index = i}
          }
          
          if(index!=null){
            this.$root.carro[index].qty = parseInt(this.$root.carro[index].qty)+1
          }else{
            item.qty = 1;
            this.$root.carro.push(item)
          }

          let total_items = 0
          for(let i=0; i < this.$root.carro.length; i++) {
            let prod = parseInt(this.$root.carro[i].price) * parseInt(this.$root.carro[i].qty)
            total_items = total_items + parseInt(this.$root.carro[i].qty)
            total = parseInt(total) + prod
          }

          this.$root.n_items = parseInt(total_items)
          this.$root.total = parseInt(total) + parseInt(despacho)
          localStorage.setItem('cart', JSON.stringify(this.$root.carro))

          document.getElementById("prod_counter").style.display="none"
          setTimeout(function(){document.getElementById("prod_counter").style.display="block"}, 100)
        }
      }
  }
</script>

<style>
@import "../..//assets/css/detalle.css";
</style>