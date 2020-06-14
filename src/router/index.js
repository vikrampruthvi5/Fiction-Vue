import Vue from "vue";
import VueRouter from "vue-router";
import Captcha from "../views/Captcha.vue";
import Home from "../views/Home.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Captcha",
    component: Captcha
  },
  {
    path: "/home",
    name: "Home",
    component: Home
  }
];

const router = new VueRouter({
  hashbang: false,
  mode: 'history',
  routes
});

export default router;
