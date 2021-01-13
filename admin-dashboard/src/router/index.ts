import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import ChangePassword from "../views/user/ChangePassword.vue";
import EditProfile from "../views/user/EditProfile.vue";
import Settings from "../views/Settings.vue";
import DashBoard from "../views/Dashboard.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    redirect: "/dashboard",
    children: [
      {
        path: "/change-password",
        name: "Change password",
        component: ChangePassword,
      },
      {
        path: "/edit-profile",
        name: "Edit profile",
        component: EditProfile,
      },
      {
        path: "/settings",
        name: "Settings",
        component: Settings,
      },
      {
        path: "/dashboard",
        name: "Dashboard",
        component: DashBoard,
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/user/Login.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export function useGo() {
  const { push, replace } = router;
  function go(path = "/", isReplace = false) {
    if (!path) return;

    isReplace ? replace(path) : push(path);
  }
  return go;
}

export default router;
