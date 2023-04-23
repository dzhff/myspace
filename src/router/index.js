import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import HomeBase from '@/components/HomeBase'
import FriendChat from '@/components/FriendChat'
import FriendDist from '@/components/FriendDist'
import HomeMymessage from '@/components/HomeMymessage'
import DistPage from '@/components/DistPage'
import HomeTodo from '@/components/HomeTodo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'login',
      component:Login
    },{
      path:'/home',
      name:'home',
      component:Home,
      children:[
        {
          path:'/',
          component:HomeBase
        },
        {
          path:'friendchat',
          component:FriendChat
        },
        {
          path:'frienddist',
          component:FriendDist
        },
        {
          path:'homemymessage',
          component:HomeMymessage
        },
        {
          path:'distpage',
          name:'distpage',
          component:DistPage
        },
        {
          path:'hometodo',
          component:HomeTodo
        }
      ]
    }
  ]
})
