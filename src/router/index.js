import Vue from "vue";
import VueRouter from "vue-router";
import Files from "../views/Files.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Files",
    component: Files
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
  },
  {
    path: "/files2",
    name: "Files2",
    component: () => import("../views/Files2")
  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

export default router;
