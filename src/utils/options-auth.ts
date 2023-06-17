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
export const postRefreshToken = async (refreshToken: string) => {
	const URL = '/auth/refresh-token';
	try {
		const res = await ApiService.post<Token>({
			url: URL,
			data: {
				refreshToken: refreshToken
			}
		});
		if (!res) return { ok: false };
		return { ok: true, res };
	} catch (error) {
		console.error('Error occurred during refresh token update:', error);
		return { ok: false, message: 'An error occurred during refresh token update. Please try again later.' };
	}
}

