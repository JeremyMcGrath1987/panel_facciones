import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/files",
    name: "Files",
    component: () => import("../views/Files")
  },
  {
    path: "/file/:id",
    name: "File",
    component: () => import("../views/File")
  },
  {
    path: "/notes",
    name: "Notes",
    component: () => import("../views/Notes")
  },
  {
    path: "/note",
    name: "Note",
    component: () => import("../views/Note")
  },
  {
    path: "/debts",
    name: "Debts",
    component: () => import("../views/Debts")
  },
  {
    path: "/administration",
    name: "Admin",
    component: () => import("../views/Admin")
  },
  {
    path: "/debt",
    name: "Debt",
    component: () => import("../views/Debt")
  },
  {
    path: "/properties",
    name: "Properties",
    component: () => import("../views/Properties")
  },
  {
    path: "/report",
    name: "Report",
    component: () => import("../views/Report")
  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

export default router;
