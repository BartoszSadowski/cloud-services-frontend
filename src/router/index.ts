import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { MAIL_GROUPS, MAIN, LOGIN } from "@/dicts/routes";
import Login from "@/views/Login.vue";
import Main from "@/views/Main.vue";
// import { authenticationStore } from "@/store/authentication";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: MAIN,
    component: Main,
  },
  {
    path: "/mail-groups",
    name: MAIL_GROUPS,
    component: () =>
      import(/* webpackChunkName: "mailGroups" */ "../views/MailGroups.vue"),
  },
  {
    path: "/login",
    name: LOGIN,
    component: Login,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//   const { isLoggedIn } = authenticationStore.getState();

//   if ([LOGIN, MAIN].includes(to.name as string) || isLoggedIn) {
//     return next();
//   }

//   next({ name: LOGIN });
// });

export default router;
