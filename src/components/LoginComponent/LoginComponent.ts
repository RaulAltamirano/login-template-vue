import { defineComponent, ref } from "vue"
import { useAuth } from "../../composable/useAuth"
import { useRouter } from "vue-router"

export default defineComponent({
	name: 'login-form',
	setup() {
		const { onLoginUser } = useAuth()
		const router = useRouter()
		const password = ref<string>('')
		const email = ref<string>('')
		const showPassword = ref<boolean>(false)
		return {
			password,
			email,
			showPassword,
			async login() {
				const user = await onLoginUser({
					email: email.value,
					password: password.value,
				})
				if (user) router.push({ name: 'home-page' })
			}
		}
	}
}
)