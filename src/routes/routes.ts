import { RouteRecordRaw } from 'vue-router';

// Importar componentes de forma asíncrona para una carga más eficiente
const LoginPage = () => import('../components/LoginComponent/LoginComponent.vue');
const SignupPage = () => import('../components/SignupComponent/SignupComponent.vue');
const HomePage = () => import('../components/HomePage/HomePage.vue');
const ErrorNotFoundPage = () => import('../views/ErrorNotFound/ErrorNotFound.vue');
const ProtectedRoute = () => import('../components/ProtectedRoute/ProtectedRoute.vue');
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

const protectedRoute: RouteRecordRaw = {
  path: '/protected',
  name: 'protected-route',
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