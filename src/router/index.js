import { createRouter, createWebHistory } from 'vue-router';
import ErrorPage from '../views/ErrorPage/Error.vue';

// Modules
import LoginPage from '../modules/auth';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // modules
    ...LoginPage,

    // 404 Not Found
    {
      path: "/:pathMatch(.*)*",
      name: "error",
      component: ErrorPage,
    }
  ]
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('access_token');
  if (to.meta && to.meta.login) next();
  if (token) next();
  else next('/login');
})

export default router;
