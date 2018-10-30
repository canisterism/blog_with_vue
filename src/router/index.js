import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import About from '@/components/About'
import Contact from '@/components/Contact'
import articleTemplate from '@/components/ArticleTemplate'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/index'
    },
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      component: Index
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/contact',
      component: Contact
    },
    {
      path: '/article/1',
      component: articleTemplate
    }
  ]
})

export default router
