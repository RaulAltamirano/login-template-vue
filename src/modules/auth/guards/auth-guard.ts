import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';

import { useAuth } from '../composables/useAuth';
import { useRefreshTokenStorage } from '../composables/useToken';
import { AuthenticationStatus } from '../interfaces';

const isAuthenticatedGuard = async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  try {
    const { initIndexedDB } = useRefreshTokenStorage();
    const { getStatusLogin, checkStatusLogin } = useAuth();

    await initIndexedDB();
    const status = getStatusLogin.value;
    console.log(status);

    switch (status) {
      case AuthenticationStatus.Authenticated:
        next();
        break;
      case AuthenticationStatus.Authenticating:
        await checkStatusLogin();
        next();
        break;
      case AuthenticationStatus.NotAuthenticated:
        next({ name: 'login-page' });
        break;
      default:
        next({ name: 'error-page' });
        break;
    }
  } catch (error) {
    console.error('Authentication error:', error);
    next({ name: 'error-page' });
  }
};

export default isAuthenticatedGuard;