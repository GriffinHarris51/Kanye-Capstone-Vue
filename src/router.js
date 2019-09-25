import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import AboutMe from "./views/AboutMe.vue";
import Music from "./views/Music.vue";
import SundayService from "./views/SundayService.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about-me",
      name: "about",
      component: AboutMe,
      meta: { color: "about-background" }
    },
    {
      path: "/music",
      name: "music",
      component: Music,
      meta: { color: "music-nav" }
    },
    {
      path: "/sunday-service",
      name: "sunday",
      component: SundayService,
      meta: { color: "sunday-nav" }
    }
  ]
});
