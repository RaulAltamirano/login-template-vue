import { computed } from 'vue';
import { storeToRefs } from 'pinia';

import {
	getLogoutUser,
	postCheckStatusLogin,
	postLoginUser,
	postRefreshToken
} from '../helper/options-auth';

import {
	AuthenticationStatus,
	Credentials,
	Token,
	User
} from '../interfaces';

import { useSweetAlert } from '../../shared/composable/useSweetAlert';
import { useRefreshTokenStorage } from './useToken';
import { useAuthStore } from '../store/store-auth';
import { useRouter } from 'vue-router';

export const useAuth = () => {
	const authStore = useAuthStore();
	const { } = storeToRefs(authStore);
	const router = useRouter()
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
				sweetAlert.showErrorAlert(message || 'An error occurred while logging in');
				return;
			}
			if (!res) {
				sweetAlert.showErrorAlert('The user was not found');
				return;
			}
			if (!res.token) {
				console.log(res);
				sweetAlert.showErrorAlert('The token was not found');
				return;
			}
			await updateTokens(res.token);
			delete res.token;
			authStore.setLoginUser(res);
			authStore.setStatusLogin(AuthenticationStatus.Authenticated);
			return res;
		} catch (error) {
			console.error('Error logging in:', error);
			sweetAlert.showErrorAlert('An error occurred while logging in');
		}
	};


	const updateTokens = async (token: Token) => {
		const { accessToken, refreshToken } = token
		authStore.setRefreshToken(refreshToken)
		await useToken.storeTokens({ accessToken, refreshToken });
	}

	const refreshAccessToken = async (refreshToken: string): Promise<Token> => {
		try {
			const { ok, message, res } = await postRefreshToken(refreshToken);
			if (!ok) {
				throw new Error(message);
			}
			if (!res) {
				throw new Error('Unable to retrieve the refresh token');
			}
			return res;
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
			const newTokens = await refreshAccessToken(token.refreshToken);
			await updateTokens(newTokens)
		} catch (error) {
			console.error('Error updating refresh token:', error);
		} finally {
			authStore.setLoadingRefreshToken(false);
		}
	};

	const onUpdateRefreshToken = async () => {
		try {
			if (authStore.statusLoginState !== AuthenticationStatus.NotAuthenticated) {
				await updateRefreshToken();
				return
			}
			authStore.setStatusLogin(AuthenticationStatus.NotAuthenticated);
		} catch (error) {
			sweetAlert.showErrorAlert(error);
		}
	};

	const checkStatusLogin = async (): Promise<User | undefined> => {
		try {
			if (authStore.statusLoginState === AuthenticationStatus.NotAuthenticated) {
				authStore.setStatusLogin(AuthenticationStatus.NotAuthenticated);
				return
			}
			const token = await useToken.getTokens();
			if (!token) {
				authStore.setStatusLogin(AuthenticationStatus.NotAuthenticated);
				router.push({ name: 'home-page' })
				throw new Error('Token not found. Please log in.');
			}
			const { refreshToken } = token;
			const { ok, res } = await postCheckStatusLogin(refreshToken);
			if (!ok || !res) {
				throw new Error('Authentication check failed. Please log in again.');
			}
			authStore.setRefreshToken(res.refreshToken)
			authStore.setLoginUser(res);
			authStore.setStatusLogin(AuthenticationStatus.Authenticated);
			return res;
		} catch (error) {
			throw new Error('Error checking authentication:');
		} finally {
			authStore.setStatusLogin(AuthenticationStatus.NotAuthenticated);
		}
	};

	const logoutUser = async (): Promise<boolean> => {
		try {
			const { ok } = await getLogoutUser();
			authStore.setStatusLogin(AuthenticationStatus.NotAuthenticated);
			// Limpiar tokens al hacer logout
			// authStore.setLoginUser();
			// authStore.setRefreshToken();
			return ok;
		} catch (error) {
			console.error('Error logging out:', error);
			return false;
		}
	};


	return {
		// Methods
		checkStatusLogin,
		logoutUser,
		onLoginUser,
		onUpdateRefreshToken,
		// Getters
		getCurrentLoginUser: computed(() => authStore.currentLoginUserState),
		getLoadingRefreshToken: computed(() => authStore.loadingRefreshTokenState),
		getRefreshToken: computed(() => authStore.currentRefreshTokenState),
		getStatusLogin: computed(() => authStore.statusLoginState),
	};
};