import { defineStore } from 'pinia';

import { User } from '../interfaces/user-interface';

interface AuthStore {
	statusLogin: boolean,
	userLogged: User | undefined,
	loadinglogin: boolean
}

export const useAuthStore = defineStore('auth', {
	state: (): AuthStore => ({
		loadinglogin: false,
		statusLogin: false,
		userLogged: undefined,
	}),
	actions: {
		setLoginUser(user: User) {
			this.userLogged = user;
		},
		// setRegisterUser(register: RegisterUser) {
		//   this.register = register;
		// },
	},
	getters: {
		currentLoginUserState: (state: AuthStore) => state.userLogged,
	},
});
