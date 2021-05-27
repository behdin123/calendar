
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/om-gruppen',
    name: 'om-gruppen',
    component: () => import(/* webpackChunkName: "about" */ '../views/OmGruppen.vue')
  },
  {
    path: '/afdelinger',
    name: 'afdelinger',
    component: () => import(/* webpackChunkName: "adfelinger" */ '../views/Afdelinger.vue')
  },
  {
    path: '/bliv-spejder',
    name: 'bliv-spejder',
    component: () => import(/* webpackChunkName: "bliv-spejder" */ '../views/BlivSpejder.vue')
  },
  {
    path: '/praktisk',
    name: 'praktisk',
    component: () => import(/* webpackChunkName: "praktisk" */ '../views/Praktisk.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
