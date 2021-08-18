import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import BirthProveDeclare from "../components/bgdkl/birth/BirthProveDeclare";
import BirthUpload from "../components/bgdkl/birth/BirthUpload";
import kinship from "../components/bgdkl/kinship/kinship";
import Deposit from "../components/bgdkl/deposit/Deposit";
import notification from '../components/bgdkl/degree/notification'
import degreeMain from '../components/bgdkl/degree/degreeMain'
import next from '../components/bgdkl/degree/next'
import first from '../components/bgdkl/degree/first'
import shengcun from '../components/bgdkl/life/shengcun'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    //黄志国
    {
      path: '/BirthProveDeclare',
      name: 'BirthProveDeclare',
      component: BirthProveDeclare
    },
    {
      path: '/BirthUpload',
      name: 'BirthUpload',
      component: BirthUpload
    },
    {
      path:'/kinship',
      name:'kinship',
      component:kinship
    },
    {
      path: '/Deposit',
      name: 'Deposit',
      component: Deposit
    },
    {
      path: '/noti',
      name: 'notification',
      redirect:'/degreeMain',
      component : notification,
      children:[{
        path:'/degreeMain',
        name:'degreeMain',
        redirect:'/degreeMain/first',
        component: degreeMain,
        children:[{
          path:'/degreeMain/first',
          name:'first',
          component: first
        },{
          path:'/degreeMain/next',
          name:'next',
          component: next
        }
        ]
      }]
    },
    {
      path: '/shengcun',
      name: 'shengcun',
      component: shengcun
    }
  ]
})
