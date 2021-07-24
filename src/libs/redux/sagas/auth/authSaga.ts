import {
  getCurrentUserData,
  IRegisterResponse,
  login,
  signUp,
} from '../../../services/auth';
import {
  loginError,
  loginSuccess,
  signUpSuccess,
} from '../../actions/auth/authActions';
import * as AuthActionTypes from '../../actions/actionTypes';
import {put, call, takeEvery, all, fork} from 'redux-saga/effects';
import {ConstantString} from '@app/utils/string';

export function* onLogin({
  userNameOrEmailAddress,
  password,
  onError,
}: AuthActionTypes.LoginAction) {
  try {
    // const loginToken: IAuthenticateResponse = yield call(login, {
    //   userNameOrEmailAddress,
    //   password,
    // });
    // const userInfo: IAccount = yield call(
    //   getCurrentUserData,
    //   loginToken.result.accessToken,
    // );
    const currentUserData: IUser = {
      account: {
        id: '1',
        name: userNameOrEmailAddress
      },
      // token: loginToken.result.accessToken,
      token: ''
    };
    yield put(loginSuccess(currentUserData));
  } catch (error) {
    yield call(onError, error.error);
    yield put(loginError('Co loi xay ra'));
  }
}

export function* onSignUp(data: AuthActionTypes.SignUpAction) {
  try {
    // const emailAddress: string = data.data.emailAddress;
    // const password: string = data.data.password;
    // const signUpResponse: IRegisterResponse = yield call(signUp, {
    //   emailAddress,
    //   password,
    // });

    // if (signUpResponse.result.canLogin === true) {
    //   yield put(signUpSuccess(ConstantString.SUCCESS_SIGNUP + emailAddress));
    //   yield put(signUpSuccess(''));
    // } else {
    //   yield call(data.onError, 'Sign Up failed');
    // }
    
    yield put(signUpSuccess(ConstantString.SUCCESS_SIGNUP));
  } catch (error) {
    yield call(data.onError, error.response.data.error.message);
  }
}

function* watchLogin() {
  yield takeEvery(AuthActionTypes.LOGIN, onLogin);
}

export default function* authSaga() {
  yield all([fork(watchRegiter)]);
  yield all([fork(watchLogin)]);
}

function* watchRegiter() {
  yield takeEvery(AuthActionTypes.SIGN_UP, onSignUp);
}
