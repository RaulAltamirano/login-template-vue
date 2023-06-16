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
			await useToken.storeTokens({
				accessToken: res.token.accessToken,
				refreshToken: res.token.refreshToken
			});
			delete res.token
			authStore.setLoginUser(res)
			return res;
		} catch (error) {
			console.error('Error logging in:', error);
			sweetAlert.showErrorAlert('An error occurred while logging in');
		}
	};
	const refreshAccessToken = async (refreshToken: string) => {
		try {
			const { ok, message, res } = await postRefreshToken(refreshToken);
			if (!ok) {
				throw new Error(message);
			}
			if (!res) {
				throw new Error('Unable to retrieve the refresh token');
			}
			return res.token.accessToken;
		} catch (error) {
			console.error('Error refreshing access token:', error);
			throw new Error('An error occurred while refreshing the access token');
		}
	};
	
	const updateRefreshToken = async () => {
		try {
			authStore.setLoadingRefreshToken(true);
			const token = await useToken.getTokens();
			if (!token) {
				throw new Error('The token was not found');
			}
			const newAccessToken = await refreshAccessToken(token.refreshToken);
			await useToken.storeTokens({
				accessToken: newAccessToken,
				refreshToken: token.refreshToken,
			});
			console.info('Refresh token updated');
		} catch (error) {
			console.error('Error updating refresh token:', error);
			throw new Error('An error occurred while updating the refresh token');
		} finally {
			authStore.setLoadingRefreshToken(false);
		}
	};
	
	const onUpdateRefreshToken = async () => {
		try {
			await updateRefreshToken();
		} catch (error) {
			sweetAlert.showErrorAlert(error);
		}
	};
	
	return {
		// Methods
		onLoginUser,
		onUpdateRefreshToken,
		// Getters
		getRefreshToken: computed(() => authStore.currentRefreshTokenState),
		getLoadingRefreshToken: computed(() => authStore.loadingRefreshTokenState)
	};
};
