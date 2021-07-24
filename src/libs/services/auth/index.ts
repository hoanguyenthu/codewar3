import axios, { AxiosResponse } from 'axios';

export interface ILoginPayload {
	userNameOrEmailAddress: string;
	password: string;
}

export interface IRegisterPayload {
	emailAddress: string;
	password: string;
}

export interface IRegisterResponse {
	result: {
		canLogin: boolean
	}
}

export const login = (data: ILoginPayload) => {
	return axios.post<ILoginPayload, AxiosResponse<IAuthenticateResponse>>('/api/TokenAuth/Authenticate', data).then(res => res.data);
}

export const getCurrentUserData = (token: string) => {
	return axios.get<IAccountResponse>('/api/services/app/User/GetCurrentUser', {
		headers: {
			'Authorization': 'Bearer ' + token
		}}).then(res => res.data.result);
}

export const signUp = (data: IRegisterPayload) => {
	return axios.post<IRegisterResponse>('/api/services/app/Account/Register', data).then(
		res => res.data
	);
}