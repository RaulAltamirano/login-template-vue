
import { defineComponent, ref } from 'vue';
import AuthenticatingPage from '../../components/AuthenticatingPage/AuthenticatingPage.vue';
export default defineComponent({
  name: 'authenticating-page',
  components: { AuthenticatingPage },
  setup() {
    const isAuth = ref<boolean>(false)
    // const {checkStatusLogin}= useAuth()
    return {
      isAuth,
      // checkStatusLogin
    }
  }
}
)
