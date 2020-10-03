import Vue from "vue";
import VueRouter from "vue-router";
const home = () => import("../components/home.vue");
const projects = () => import("../components/projects.vue");
const project = () => import("../components/project.vue");
const contact = () => import("../components/contact.vue");
const admin = () => import("../components/admin.vue");

// import home  from "../components/home.vue";
// import projects  from "../components/projects.vue";
// import project  from "../components/project.vue";
// import contact  from "../components/contact.vue";
// import admin  from "../components/admin.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: home
  },

  {
    path: "/projects",
    name: "Projects",
    component: projects
  },
  {
    path: "/project/:id",
    props: true,
    name: "Project",
    component: project
  },
  {
    path: "/contact",
    name: "Contact",
    component: contact
  },
  {
    path: "/emails",
    name: "Admin",
    component: admin
  }
];

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
