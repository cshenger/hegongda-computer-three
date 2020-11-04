import Vue from 'vue'
import VueRouter from 'vue-router'
import Assembly from '../views/assembly/index.vue'
import Composition from '../views/composition/index.vue'
import Math from '../views/math/index.vue'
import Microcomputer from '../views/microcomputer/index.vue'
import Net from '../views/net/index.vue'
import System from '../views/system/index.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/Assembly'
  }, {
    path: '/Assembly',
    name: 'Assembly',
    component: Assembly
  },
  {
    path: '/Composition',
    name: 'Composition',
    component: Composition
  },
  {
    path: '/Math',
    name: 'Math',
    component: Math
  },
  {
    path: '/Microcomputer',
    name: 'Microcomputer',
    component: Microcomputer
  },
  {
    path: '/Net',
    name: 'Net',
    component: Net
  },
  {
    path: '/System',
    name: 'System',
    component: System
  }
]

const router = new VueRouter({
  routes
})

export default router