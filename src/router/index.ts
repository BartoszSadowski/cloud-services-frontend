import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { MAIN, MAIL_DETAIL, MAIL_LIST, LOGIN } from "@/dicts/routes";
import SendMail from "../views/SendMail.vue";
import Login from "../views/Login.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: MAIN,
    component: SendMail,
  },
  {
    path: "/mails",
    name: MAIL_LIST,
    component: () =>
      import(/* webpackChunkName: "mailList" */ "../views/MailList.vue"),
  },
  {
    path: "/mails/:id",
    name: MAIL_DETAIL,
    component: () =>
      import(/* webpackChunkName: "mailDetail" */ "../views/MailDetail.vue"),
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

export default router;
