
import { defineComponent } from 'vue';

import AuthenticatingPage from '../AuthenticatingPage/AuthenticatingPage';

import { useAuth } from '../../composable/useAuth';

export default defineComponent({
  name: 'authenticating-page',
  components: { AuthenticatingPage },
  setup() {
    const {
      checkStatusLogin,
      getCurrentLoginUser
    } = useAuth()
    checkStatusLogin()
    return {
      getCurrentLoginUser,
    }
  }
}
)
