import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Sign_in from '../components/Sign/Sign_in.vue'
import Sign_up from '../components/Sign/Sign_up.vue'
import Tage from '../components/Tage/Tage.vue'
import tageHome from '../components/Tage/Tagechildren/tageHome.vue'
import tageList from '../components/Tage/Tagechildren/tageList.vue'
import Recycle from '../components/Tage/Tagechildren/Recycle.vue'
import DraFts from '../components/Tage/Tagechildren/DraFts.vue'
import Comment from '../components/Tage/Tagechildren/Comment.vue'
import Create from '../components/Tage/Tagechildren/Create.vue'
import ClassList from '../components/Tage/Tagechildren/ClassList.vue'
import Newarticle from '../components/Tage/Tagechildren/Newarticle.vue'
import MyInfo from '../components/Tage/Tagechildren/MyInfo.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'index',
      redirect:'/tage'
    },{
      path:'/sign_in',
      name:'sign_in',
      component:Sign_in
    },{
      path:'/sign_up',
      name:'sign_up',
      component:Sign_up
    },
    {
      path: '/tage',
      name: 'tage',
      component: Tage,
      children:[
        {
          path:'/',
          name:'tageIn',
          component:tageHome
        },{
          path:'tageList',
          name:'文章列表',
          component:tageList
        },{
          path:'recycle',
          name:'回收站',
          component:Recycle
        },{
          path:'drafts',
          name:'草稿箱',
          component:DraFts
        },
        {
          path:'comment',
          name:'评论',
          component:Comment
        },{
          path:'create',
          name:'创建',
          component:Create
        },{
          path:'classlist',
          name:'分类管理',
          component:ClassList
        },{
          path:'newarticle',
          name:'新建文章',
          component:Newarticle
        },{
          path:'myinfo',
          name:'我的信息',
          component:MyInfo
        },
      ]
    }
  ]
})
