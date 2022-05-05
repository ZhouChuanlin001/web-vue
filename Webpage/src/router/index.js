import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import productView from "@/components/productView"
import homePage from "../components/homePage"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children:[
        {
          path: 'productView',
          name: 'productView',
          component: productView
        },
        {
          path: '',
          name: 'homePage',
          component: homePage
        }
      ]
    }
  ]
})
