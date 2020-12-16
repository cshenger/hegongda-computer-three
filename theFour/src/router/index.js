import Vue from 'vue'
import VueRouter from 'vue-router'
import Software from '../views/software/index.vue'
import Architecture from '../views/architecture/index.vue'
import Database from '../views/database/index.vue'
import Principle from '../views/principle/index.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/software'
  }, {
    path: '/software',
    name: 'software',
    component: Software
  },
  {
    path: '/architecture',
    name: 'architecture',
    component: Architecture
  },
  {
    path: '/database',
    name: 'database',
    component: Database
  },
  {
    path: '/principle',
    name: 'principle',
    component: Principle
  }
]

const router = new VueRouter({
  routes
})

export default router