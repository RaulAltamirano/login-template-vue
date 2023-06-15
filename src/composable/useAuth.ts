import { computed } from 'vue';

import { storeToRefs } from 'pinia';

import { postLoginUser, postRefreshToken } from '../utils/options-auth';

import { useAuthStore } from '../store/store-auth';
import { useSweetAlert } from './useSweetAlert';
import { useRefreshTokenStorage } from './useToken';

import { Credentials } from '../interfaces/user-credentials';
import { User } from '../interfaces/user-interface';

export const useAuth = () => {
	const authStore = useAuthStore();
	const { } = storeToRefs(authStore);

	const useToken = useRefreshTokenStorage()
	const sweetAlert = useSweetAlert()

	const onLoginUser = async (credentials: Credentials): Promise<User | undefined> => {
		const { email, password } = credentials;
		if (!email || !password) {
			sweetAlert.showErrorAlert(`All fields are necessary`);
			return;
		}
		try {
			const { ok, message, res } = await postLoginUser(credentials);
			if (!ok) {
				sweetAlert.showErrorAlert(message);
				return;
			}
			if (!res) {
				sweetAlert.showErrorAlert('The user was not found');
				return;
			}
			if (!res.token) {
				sweetAlert.showErrorAlert('The token was not found');
				return;
			}
			await useToken.storeRefreshToken(res.token.refreshToken);
			delete res.token
			authStore.setLoginUser(res)
			return res;
		} catch (error) {
			console.error('Error logging in:', error);
			sweetAlert.showErrorAlert('An error occurred while logging in');
		}
	};
	const onUpdateRefreshToken = async () => {
		const refreshToken = await useToken.getRefreshToken();
		if (!refreshToken)
			return sweetAlert.showErrorAlert('The token was not found');
		try {
			const { ok, message, res } = await postRefreshToken(refreshToken)
			if (!ok)
				sweetAlert.showErrorAlert(message);
			if (!res)
				sweetAlert.showErrorAlert('Unable to retrieve the refresh token');
			await useToken.storeRefreshToken(res.token.refreshToken);
			console.info('refresh token update');
		} catch (error) {
			console.error('Error updating refresh token:', error);
			sweetAlert.showErrorAlert('An error occurred while updating the refresh token');
		}
	}

	return {
		// Methods
		onLoginUser,
		onUpdateRefreshToken,
		// Getters
		getRefreshToken: computed(() => authStore.currentRefreshTokenState)
	};
};
