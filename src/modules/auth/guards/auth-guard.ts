import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';

import { useAuth } from '../composables/useAuth';
import { useRefreshTokenStorage } from '../composables/useToken';
import { AuthenticationStatus } from '../interfaces';

const isAuthenticatedGuard = async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  const { initIndexedDB } = useRefreshTokenStorage();
  const { getStatusLogin, checkStatusLogin } = useAuth();
  await initIndexedDB()

  const status = getStatusLogin.value;
  if (status === AuthenticationStatus.Authenticated) {
    next();
  } else if (status === AuthenticationStatus.Authenticating) {
    try {
      await checkStatusLogin();
      next();
    } catch (error) {
      throw new Error('Authentication error');
    }
  } else if (status === AuthenticationStatus.NotAuthenticated) {
    next({ name: 'login-page' });
  } else {
    // Manejar otros estados si es necesario
    next({ name: 'error-page' });
  }
};

export default isAuthenticatedGuard;