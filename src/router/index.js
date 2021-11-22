import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/Home.vue";
import Cadastro from "../components/Cadastro.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: {
      subtitulo: "Home",
    },
  },
  {
    path: "/cadastro",
    name: "Cadastro",
    component: Cadastro,
    meta: {
      subtitulo: "Cadastro",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
