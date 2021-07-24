import { ColorCustom } from "@app/utils/colors";
import React, { useEffect, useState } from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  ImageBackground,
  View,
  FlatList,
  StyleSheet,
  SafeAreaView
} from "react-native";
import { Icon } from "../Icon";
import DEMO from "../../assets/data/demo";
import Dimensions from '@app/utils/dimension';
import { SmallMessageComponent } from "../SmallMessageComponent";
import Assets from '../../utils/assets';
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { RootState } from "@app/libs/redux";
import { HubConnection, HubConnectionBuilder, LogLevel } from "@microsoft/signalr";

const MessagesComponent = (props) => {
  const [connection, setConnection] = useState<HubConnection>();
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const currentUser = useSelector<RootState>(state => state?.auth?.user) as IUser;

  const sendMessage = async (message: string) => {
    try {
      console.log(message);
      
      await connection.invoke("SendMessage", message);
    } catch (e) {
      console.log(e);
    }
  }

  const closeConnection = async () => {
    try {
      await connection.stop();
    } catch (e) {
      console.log(e);
    }
  }
  const navigation = useNavigation();
  const openChat = (item) => { 
    sendMessage('hello')
    navigation.navigate('Chat',{item});
  }
  return (
  <ImageBackground
    source={Assets.Images.appBackground}
    style={styles.bg}
  >
    <SafeAreaView>
      <View style={styles.containerMessages}>
        <View style={styles.top}>
          <Text style={styles.title}>Messages</Text>
          <TouchableOpacity>
            <Icon name="ellipsis-vertical" color={ColorCustom.DARK_GRAY} size={20} />
          </TouchableOpacity>
        </View>

        <FlatList
          data={DEMO}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('Chat',{item})}>
              <SmallMessageComponent
                image={item.image}
                name={item.name}
                lastMessage={item.message}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  </ImageBackground>
)};
const styles = StyleSheet.create({
    containerMessages: {
        justifyContent: "space-between",
        // flex: 1,
        paddingHorizontal: 10,
    },
    bg: {
    flex: 1,
    resizeMode: "cover",
    width: Dimensions.Dimensions.DIMENSION_WIDTH,
    height: Dimensions.Dimensions.DIMENSION_HEIGHT,
    },
    top: {
        paddingTop: 10,
        marginHorizontal: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    title: { paddingBottom: 10, fontSize: 22, color: ColorCustom.DARK_GRAY },
})
export default MessagesComponent;
