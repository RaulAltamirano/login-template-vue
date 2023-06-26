
import { defineComponent, onMounted } from 'vue';

import AuthenticatingPage from '../AuthenticatingPage/AuthenticatingPage.vue';

import { useAuth } from '../../composable/useAuth';
import { useRefreshTokenStorage } from '../../composable/useToken';

export default defineComponent({
  name: 'authenticating-page',
  components: { AuthenticatingPage },
  setup() {

    const {
      checkStatusLogin,
      getCurrentLoginUser
    } = useAuth()
    
    const {
      initIndexedDB
    } = useRefreshTokenStorage()
    
    onMounted(async () => {
      await initIndexedDB()
      await checkStatusLogin();
    });
    
    return {
      getCurrentLoginUser,
    }
  }
}
)
