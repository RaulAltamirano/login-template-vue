import { ApiService } from '../services/api-service';

import { Credentials } from '../interfaces/user-credentials';
import { User } from '../interfaces/user-interface';

export const postLoginUser = async (credentials: Credentials) => {
	const URL = '/auth/login';
	try {
		const res = await ApiService.post<User>({
			url: URL,
			data: credentials
		});
		console.log(res);
		if (!res) return { ok: false };
		return { ok: true, res };
	} catch (error) {
		console.error('Error occurred during login:', error);
		return { ok: false, message: 'An error occurred during login. Please try again later.' };
	}
};

