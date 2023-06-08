import { defineComponent, ref } from "vue"

export default defineComponent({
	name: 'login-form',
	setup() {
		const password = ref<string>('')
		const email = ref<string>('')
		const showPassword = ref<boolean>(false)
		const rememberMe = ref<boolean>(false)
		return {
			password,
			email,
			showPassword,
			rememberMe,
			login() {
				console.log('submit');
			}
		}
	}
}
)