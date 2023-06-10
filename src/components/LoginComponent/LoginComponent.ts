import { defineComponent, ref } from "vue"
import { useAuth } from "../../composable/useAuth"

export default defineComponent({
	name: 'login-form',
	setup() {
		const { onLoginUser } = useAuth()
		const password = ref<string>('')
		const email = ref<string>('')
		const showPassword = ref<boolean>(false)
		return {
			password,
			email,
			showPassword,
			login() {
				onLoginUser({
					email: email.value,
					pasword: password.value,
				})
			}
		}
	}
}
)