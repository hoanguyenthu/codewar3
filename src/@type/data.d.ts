type LoadingState = 'empty' | 'idle' | 'loading' | 'error';

type LogedInState = boolean;

type IsSelectedAccount = 'true' | 'false';

type SubmitClockType = 'IN' | 'OUT';

interface IAccount {
  id: string;
  name: string;
}

interface IAccountResponse {
  result: IAccount;
  success: boolean;
  error: {};
}

interface IAuthenticateResponse {
  result: IToken;
  success: boolean;
  error: {};
}

interface IToken {
  accessToken: string;
  encryptedAccessToken: string;
  expireInSeconds: number;
  userId: number;
}

interface IUser {
  account: IAccount;
  refreshToken?: string;
  token: string;
}

interface IAuthState {
  user: IUser;
  success: string;
  loggedIn: boolean;
  loading: LoadingState;
  isSelectedAccount: IsSelectedAccount;
  error: IError;
}

interface IAuthLocalStorage {
  user: IUser;
  isSelectedAccount: string;
  selectedAccount: string;
}

interface IError {
  message: string;
  status: number | null;
}

//mock data
interface DataT {
  id: number;
  name: string;
  isOnline: boolean;
  match: string;
  description: string;
  message: string;
  image: any;
  age?: string;
  info1?: string;
  info2?: string;
  info3?: string;
  info4?: string;
  location?: string;
}

interface ProfileItemT {
  age?: string;
  info1?: string;
  info2?: string;
  info3?: string;
  info4?: string;
  location?: string;
  matches: string;
  name: string;
}

interface MessageT {
  image: any;
  lastMessage: string;
  name: string;
}

interface TabBarIconT {
  focused: boolean;
  iconName: any;
  text: string;
}
