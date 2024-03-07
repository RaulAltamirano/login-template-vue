import { defineStore } from 'pinia';

import { AuthenticationStatus, User } from '../interfaces';
interface AuthStore {
	statusLogin: number | undefined,
	userLogged: User | undefined,
	loadingRefreshToken: boolean,
	loadinglogin: boolean,
	refreshToken: string,
}

export const useAuthStore = defineStore('auth', {
	state: (): AuthStore => ({
		loadinglogin: false,
		loadingRefreshToken: false,
		statusLogin: AuthenticationStatus.NotAuthenticated,
		userLogged: undefined,
		refreshToken: ''
	}),
	actions: {
		setLoginUser(user: User) {
			this.userLogged = user;
		},
		setRefreshToken(refresh: string) {
			this.refreshToken = refresh
		},
		setLoadingRefreshToken(value: boolean) {
			this.loadingRefreshToken = value
		},
		setStatusLogin(value: number) {
			this.statusLogin = value
		}
	},
	getters: {
		currentLoginUserState: (state: AuthStore) => state.userLogged,
		statusLoginState: (state: AuthStore) => state.statusLogin,
		currentRefreshTokenState: (state: AuthStore) => state.refreshToken,
		loadingRefreshTokenState: (state: AuthStore) => state.loadingRefreshToken,
	},
});
