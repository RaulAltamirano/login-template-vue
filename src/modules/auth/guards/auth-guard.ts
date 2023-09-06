import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';

import { useAuth } from '../composables/useAuth';
import { useRefreshTokenStorage } from '../composables/useToken';

const isAuthenticatedGuard = async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  const { checkStatusLogin, getStatusLogin } = useAuth();
  const { initIndexedDB } = useRefreshTokenStorage();

  try {
    await Promise.all([initIndexedDB, checkStatusLogin])
    console.log(getStatusLogin.value);
    (getStatusLogin.value === 1 ||  getStatusLogin.value === 2 )
      ? next()
      : next({ name: 'login-page' });
  } catch (error) {
    console.error('Error in isAuthenticatedGuard:', error);
    next({ name: 'error-page' });
  }
};

export default isAuthenticatedGuard;