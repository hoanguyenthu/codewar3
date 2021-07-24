import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/AuthScreens/Login';
import { RootState } from '@app/libs/redux';
import { HomePageComponent } from '@app/components/HomePageComponent';
import SignUpScreen from '@app/screens/AuthScreens/SignUp';
import EditProfileScreen from '../screens/Profile/ProfileEdit';
import { ChatForm } from '@app/components/ChatForm';
import ProfileComponent from '@app/components/ProfileComponent/ProfileComponent';
import { FavouriteAnimal } from '@app/components/FavouriteAnimal';

const LoginStack = createStackNavigator();
const HomeStack = createStackNavigator();

const Router = () => {

    const loading = useSelector<RootState>(state => state?.auth?.loading) as LoadingState;
    const isSelectedAccount = useSelector<RootState>(state => state?.auth?.isSelectedAccount) as IsSelectedAccount;
    const refreshToken = useSelector<RootState>(state => state?.auth?.user?.refreshToken) as boolean;

    return (
        <NavigationContainer>
            {isSelectedAccount == 'true' ?
                (<HomeStack.Navigator>
                    {/* <HomeStack.Screen name='Favorite' component={FavouriteAnimal} options={{ headerShown: false }} /> */}
                    <HomeStack.Screen name='Home' component={HomePageComponent} options={{ headerShown: false }} />
                    <HomeStack.Screen name='EditProfile' component={EditProfileScreen} options={{ headerShown: false }} />
                    <HomeStack.Screen name='Chat' component={ChatForm} options={{ headerShown: false }} />
                    <HomeStack.Screen name='OtherUserProfile' component={ProfileComponent} options={{ headerShown: false }} />
                </HomeStack.Navigator>) :
                (<LoginStack.Navigator>
                    <LoginStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
                    <LoginStack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
                </LoginStack.Navigator>)
            }
        </NavigationContainer>
    );
};

export default Router