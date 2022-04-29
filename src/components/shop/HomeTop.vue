<template>
  <header class="header" >
    <div class="top_cont">
      <div class="top">
<!--  ######   LOGO  ######  -->
        <div class="logo1" style="float: left">
          <router-link to="/">
            <img class="img_logo1" alt="logo" src="../../assets/img/logo1.png" height="80" />
          </router-link>
        </div>

        <div class="logo2" style="float: left">
          <img class="img_logo2" alt="logo" src="../../assets/img/logo2.png" height="80" />
        </div>

<!--  ######   BUSCADOR  ######  -->
        <div class="con_buscador">
              <input id="buscador" v-on:keyup="buscar" v-on:mouseover="foco"
              class="buscador"
              type="text"
              placeholder="Ej: Coches"
              />
        </div>

<!--  ######   ICONOS  ######  -->
        <div id="prod_counter" class="prod_counter">
            {{ this.$root.n_items }}
        </div>
        <div class="iconos" v-on:mouseover="mouseover" style="cursor:pointer">
          <svg id="icon_account" xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 24 24" width="40px" fill="#7e71b4"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>
        </div>
        <div class="iconos" v-on:mouseover="mouseover_carro" style="cursor:pointer">
          <svg id="ico_cart" xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 24 24" width="40px" fill="#7e71b4"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>
        </div>
        

<!--  ######   NAV MENU  ######  -->
        <div class="menu">
            <div>
              <nav>
                <router-link to="/cat/coche"> COCHES</router-link>
                <router-link to="/cat/cunas"> CUNAS</router-link>
                <router-link to="/cat/sillas"> SILLAS</router-link>
                <router-link to="/cat/salud"> SALUD E HIGIENE</router-link>
                <router-link to="/about"> OFERTAS</router-link>
              </nav>
              <nav class="nav1" style="padding:0px;margin:0px; cursor:pointer" v-on:mouseover="mouseover_categorias">
                <svg xmlns="http://www.w3.org/2000/svg" height="17px" viewBox="0 0 24 24" width="20px" fill="#fff"><path d="M0 0h24v24H0z" fill="#7e71b4"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
                <span>CATEGORIAS</span>
              </nav>
            </div>
         </div>
        <div class="shadow"></div>

<!--  ######   MENU CATEGORIAS  ######  -->
        <div id="categorias_options" class="categorias_options" v-on:mouseout="mouseout_categorias" v-on:mouseover="mouseover_categorias">
          <div class="shadow1"></div>
          <div style="width:100%; height:2px;background-color:#ccc"></div>
          <router-link to="/cat/coche" v-on:click="hide_cat()"><div class="user_menu">COCHES</div></router-link>
          <div style="width:100%; height:2px;background-color:#ccc"></div>
          <router-link to="/cat/cunas" v-on:click="hide_cat()"><div class="user_menu">CUNAS</div></router-link>
          <div style="width:100%; height:2px;background-color:#ccc"></div>
          <router-link to="/cat/sillas" v-on:click="hide_cat()"><div class="user_menu">SILLAS</div></router-link>
          <div style="width:100%; height:2px;background-color:#ccc"></div>
          <router-link to="/cat/salud" v-on:click="hide_cat()"><div class="user_menu">SALUD E HIGIENE</div></router-link>
          <div style="width:100%; height:2px;background-color:#ccc"></div>
          <div class="user_menu" style="padding-top:5px; height:8px;"></div>
          <div style="position:absolute;width:100%; height:18px;background-color:#7e71b4;bottom:0px;"></div>
        </div>  

<!--  ######   CARRO  ######  -->
        <div id="cart_options" class="cart_options" v-on:mouseout="mouseout_carro" v-on:mouseover="mouseover_carro">
          <div class="shadow1"></div>
          <div style="width:100%; height:2px;background-color:#ccc"></div>
          <div class="cart_menu">
            <svg style="float:left;" xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 0 24 24" width="28px" fill="#7e71b4"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>
            <span style="float:left;padding-left: 15px; padding-top:5px;">Mi Carro</span>
          </div>
          <div style="width:100%; height:2px;background-color:#ccc"></div>

          <div style="width:100%; height:10px;"></div>
            <div style="max-height:200px; overflow-y:auto">
              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr class="cart_item_row" v-for="(value, propertyName, index) in this.$root.carro" :key="index">
                  <td class="cart_item" style="cursor:pointer" v-on:click="del_product(value.id)">
                    <div >
                      <svg class="del_button" xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#ccc" style="a hover{ color:#c35c46}"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"/></svg>
                    </div> 
                  </td>
                  <td class="cart_item" style="white-space: normal;font-size:1rem;"><b>{{ value.qty }}</b></td>
                  <td class="cart_item" style="white-space: normal;">{{ value.description }}</td>
                  <td class="cart_item" style="text-align:right;">$ {{ value.price.toLocaleString().replace(/,/g, '.') }}</td>
                </tr>
              </table>
            </div>

          <div class="user_menu" style="padding: 0px;height: 20px;">
            <table width="100%">
              <tr>
                <td width="70%" style="text-align:right; padding:0; font-size:0.8rem"><b>DESPACHO:</b></td>
                <td style="text-align:right;font-size:0.8rem">$ {{ this.$root.despacho.toLocaleString().replace(/,/g, '.') }}</td>
              </tr>
            </table>
          </div>
          <div class="cart_menu" style="padding-top:5px;">
            <table width="100%" cellspacing="0" cellpadding="0">
              <tr>
                <td width="70%" style="text-align:right"><b>TOTAL:</b></td>
                <td style="text-align:right; font-size:1.1rem;">
                  <div class="total" style="position:relative; width:100%">$ <b>{{ this.$root.total.toLocaleString().replace(/,/g, '.') }}</b>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          <div class="cart_menu" style="padding-top:5px; text-align: center; width:100%;box-sizing: border-box;">
            <div v-if="this.$root.carro.length>0" class="boton_big">Comprar</div>
            <div v-else class="boton_big" style="background-color:#ccc; cursor: default">Comprar</div>
          </div>
          <div style="position:absolute;width:100%; height:18px;background-color:#7e71b4;bottom:0px;"></div>
        </div>

<!--  ######   MENU USUARIO  ######  -->
        <div id="user_options" class="user_options" v-on:mouseout="mouseout" v-on:mouseover="mouseover">
          <div class="shadow1"></div>
          <div style="width:100%; height:2px;background-color:#ccc"></div>
          <div class="user_menu">Mis Compras</div>
          <div style="width:100%; height:2px;background-color:#ccc"></div>
          <div class="user_menu">Mi Perfil</div>
          <div style="width:100%; height:2px;background-color:#ccc"></div>
          <div class="user_menu">Cerrar Sesión</div>
          <div style="width:100%; height:2px;background-color:#ccc"></div>
          <div class="user_menu" style="padding-top:5px; height:8px;"></div>
          <div style="position:absolute;width:100%; height:18px;background-color:#7e71b4;bottom:0px;"></div>
        </div>

      </div>
    </div>

    
  </header>
</template>

<script>
import router from '../../routes/routes'
import { reactive, toRefs, computed} from '@vue/reactivity'

export default {
  name: "HomeTop",
  props: {
    msg: String
  },
  setup(){
      const state = reactive({
        txt: "",
        cart_items: computed(() => get_cart()),
      })

      function get_cart(){
        return []
      }

      return {... toRefs(state)}
  },
  methods: {
    foco: function(){
      document.getElementById('buscador').focus()
    },
    mouseover: function(){
      document.getElementById('cart_options').style.display='none';
      document.getElementById('cart_options').focus()
      document.getElementById('user_options').style.display='block';
      document.getElementById('categorias_options').style.display='none';
    },    
    mouseout: function(){
        document.getElementById('user_options').style.display='none'
    },
    mouseover_carro: function(){
      document.getElementById('user_options').style.display='none'
      document.getElementById('cart_options').style.display='block';
      document.getElementById('categorias_options').style.display='none';
    },    
    mouseout_carro: function(){
        document.getElementById('cart_options').style.display='none'
    },
    mouseover_categorias: function(){
      document.getElementById('user_options').style.display='none'
      document.getElementById('cart_options').style.display='none';
      document.getElementById('categorias_options').style.display='block';
    },    
    mouseout_categorias: function(){
        document.getElementById('categorias_options').style.display='none'
    },
    hide_cat: function(){
      document.getElementById('categorias_options').style.display='none';
    },
    buscar: function(){
      let products = JSON.parse(localStorage.getItem('products'));
      let txt = document.getElementById('buscador').value.trim()
      if(txt.trim()==""){
        router.push({ path:'/' },{products: products, buscador: ""});
      }
      if(txt.trim().length>2){
        let filter_products = []
        let products = JSON.parse(localStorage.getItem('products'));
        let res = true
        let res1 = false
        for(let v=0;v<txt.length;v++){
            if(txt[v]==txt[(txt.length-1)-v]){res1=true}else{res1=false;res=res1}
        }
        if(res){
          console.log('POLINDRMO')
        }
        
        filter_products = products.filter(
          item => item.brand.toLowerCase().includes(txt.toLowerCase())  || 
                  item.description.toLowerCase().includes(txt.toLowerCase()) 
        );
        
        if(filter_products==""){filter_products=[]}
        router.push({ path:'/filter/'+txt },{products: filter_products, buscador: txt});
      }else{
        let products = JSON.parse(localStorage.getItem('products'));
        router.push({ path:'/' },{products: products, buscador: ""});
      }
    },
    del_product: function(id){
      let total = 0
      let despacho = 0
      if(parseInt(this.$root.carro.length)>1){despacho = 20000}
      this.$root.despacho = despacho
      let index = null

      for(let i=0; i < this.$root.carro.length; i++) {
        if(parseInt(this.$root.carro[i].id) == parseInt(id)) {
          index = i}
      }
      
      if(index!=null){
        if(this.$root.carro[index].qty>1){
          this.$root.carro[index].qty = parseInt(this.$root.carro[index].qty)-1
        }else{
          this.$root.carro.splice(index,1)
        }
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
    }
  }
};


</script>

<style>
@import "../..//assets/css/app.css";
</style>