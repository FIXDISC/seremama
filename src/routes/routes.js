import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/components/shop/HomePage.vue";
import FilterPage from "@/components/shop/FilterPage.vue";
import DetallePage from "@/views/shop/DetallePage.vue";
import AboutView from "@/views/AboutView.vue";

const router = createRouter({
  history: createWebHistory('/SEREMAMA/'),
  routes: [
    {
      path: "/about",
      component: AboutView 
    },
    {
      name: "Home",
      path: "/",
      component: HomePage,
      props: {products: [], buscador: ""}
    },
    {
      name: "Filter",
      path: "/filter/:txt",
      component: FilterPage,
    },
    {
      name: "Category",
      path: "/cat/:txt",
      component: FilterPage,
      props: {products: [], buscador: ""}
    },
    {
      name: "Detalle",
      path: "/detalle/:id",
      component: DetallePage,
    }
  ]
});

export default router;