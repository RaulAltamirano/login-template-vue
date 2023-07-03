import { RouteRecordRaw } from "vue-router";

const LoginPage = () => import(/*webpackChunkName : "Login-page"*/'../components/LoginComponent/LoginComponent.vue');
const SignupPage = () => import(/*webpackChunkName : "Signup-page"*/'../components/SignupComponent/SignupComponent.vue');

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

export default {
    name: 'auth',
    component: () => import(/*webpackChunkName : "Main-page"*/'../../../views/MainPage/MainPage.vue'),
    children: [loginRoute, signupRoute],
}
