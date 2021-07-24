import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { BottomTabBar, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabBarIconComponent } from "../TabBarIcon";
import { ColorCustom } from "@app/utils/colors";
import { ExploxePage } from "../ExploxeComponent";
import { MatchesComponent } from "../MatchesComponent";
import { MessagesComponent } from "../MessagesComponent";
import { ProfileComponent } from "../ProfileComponent";
import { HubConnection, HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import { useSelector } from "react-redux";
import { RootState } from "@app/libs/redux";
import SplashScreen from "react-native-splash-screen";
import Profile from "../../screens/Profile/ProfileScreen";
import {FavouriteAnimal} from "../../components/FavouriteAnimal";
const Tab = createBottomTabNavigator();

const HomePageComponent = () => {
  const [connection, setConnection] = useState<HubConnection>();
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const currentUser = useSelector<RootState>(state => state?.auth?.user) as IUser;


  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1500);
  });

  return (
    <Tab.Navigator
      initialRouteName="Explore"
      tabBarOptions={{
        showLabel: false,
        activeTintColor: ColorCustom.PRIMARY_COLOR,
        inactiveTintColor: ColorCustom.DARK_GRAY,
        labelStyle: {
          fontSize: 14,
          textTransform: "uppercase",
          paddingTop: 10,
        },
        style: {
          backgroundColor: ColorCustom.WHITE,
          borderTopWidth: 0,
          marginBottom: 0,
          shadowOpacity: 0.05,
          shadowRadius: 10,
          shadowColor: ColorCustom.BLACK,
          shadowOffset: { height: 0, width: 0 },
        },
      }}
    >
      <Tab.Screen
        name="Explore"
        component={ExploxePage}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIconComponent
              focused={focused}
              iconName="search"
              text="Explore"
            />
          ),
        }}
      />

      <Tab.Screen
        name="Matches"
        component={MatchesComponent}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIconComponent
              focused={focused}
              iconName="heart"
              text="Matches"
            />
          ),
        }}
      />

      <Tab.Screen
        name="Messages"
        component={MessagesComponent}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIconComponent
              focused={focused}
              iconName="chatbubble"
              text="Messages"
            />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIconComponent
              focused={focused}
              iconName="person"
              text="Profile"
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
};

export default HomePageComponent;
