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
    path: "/filesemployees",
    name: "FilesEmployees",
    component: () => import("../views/FilesEmployees")
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
