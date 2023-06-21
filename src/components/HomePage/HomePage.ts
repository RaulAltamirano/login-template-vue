import { defineComponent } from "vue"
import { useAuth } from "../../composable/useAuth"
import { useRouter } from "vue-router"

export default defineComponent({
	name: 'home-page',
	setup() {
		const router = useRouter()
		const {
			onUpdateRefreshToken,
			getRefreshToken,
			getLoadingRefreshToken
		} = useAuth()
		return {
			getRefreshToken,
			getLoadingRefreshToken,
			refreshToken() {
				onUpdateRefreshToken()
			},
			logout() {
				console.log('logout');
			},
			toProtectedRoute() {
				router.push({ name: 'protected-route' })
			}
		}
	}
}
)