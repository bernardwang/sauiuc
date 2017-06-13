import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import NotFound from '@/components/NotFound'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      redirect: '/'
    }, {
      path: '/',
      name: 'Home',
      component: Home,
      meta: { link: '#home' }
    }, {
      path: '*',
      component: NotFound
    }
  ],
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      const linkElem = document.querySelector(to.hash)
      if (linkElem) {
        linkElem.scrollIntoView({ behavior: 'smooth' })
      }
      return
    }
    if (to.matched.some(m => m.meta.link)) {
      const linkElem = document.querySelector(to.meta.link)
      if (linkElem) {
        linkElem.scrollIntoView({ behavior: 'smooth' })
      }
      return
    }
    return {
      x: 0,
      y: 0
    }
  }
})

export default router
