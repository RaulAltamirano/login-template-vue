import { ApiService } from '../services/api-service';

import { Credentials } from '../interfaces/user-credentials';
import { User } from '../interfaces/user-interface';
import { Token } from '../interfaces/user-token';

export const postLoginUser = async (credentials: Credentials) => {
	const URL = '/auth/login';
	try {
		const res = await ApiService.post<User>({
			url: URL,
			data: credentials
		});
		if (!res) return { ok: false };
		return { ok: true, res };
	} catch (error) {
		console.error('Error occurred during login:', error);
		return { ok: false, message: 'An error occurred during login. Please try again later.' };
	}
};
export const getLogoutUser = async () => {
	const URL = '/auth/logout';
	try {
		const res = await ApiService.get(URL);
		if (!res) return { ok: false };
		return { ok: true, res };
	} catch (error) {
		console.error('Error occurred during logout:', error);
		return { ok: false, message: 'An error occurred during logout. Please try again later.' };
	}
};
export const postRefreshToken = async (refreshToken: string) => {
	const URL = '/auth/refresh-token';
	try {
		const res = await ApiService.post<any>({
			url: URL,
			data: {
				refreshToken: refreshToken
			}
		});
		if (!res) return { ok: false };
		return {
			ok: true,
			res: res.token as Token
		};
	} catch (error) {
		console.error('Error occurred during refresh token update:', error);
		return { ok: false, message: 'An error occurred during refresh token update. Please try again later.' };
	}
}
export const postCheckStatusLogin = async (refreshToken: string) => {
	const URL = '/auth/check-login';
	try {
		const res = await ApiService.post<User>({
			url: URL,
			data: {
				refreshToken: refreshToken
			}
		});
		if (!res) return { ok: false };
		return { ok: true, res };
	} catch (error) {
		console.error('Error occurred during login:', error);
		return { ok: false, message: 'An error occurred during login. Please try again later.' };
	}
};

