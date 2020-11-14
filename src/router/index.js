import Vue from "vue";
import VueRouter from "vue-router";
import Information from "../views/Information.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Information",
    component: Information
  },
  {
    path: "/moneymanagement",
    name: "MoneyManagement",
    component: () => import("../views/MoneyManagement")
  },
  {
    path: "/filesemployees",
    name: "FilesEmployees",
    component: () => import("../views/FilesEmployees")
  },
  {
    path: "/citizen",
    name: "Citizen",
    component: () => import("../views/Citizen")
  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

export default router;
