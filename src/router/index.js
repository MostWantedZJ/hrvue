import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../components/Login";
import Registe from "../components/Registe";
Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path:'',
      redirect:'/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      hidden: true
    },
    {
      path: '/registe',
      name: 'Registe',
      component: Registe,
      hidden: true,
    }
  ],
  mode:'history'
})
