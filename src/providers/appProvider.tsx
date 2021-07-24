import React, { ReactElement, ReactNode } from 'react'
import { Provider as ReduxProvider} from 'react-redux';
import { AuthProvider } from './authProvider';


export const appContext = React.createContext(null);

export const AppProvider = ({ children, store }) => (
  	<appContext.Provider value={{}}>
		<ReduxProvider store={store}>
			<AuthProvider>
			{ children }
			</AuthProvider>
		</ReduxProvider>
  	</appContext.Provider>
);