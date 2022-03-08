import Vue from "vue";
import Router from "vue-router";
import Auth from "./views/Auth.vue";
import RemindPass from '@/views/RemindPass'
import Tutorial from '@/views/Tutorial'
import EnterData from '@/views/EnterData'
import EnterHours from '@/views/EnterHours'
import EnterKeys from '@/views/EnterKeys'
import CreatePlan from '@/views/CreatePlan'
import MyPlans from '@/views/MyPlans'

//import { auth } from './firebase/config.js'
Vue.use(Router);

export const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Auth",
      component: Auth
    },
    {
      path: "/przypomnij-haslo",
      name: "RemindPass",
      component: RemindPass
    },
    {
      path: "/samouczek",
      name: "Tutorial",
      component: Tutorial,
      meta: { requiresAuth: true }
    },
    {
      path: "/wpisz-dane",
      name: "EnterData",
      component: EnterData,
      meta: { requiresAuth: true }
    },
    {
      path: "/wpisz-klucze",
      name: "EnterKeys",
      component: EnterKeys,
      meta: { requiresAuth: true }
    },
    {
      path: "/wpisz-godziny",
      name: "EnterHours",
      component: EnterHours,
      meta: { requiresAuth: true }
    },
    {
      path: "/tworz-plan",
      name: "CreatePlan",
      component: CreatePlan,
      meta: { requiresAuth: true }
    },
    {
      path: "/moje-plany",
      name: "MyPlans",
      component: MyPlans,
      meta: { requiresAuth: true }
    },
    
  ]
});

// router.beforeEach((to, from, next) => {
//   const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
//   const isAuthenticated = auth.currentUser;
  
//   if (requiresAuth && !isAuthenticated) {
//     next("/samouczek");
//   } else {
//     next();
//   }
// });



// router.beforeEach((to, from, next) => {});
