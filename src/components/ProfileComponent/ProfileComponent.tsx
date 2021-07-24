import React from "react";
import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { Icon } from "../Icon";
import DEMO from "../../assets/data/demo";
import Assets from '../../utils/assets';
import Dimensions from '@app/utils/dimension';
import { ColorCustom } from "@app/utils/colors";
import ProfileItem from "../ProfileItemComponent/ProfileItemComponent";
import { useNavigation, useRoute } from "@react-navigation/native";

const ProfileComponent = ({navigation}) => {
  const route = useRoute()
  const item = route.params?.data;
  const {
    age,
    image,
    info1,
    info2,
    info3,
    info4,
    location,
    match,
    name,
    message
  } = route.params?.data;

  return (
    <ImageBackground
      source={Assets.Images.appAvatar}
      style={styles.bg}
    >
      <ScrollView style={styles.containerProfile}>
        <ImageBackground source={image} style={styles.photo}>
          <View style={styles.top}>
            <TouchableOpacity>
              <Icon
                name="chevron-back"
                size={20}
                color={ColorCustom.WHITE}
                style={styles.topIconLeft}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Icon
                name="ellipsis-vertical"
                size={20}
                color={ColorCustom.WHITE}
                style={styles.topIconRight}
              />
            </TouchableOpacity>
          </View>
        </ImageBackground>

        <ProfileItem
          matches={match}
          name={name}
          age={age}
          location={location}
          info1={info1}
          info2={info2}
          info3={info3}
          info4={info4}
        />

        <View style={styles.actionsProfile}>
          <TouchableOpacity style={styles.circledButton} onPress={() => navigation.navigate('EditProfile', {name})}>
            <Icon name="ellipsis-horizontal" size={20} color={ColorCustom.WHITE} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.roundedButton} onPress={() => navigation.navigate('Chat',{item})}>
            <Icon name="chatbubble" size={20} color={ColorCustom.WHITE} />
            <Text style={styles.textButton}>Start Chatting</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
    containerProfile: { marginHorizontal: 0 },
    photo: {
      width: Dimensions.Dimensions.DIMENSION_WIDTH,
      height: 450,
    },
    topIconLeft: {
      paddingLeft: 20,
    },
    topIconRight: {
      paddingRight: 20,
    },
    actionsProfile: {
      justifyContent: "center",
      flexDirection: "row",
      alignItems: "center",
    },
    textButton: {
      fontSize: 15,
      color: ColorCustom.WHITE,
      paddingLeft: 5,
    },
    circledButton: {
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor: ColorCustom.PRIMARY_COLOR,
      justifyContent: "center",
      alignItems: "center",
      marginRight: 10,
    },
    roundedButton: {
      justifyContent: "center",
      flexDirection: "row",
      alignItems: "center",
      marginLeft: 10,
      height: 50,
      borderRadius: 25,
      backgroundColor: ColorCustom.SECONDARY_COLOR,
      paddingHorizontal: 20,
    },
    bg: {
        flex: 1,
        resizeMode: "cover",
        width: Dimensions.Dimensions.DIMENSION_WIDTH,
        height: Dimensions.Dimensions.DIMENSION_HEIGHT,
      },
      containerHome: {
        marginHorizontal: 10
        },
        top: {
          paddingTop: 50,
          marginHorizontal: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        },
})

export default ProfileComponent;
