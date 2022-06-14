import { createRouter, createWebHistory } from 'vue-router'
import CreateTask from "@/views/CreateTask";

const routes = [
  {
    path: '/',
    name: 'create',
    component: CreateTask
  },
  {
    path: '/list',
    name:'list',
    component: () => import('/src/views/List')
  },
  {
    path: '/task/:id',
    name:'task',
    component: () => import('/src/views/Tasks')
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
