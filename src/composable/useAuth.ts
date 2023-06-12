import { storeToRefs } from 'pinia';
import { useAuthStore } from '../store/store-auth';
import { postLoginUser } from '../utils/options-auth';
import { Credentials } from '../interfaces/user-credentials';
import { useSweetAlert } from './useSweetAlert';
import { User } from '../interfaces/user-interface';

export const useAuth = () => {
	const authStore = useAuthStore();
	const { } = storeToRefs(authStore);
	const sweetAlert = useSweetAlert()

	const onLoginUser = async (credentials: Credentials): Promise<User | undefined> => {
		const { email, password } = credentials
		if (!email || !password) {
			sweetAlert.showErrorAlert(`All field are necsary`)
			return
		}
		const { ok, message, res } = await postLoginUser(credentials);
		if (!ok) {
			console.log(ok, message, res);
			sweetAlert.showErrorAlert(message)
			return
		}
		return res
	};
	return {
		onLoginUser,
	};
};
