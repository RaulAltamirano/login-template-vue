import { defineComponent } from "vue"
import { useAuth } from "../../../auth/composables/useAuth"
import { useRouter } from "vue-router"

export default defineComponent({
	name: 'home-page',
	setup() {
		const router = useRouter()
		const {
			onUpdateRefreshToken,
			getRefreshToken,
			getLoadingRefreshToken,
			logoutUser,
		} = useAuth()
		return {
			getRefreshToken,
			getLoadingRefreshToken,
			refreshToken() {
				onUpdateRefreshToken()
			},
			logout() {
				logoutUser()
			},
			toProtectedRoute() {
				router.push({ name: 'protected-route' })
			}
		}
	}
}
)