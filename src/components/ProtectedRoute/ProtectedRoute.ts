import { defineComponent, onMounted, ref } from "vue"
import { useRouter } from "vue-router";

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

		onMounted(() => {
			animated.value = true;
		});

		return {
			animated,
			user,
			goHome(){
				router.push({ name: 'home-page' })
			},
			logout(){
				router.push({ name: 'home-page' })
			}
		};
	},
}
)