import {IRegisterPayload} from '@app/libs/services/auth';

export const LOGIN = 'LOGIN';

export interface LoginAction {
  type: typeof LOGIN;
  userNameOrEmailAddress: string;
  password: string;
  onError: (errorMessage: string) => void;
}

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  user: IUser;
}

export const LOGIN_ERROR = 'LOGIN_ERROR';
export interface LoginErrorAction {
  type: typeof LOGIN_ERROR;
  error?: any;
}

export const SIGN_UP = 'SIGN_UP';

export interface SignUpAction {
  type: typeof SIGN_UP;
  data: IRegisterPayload;
  onError: (errorMessage: string) => void;
  onSuccess: () => void;
}

export const SIGN_UP_ERROR = 'SIGN_UP_ERROR';
export interface SignUpErrorAction {
  type: typeof SIGN_UP_ERROR;
  error?: any;
}
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export interface SignUpSuccessAction {
  type: typeof SIGN_UP_SUCCESS;
  success: string;
}

export type AuthActionTypes =
  | LoginAction
  | LoginSuccessAction
  | LoginErrorAction
  | SignUpAction
  | SignUpErrorAction
  | SignUpSuccessAction;
