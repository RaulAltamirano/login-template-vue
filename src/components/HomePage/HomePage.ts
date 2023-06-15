import { defineComponent } from "vue"
import { useAuth } from "../../composable/useAuth"

export default defineComponent({
	name: 'home-page',
	setup() {
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
			}
		}
	}
}
)