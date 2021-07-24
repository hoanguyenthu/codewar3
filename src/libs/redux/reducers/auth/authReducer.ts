import {AuthActionTypes} from '../../actions/actionTypes';

export const initialState: IAuthState = {
  user: {
    account: null,
    token: '',
    refreshToken: '',
  },
  loggedIn: false,
  loading: 'idle',
  isSelectedAccount: 'false',
  success: '',
  error: {
    message: '',
    status: null,
  },
};

export function authReducer(
  state = initialState,
  action: AuthActionTypes,
): IAuthState {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        loggedIn: false,
        loading: 'loading',
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        loading: 'idle',
        loggedIn: true,
        isSelectedAccount: 'true',
        user: action.user
      };
    case 'LOGIN_ERROR':
      return {
        ...state,
        loading: 'error',
      };
    case 'SIGN_UP_SUCCESS':
      return {
        ...state,
        success: action.success,
      };
    default:
      return state;
  }
}
