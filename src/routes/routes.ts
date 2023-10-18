import { RouteRecordRaw } from 'vue-router';

import isAuthenticatedGuard from '../modules/auth/guards/auth-guard';
import authRouter from '../modules/auth/routes'
import subscriptionRouter from '../modules/subscription/routes'

const HomePage = () => import(/*webpackChunkName : "Home-page"*/'../modules/home/components/HomePage/HomePage.vue');
const ErrorNotFoundPage = () => import(/*webpackChunkName : "Error-not-found-page"*/'../views/ErrorNotFound/ErrorNotFound.vue');
const ProtectedRoute = () => import(/*webpackChunkName : "Protected-page"*/'../modules/protected/components/ProtectedRoute/ProtectedRoute.vue');

const homeRoute: RouteRecordRaw = {
  path: '/home',
  name: 'home-page',
  component: HomePage,
};

const protectedRoute: RouteRecordRaw = {
  path: '/protected',
  name: 'protected-route',
  component: ProtectedRoute,
};

const errorNotFoundRoute: RouteRecordRaw = {
  path: '/:catchAll(.*)*',
  component: ErrorNotFoundPage,
};

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'main-page',
    redirect: '/home',
    beforeEnter: [isAuthenticatedGuard],
    component: () => import(/*webpackChunkName : "Main-page"*/ '../views/MainPage/MainPage.vue'),
    children: [homeRoute, protectedRoute],
  },
  {
    path: '/subscription',
    beforeEnter: [isAuthenticatedGuard],
    ...subscriptionRouter
  },
  {
    path: '/auth',
    ...authRouter
  },
  errorNotFoundRoute,
];

export default routes;