import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';

import { useAuth } from '../composables/useAuth';
import { useRefreshTokenStorage } from '../composables/useToken';
// import { AuthenticationStatus } from '../interfaces';

const isAuthenticatedGuard = async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  const { checkStatusLogin, getStatusLogin } = useAuth();
  const { initIndexedDB } = useRefreshTokenStorage();

  try {
    await initIndexedDB();
    await checkStatusLogin();
    (getStatusLogin.value)
      ? next()
      : next({ name: 'login-page' });
  } catch (error) {
    console.error('Error in isAuthenticatedGuard:', error);
    next({ name: 'error-page' });
  }
};

export default isAuthenticatedGuard;