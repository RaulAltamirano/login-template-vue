import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'login-page',
    component: () => import('../views/MainPage/MainPage.vue'),
    children: [
        { path: '/login', name: 'login-page', component: () => import('../components/LoginComponent/LoginComponent.vue') },
        { path: '/signup', name: 'signup-page', component: () => import('../components/SignupComponent/SignupComponent.vue') },
        { path: '/home', name: 'home-page', component: () => import('../components/HomePage/HomePage.vue') },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('../views/ErrorNotFound/ErrorNotFound.vue'),
  },
];

export default routes;
