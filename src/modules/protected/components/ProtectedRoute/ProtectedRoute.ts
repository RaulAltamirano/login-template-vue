import { defineComponent, onMounted, ref } from "vue"
import { useRouter } from "vue-router";
import { useAuth } from "../../../auth/composables/useAuth";

export default defineComponent({
	name: 'protected-route',
	setup() {
		const router = useRouter()
		const animated = ref(false);
		const user = {
			name: 'John Doe',
			email: 'johndoe@example.com',
			avatar: 'src/assets/avatar.svg'
		};
		const { getCurrentLoginUser } = useAuth()

		onMounted(() => {
			animated.value = true;
		});

		return {
			animated,
			user,
			getCurrentLoginUser,
			goHome() {
				router.push({ name: 'home-page' })
			},
			logout() {
				router.push({ name: 'home-page' })
			}
		};
	},
}
)