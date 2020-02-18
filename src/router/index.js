import Vue from 'vue'
import VueRouter from 'vue-router'
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
      component: Regist,
      hidden: true,
    }
  ],
  model:'history'
})
