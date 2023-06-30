import { RouteRecordRaw } from 'vue-router';

import isAuthenticatedGuard from '../modules/auth/guards/auth-guard';

// Importar componentes de forma asíncrona para una carga más eficiente
const LoginPage = () => import('../modules/auth/components/LoginComponent/LoginComponent.vue');
const SignupPage = () => import('../modules/auth/components/SignupComponent/SignupComponent.vue');
const HomePage = () => import('../components/HomePage/HomePage.vue');
const ErrorNotFoundPage = () => import('../views/ErrorNotFound/ErrorNotFound.vue');
const ProtectedRoute = () => import('../modules/protected/components/ProtectedRoute/ProtectedRoute.vue');


// Definir rutas como objetos separados para mayor claridad
const loginRoute: RouteRecordRaw = {
  path: '/login',
  name: 'login-page',
  component: LoginPage,
};

const signupRoute: RouteRecordRaw = {
  path: '/signup',
  name: 'signup-page',
  component: SignupPage,
};

const homeRoute: RouteRecordRaw = {
  path: '/home',
  name: 'home-page',
  beforeEnter: [isAuthenticatedGuard],
  component: HomePage,
};

const protectedRoute: RouteRecordRaw = {
  path: '/protected',
  name: 'protected-route',
  beforeEnter: [isAuthenticatedGuard],
  component: ProtectedRoute,
};

const errorNotFoundRoute: RouteRecordRaw = {
  path: '/:catchAll(.*)*',
  component: ErrorNotFoundPage,
};

// Definir las rutas principales
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'main-page',
    component: () => import('../views/MainPage/MainPage.vue'),
    children: [loginRoute, signupRoute, homeRoute, protectedRoute],
  },
  errorNotFoundRoute,
];

export default routes;