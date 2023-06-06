import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth-store', {
    state: () => ({
        loginStatus: false,
    }),
    actions: {

    },
    getters: {
        doubleCount: (state) => state.loginStatus,
    },
});