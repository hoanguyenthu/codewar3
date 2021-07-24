import {IRegisterPayload, IRegisterResponse} from '@app/libs/services/auth';
import {AuthActionTypes} from '../actionTypes';

export const login = (
  userNameOrEmailAddress: string,
  password: string,
  onError: (errorMessage: string) => void,
): AuthActionTypes => ({
  type: 'LOGIN',
  userNameOrEmailAddress,
  password,
  onError,
});

export const loginError = (error: any): AuthActionTypes => ({
  type: 'LOGIN_ERROR',
  error,
});

export const loginSuccess = (data: IUser): AuthActionTypes => ({
  type: 'LOGIN_SUCCESS',
  user: data,
});

export const signUp = (
  data: IRegisterPayload,
  onError: (errorMessage: string) => void,
  onSuccess: () => void,
): AuthActionTypes => ({
  type: 'SIGN_UP',
  data,
  onError,
  onSuccess,
});

export const signUpSuccess = (success: string): AuthActionTypes => ({
  type: 'SIGN_UP_SUCCESS',
  success,
});
