import { defineComponent, ref } from "vue"

export default defineComponent({
	name: 'signup-form',
	setup() {
		const name = ref('')
		const email = ref('')
		const password = ref('')
		const confirmPassword = ref('')
		return {
			name,
			email,
			password,
			confirmPassword,
			signup(){
				console.log('signup');
			}
		}
	}
}
)