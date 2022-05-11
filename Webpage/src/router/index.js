import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import productView from "@/components/productView"
import homePage from "../components/homePage"
import xy from "../view/xy"
import ml from "../view/ml"
import homePage2 from "../view/part/homePage"
import productView2 from "../view/part/productView"

Vue.use(Router)

export default new Router({
  models: 'history',
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
    },
    {
      path: '/ml',
      name: 'ml',
      component: ml,
      children: [
        {
        path: '',
        name: 'homePage2',
        component:homePage2
      },
        {
          path: 'productView2',
          name: 'productView2',
          component:productView2
        }
      ]
    },
    {
      path: '/xy',
      name: 'xy',
      component: xy,
    }
  ]
})
