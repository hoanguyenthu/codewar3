import React, { useEffect } from 'react';
import {
	View,
	Text,
	StyleSheet,
	SafeAreaView,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../libs/redux';
import { ColorCustom } from '../../utils/colors';
import { LoginForm } from '../../components/LoginForm';
import SplashScreen from 'react-native-splash-screen';

// import HomeScreen from '@app/screens/HomeScreens';

const StartComponent = () => {
    useEffect(() => {
      setTimeout(() =>  {
          SplashScreen.hide();
      }, 1500);
    });

	const isSelectedAccount = useSelector<RootState>(state => state?.auth?.isSelectedAccount) as IsSelectedAccount;
	const refreshToken = useSelector<RootState>(state => state?.auth?.user?.refreshToken) as boolean;
	const loggedIn = useSelector<RootState>(state => state?.auth?.loggedIn) as LogedInState;

    return(
        <SafeAreaView>
            <View>
				{/* {!loggedIn ? <LoginForm/> : <HomePageComponent/> } */}
                <LoginForm />
            </View>
        </SafeAreaView>
    )
}


export default StartComponent;