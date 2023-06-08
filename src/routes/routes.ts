import { RouteRecordRaw } from 'vue-router';

// Importar componentes de forma asíncrona para una carga más eficiente
const LoginPage = () => import('../components/LoginComponent/LoginComponent.vue');
const SignupPage = () => import('../components/SignupComponent/SignupComponent.vue');
const HomePage = () => import('../components/HomePage/HomePage.vue');
const ErrorNotFoundPage = () => import('../views/ErrorNotFound/ErrorNotFound.vue');

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
  component: HomePage,
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
    children: [loginRoute, signupRoute, homeRoute],
  },
  errorNotFoundRoute,
];

export default routes;