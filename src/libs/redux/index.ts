import { persistCombineReducers, PersistConfig } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import {authReducer as auth} from './reducers/auth/authReducer';
import AsyncStorage from '@react-native-community/async-storage';


const config: PersistConfig<RootState> = {
  key: 'primary',
  whitelist: ['auth'],
  storage: AsyncStorage
}

export const reducer = persistCombineReducers<RootState>(config, {
	auth
});

export interface RootState {
	auth: IAuthState 
}