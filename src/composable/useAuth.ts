import { storeToRefs } from 'pinia';
import { useAuthStore } from '../store/store-auth';
import { postLoginUser } from '../utils/options-auth';
import { Credentials } from '../interfaces/user-credentials';
import { useSweetAlert } from './useSweetAlert';
import { User } from '../interfaces/user-interface';
import { useRefreshTokenStorage } from './useToken';

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
			const { token } = res;
			await useToken.storeRefreshToken(token.refreshToken);
			const savedRefreshToken = await useToken.getRefreshToken();
			console.log(savedRefreshToken);
			return res;
		} catch (error) {
			console.error('Error logging in:', error);
			sweetAlert.showErrorAlert('An error occurred while logging in');
			return;
		}
	};

	return {
		onLoginUser,
	};
};
