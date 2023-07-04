
import { defineComponent, onMounted } from 'vue';

import AuthenticatingPage from '../../modules/auth/views/AuthenticatingPage/AuthenticatingPage.vue';

import { useAuth } from '../../modules/auth/composables/useAuth';
import { useRefreshTokenStorage } from '../../modules/auth/composables/useToken';
import { AuthenticationStatus } from '../../modules/auth/interfaces';

export default defineComponent({
  name: 'authenticating-page',
  components: { AuthenticatingPage },
  setup() {
    const {
      checkStatusLogin,
      getStatusLogin
    } = useAuth()

    const {
      initIndexedDB
    } = useRefreshTokenStorage()

    onMounted(async () => {
      await initIndexedDB()
      await checkStatusLogin();
    });

    return {
      getStatusLogin,
      AuthenticationStatus,
    }
  }
}
)
