import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../libs/redux';

export const authContext = React.createContext(null);

export const AuthProvider = ({ children}) => {
	const user = useSelector<RootState>(state => state?.auth?.user);
	
	const dispatch = useDispatch();

	// useEffect(() => {
	// 	dispatch(sync());
	// 	return;
	// }, []);

	return (
		<authContext.Provider
			value={{
				user,
			}}
		>
			{children}
		</authContext.Provider>
	);
};