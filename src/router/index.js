import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import  articletb  from '@/article/articletb'
import videotb from '@/video/videotb'
import  artconcent from '@/article/artconcent'
import  solider from '@/solider/solider'
import  Date from '@/date/Date'
import  Test from  '@/TEST/test'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/article',
      name:'articletb',
      component:articletb
    },
    {
      path: '/video',
      name:"videotb",
      component: videotb
    },
    {
      path:'/artconcent',
      name:'artconcents',
      component:artconcent
    },
    {
      path:'/solider',
      name:'solider',
      component:solider

    },
    {
      path:'/date',
      name:'Date',
      component:Date

    },
    ,
    {
      path:'/test',
      name:'Date',
      component:Test

    }
  ]
})
