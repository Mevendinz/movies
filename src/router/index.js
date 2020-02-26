import Vue from "vue";
import VueRouter from "vue-router";
import movieList from "../components/movieList";
import movieGrid from "../components/movieGrid";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/grid"
  },
  {
    path: "/list",
    name: "List",
    component: movieList
  },
  {
    path: "/grid",
    name: "Grid",
    component: movieGrid
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
