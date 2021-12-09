import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Main from "@/views/Main.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },
  /*{
    path: "/about",
    name: "About",
    component: () =>
      import(/!* webpackChunkName: "about" *!/ "../views/About.vue"),
  },*/
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
