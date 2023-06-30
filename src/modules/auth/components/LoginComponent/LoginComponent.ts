import { defineComponent, ref } from "vue"
import { useRouter } from "vue-router"

import { useAuth } from "../../composables/useAuth"

export default defineComponent({
	name: 'login-form',
	setup() {
		const router = useRouter()
		const { onLoginUser } = useAuth()

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