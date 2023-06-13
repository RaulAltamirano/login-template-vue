import { defineComponent } from "vue"
import { useAuth } from "../../composable/useAuth"

export default defineComponent({
	name: 'home-page',
	setup() {
		const { onUpdateRefreshToken, getRefreshToken } = useAuth()
		return {
			getRefreshToken,
			refreshToken() {
				onUpdateRefreshToken()
			},
			logout() {
				console.log('logout');
			}
		}
	}
}
)