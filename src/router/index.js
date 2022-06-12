import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import serviceOneView from "../views/serviceOneView.vue";
import pricingView from "../views/pricingView.vue";
import teamView from "../views/teamView.vue";
import contactView from "../views/contactView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/services",
    name: "service",
    component: serviceOneView,
  },
  {
    path: "/pricing",
    name: "price",
    component: pricingView,
  },
  {
    path: "/team",
    name: "team",
    component: teamView,
  },
  {
    path: "/contact",
    name: "contact",
    component: contactView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
