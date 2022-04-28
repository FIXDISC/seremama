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
  return {
      n_items: 0,
      despacho: 0,
      total: 0
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