
import SampleRoute from "./views/SampleRoute.vue"
import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [
  {
    component: SampleRoute,
    name: SampleRoute.name,
    path: "/",
  },
  // {
  //   component: () => import(/* webpackChunkName: "name" */ "../views/ViewComponent.vue"),
  //   name: "name",
  //   path: "/path",
  // },
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  mode: process.env.IS_ELECTRON ? "hash" : "history",
  routes,
})

export default router
