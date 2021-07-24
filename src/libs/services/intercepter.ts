import axios from 'axios';
import { filter } from 'rxjs/operators';
export function configureApi({ baseURL }: { baseURL: string }) {
	let token: string;
	let refreshToken: string;
	let selectedAccount: string;

	let tokenLogout: string;
	let selectAccountLogout: string;
	axios.defaults.timeout = 20000;
	axios.defaults.baseURL = baseURL;
	
	axios.interceptors.request.use(
		config => {

			// if (config.headers.tokenRefesh) {
			// 	config.headers['Authorization'] = 'Bearer ' + refreshToken
			// 	if (selectedAccount) {
			// 		config.headers['X-Account-Id'] = selectedAccount;
			// 	}
			// 	return config;
			// }

			// if (config.headers.isLogin) {
			// 	return config
			// }

			// if (config.headers.isLogout) {
			// 	config.headers['Authorization'] = 'Bearer ' + tokenLogout
			// 	config.headers['X-Account-Id'] = selectAccountLogout;
			// } else {
			// 	if (token) {
			// 		config.headers['Authorization'] = 'Bearer ' + token;
			// 	}
			// 	if (selectedAccount) {
			// 		config.headers['X-Account-Id'] = selectedAccount;
			// 	}
			// }
			return config;
		},
		error => {
			Promise.reject(error)
		});
}
