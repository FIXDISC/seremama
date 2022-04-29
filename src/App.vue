<template>
  <HomeTop :text='text'></HomeTop>
  <router-view :text='text' :carro='carro'/>
  <HomeBottom msg="BOTTOM"></HomeBottom>
</template>


<script>
// @ is an alias to /src
import HomeTop from "@/components/shop/HomeTop.vue"
import HomeBottom from "@/components/shop/HomeBottom.vue"
import { reactive, toRefs} from '@vue/reactivity'

import prods from '@/assets/js/01-products.js'
localStorage.setItem('products', JSON.stringify(prods))

export default {
  name: "HomePageView",
  components: {
    HomeTop,
    HomeBottom,
  },
  computed:{
  carro:function(){
        if(JSON.parse(localStorage.getItem('cart'))==undefined){
          return []
        }else{
          return JSON.parse(localStorage.getItem('cart'))
        }
      }
  },
  data: function() {
      //localStorage.removeItem('cart');
      let n_items = 0
      let despacho = 0
      let total= 0
      if(JSON.parse(localStorage.getItem('cart'))==undefined){
           n_items = 0;
           total = 0;
           despacho = 0;
      }else{
          let carro = JSON.parse(localStorage.getItem('cart'))
          n_items = 0
          total = 0
          despacho = 20000
          for(let i=0; i < carro.length; i++) {
            let prod = parseInt(carro[i].price) * parseInt(carro[i].qty)
            n_items = n_items + parseInt(carro[i].qty)
            total = parseInt(total) + prod
          }
          total = parseInt(total) + parseInt(despacho)
          
      }
    
    return {
      n_items: n_items,
      despacho: despacho,
      total: total
    }
  },
  setup(){
      const state = reactive({
        text: "PR"
      })
      return {... toRefs(state)}
  }
};
</script>