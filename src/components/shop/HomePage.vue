<template>
  <div class="content" v-on:mousedown="mouseout" >
    <div class="prods_cont">
      <ul id="v-for-object">
        <div v-for="(value, propertyName, index) in products" :key="index" class="prods" >
          
          <div class="prods_cont_in" v-on:click="go_detalle(value)">
            <div class="prods_brand">{{ value.brand }}</div>
            <div class="prods_img">
              <img v-bind:src="'https://'+ value.image" style="height:100%">
            </div>
            <div class="prods_desc">{{ substr(value.description) }}</div>
            <div class="prods_precio">$ {{ value.price.toLocaleString().replace(/,/g, '.')  }}</div>
          </div>

        </div>
      </ul>
    </div>
    <div style="width: 100%; height:60px; float:left;"></div>
  </div>
  
</template>

<script>
import router from '../../routes/routes'

export default {
  props: {
    buscador: String
  },
  computed: { 
    products: function() {
      document.getElementById('buscador').value = ""
      let filter_products = []
      let prod = JSON.parse(localStorage.getItem('products'))
      console.log("PRODS: "+prod.length)
      filter_products = prod
      return filter_products
    }
  },
  methods: {
    mouseEnter: function(event) {
      alert(JSON.stringify(event.type))
            console.log('mousenter');
            this.popup = true;
            this.$el.addEventListener('mousemove', this.mouseMove, false);
        },
    mouseover: function(){
      document.getElementById('user_options').style.display='none';
      document.getElementById('cart_options').style.display='none';
      document.getElementById('categorias_options').style.display='none';
    },    
    mouseout: function(){
      document.getElementById('user_options').style.display='none'
      document.getElementById('cart_options').style.display='none';
      document.getElementById('categorias_options').style.display='none';
    },
    substr: function(val){ return val.substr(0,70) },
    go_detalle: function(value){
      router.push('/detalle/'+value.id)
    },
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

body{
    background-color: #daaaf7;
}
</style>

<style>
  @import '../..//assets/css/app.css';
</style>
