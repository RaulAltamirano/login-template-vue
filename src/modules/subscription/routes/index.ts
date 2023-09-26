import { RouteRecordRaw } from "vue-router";

const SubscriptionRoute = () => import(/*webpackChunkName : "Subscription-page"*/'../../subscription/views/SubscriptionPage/SubscriptionPage.vue');
const PaymentMethodRoute = () => import(/*webpackChunkName : "Payment-Method-page"*/'../../subscription/views/PaymentMethods/PaymentMethods.vue');
const SuccessPaymentRoute = () => import(/*webpackChunkName : "Success-Payment-page"*/'../../subscription/views/SuccessPaymentPage/SuccessPaymentPage.vue');

const subscriptionPage: RouteRecordRaw = {
    path: '/subscription',
    name: 'subscription-route',
    component: SubscriptionRoute,
};

const paymentMethodPage: RouteRecordRaw = {
    path: '/payment-method',
    name: 'payment-method-page',
    component: PaymentMethodRoute,
};
const successPaymentPage: RouteRecordRaw = {
    path: '/success-payment',
    name: 'success-payment',
    component: SuccessPaymentRoute,
};

export default {
    name: 'subscription',
    component: () => import(/*webpackChunkName : "Main-page"*/'../../../views/MainPage/MainPage.vue'),
    children: [subscriptionPage, paymentMethodPage, successPaymentPage],
}
