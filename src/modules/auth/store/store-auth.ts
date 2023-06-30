import { defineStore } from 'pinia';

import { User } from '../interfaces';

interface AuthStore {
	statusLogin: boolean,
	userLogged: User | undefined,
	loadingRefreshToken: boolean,
	loadinglogin: boolean,
	refreshToken: string,
}

export const useAuthStore = defineStore('auth', {
	state: (): AuthStore => ({
		loadinglogin: false,
		loadingRefreshToken: false,
		statusLogin: false,
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
		setStatusLogin(value: boolean) {
			this.statusLogin = value
		}
	},
	getters: {
		currentLoginUserState: (state: AuthStore) => state.userLogged,
		currentRefreshTokenState: (state: AuthStore) => state.refreshToken,
		loadingRefreshTokenState: (state: AuthStore) => state.loadingRefreshToken,
	},
});
