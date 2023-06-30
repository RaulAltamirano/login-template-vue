import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';

import { useAuth } from '../composables/useAuth';
import { useRefreshTokenStorage } from '../composables/useToken';

const isAuthenticatedGuard = async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
    const { checkStatusLogin } = useAuth();
    const { initIndexedDB } = useRefreshTokenStorage();

    try {
        await initIndexedDB();
        const isLogged = await checkStatusLogin();
        if (isLogged) next();
        else next({ name: 'login-page' });
    } catch (error) {
        console.error('Error in isAuthenticatedGuard:', error);
        next({ name: 'error-page' });
    }
};

export default isAuthenticatedGuard;