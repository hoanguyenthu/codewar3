import { ColorCustom } from '@app/utils/colors';
import dimension from '@app/utils/dimension';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  ImageBackground,
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Image,
  KeyboardAvoidingView
} from 'react-native';
import Assets from '../../utils/assets';
import { Icon } from '../Icon';
import { useRoute } from '@react-navigation/native';

const ChatForm = () => {
  const navigation = useNavigation();
  const [checkInput, setCheckInput] = useState(false);
  const route = useRoute();

  const goBack = () => {
    navigation.goBack();
  };
  const fakeData = [
    {
      id: 1,
      msg: 'Hello bạn mình là Nam !'
    },
    {
      id: 2,
      msg: 'Mình giống tên nhau rồi hihi'
    },
    {
      id: 3,
      msg: 'Bạn đang sống ở đâu'
    },
    {
      id: 4,
      msg: 'Mình sống ở Thanh Xuân Hà Nội'
    },
  ]
  const sentMessage = route.params?.item?.message ? route.params.item.message : '';
  const duration = sentMessage.length * 1.3;
  return (
    <ImageBackground source={Assets.Images.appBackground} style={styles.bg}>
      <SafeAreaView>
        <KeyboardAvoidingView behavior='position'>
        <View style={styles.top}>
          <TouchableOpacity style={styles.topIconLeft} onPress={goBack}>
            <Icon name="chevron-back" size={20} color={ColorCustom.BLUE} />
          </TouchableOpacity>
          <View style={styles.avtUser}>
            <Image source={route.params.item.image} resizeMode="cover" style={{width:36, height:36, borderRadius:18}}/>
          </View>
          <View style={styles.labelUser}>
            <Text style={styles.userName}>{route.params.item.name}</Text>
            <Text style={styles.userTitle}>Messenger</Text>
          </View>
          <View style={styles.topIconRight}>
            <TouchableOpacity style={styles.optionUser}>
              <Icon name="call-outline" size={25} color={ColorCustom.BLUE} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionUser}>
              <Icon
                name="videocam-outline"
                size={25}
                color={ColorCustom.BLUE}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionUser}>
              <Icon
                name="ellipsis-vertical"
                size={20}
                color={ColorCustom.BLUE}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.chat}>
          <Text
            style={{
              alignSelf: 'flex-end',
              backgroundColor: '#26a0fe',
              borderRadius: 15,
              overflow: 'hidden',
              maxWidth: '50%',
              paddingHorizontal: 10,
              paddingTop: 10,
              color: '#FFF',
              height: duration
            }}
          >
            {route.params.item.message}
          </Text>
          <Text style={styles.chatLeft}>Hello , nice to meet you!</Text>
        </View>
        <View style={styles.chatMenu}>
          <View style={styles.chatInputContainter}>
            <View style={styles.groupIconInputChat}>
              <Icon
                name="grid-outline"
                size={25}
                color={ColorCustom.BLUE}
                style={styles.iconInput}></Icon>
              <Icon
                name="camera-outline"
                size={25}
                color={ColorCustom.BLUE}
                style={styles.iconInput}></Icon>
              <Icon
                name="images-outline"
                size={25}
                color={ColorCustom.BLUE}
                style={styles.iconInput}></Icon>
              <Icon
                name="mic-outline"
                size={25}
                color={ColorCustom.BLUE}
                style={styles.iconInput}></Icon>
            </View>
            <View style={styles.wrapperTextInput}>
              <TextInput
                // onPressIn={() => setCheckInput(true)}
                // onPressOut={() => setCheckInput(false)}
                keyboardType="email-address"
                multiline={false}
                returnKeyType="done"
                placeholder="Type your messages"
                style={styles.chatInput}
              />
              <View style={styles.showAllIcon}>
                <Icon
                  name="happy-outline"
                  size={20}
                  color={ColorCustom.BLUE}></Icon>
              </View>
            </View>
            <View style={styles.wrapperIconLike}>
              <Icon
                name="thumbs-up-outline"
                size={20}
                color={ColorCustom.BLUE}
                style={styles.iconInput}></Icon>
            </View>
          </View>
        </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bg: {
    resizeMode: 'cover',
    width: dimension.Dimensions.DIMENSION_WIDTH,
    height: dimension.Dimensions.DIMENSION_HEIGHT,
  },
  chatMenu: {
    position: 'absolute',
    width: '100%',
    height: (dimension.Dimensions.DIMENSION_HEIGHT * 15) / 100,
    top: (dimension.Dimensions.DIMENSION_HEIGHT * 85) / 100,
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  chatInputContainter: {
    width: '100%',
    height: '60%',
    borderRadius: 25,
    alignItems: 'center',
    flexDirection: 'row',
  },
  chatInput: {
    paddingLeft: 15,
    paddingRight: dimension.Dimensions.DIMENSION_WIDTH * 0.08,
    height: 36,
    width: '100%',
    fontSize: 15,
    fontWeight: '500',
    color: ColorCustom.BLACK,
    borderRadius: 20,
    backgroundColor: ColorCustom.WHITE,
  },
  top: {
    marginTop: 30,
    marginHorizontal: 10,
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
  },
  wrapperTextInput: {
    // paddingLeft: dimension.Dimensions.DIMENSION_WIDTH * 0.03,
    height: '100%',
    justifyContent: 'center',
    // width: dimension.Dimensions.DIMENSION_WIDTH * 0.8,
    width: '50%',
    position: 'relative',
  },
  wrapperIconLike: {
    position: 'absolute',
    right: 0,
  },
  iconInput: {
    marginLeft: dimension.Dimensions.DIMENSION_WIDTH * 0.03,
  },
  showAllIcon: {
    position: 'absolute',
    justifyContent: 'center',
    right: dimension.Dimensions.DIMENSION_WIDTH * 0.02,
  },
  groupIconInputChat: {
    width: '40%',
    flexDirection: 'row',
  },
  topIconLeft: {
    position: 'absolute',
  },
  topIconRight: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    right: 0,
  },
  avtUser: {
    marginLeft: 30,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'black',
  },
  labelUser: {
    marginLeft: 20,
  },
  userName: {
    fontWeight: '700',
    lineHeight: 20,
    fontSize: 17,
  },
  userTitle: {
    fontSize: 13,
    lineHeight: 18,
    color: '#858585',
  },
  optionUser: {
    marginLeft: dimension.Dimensions.DIMENSION_WIDTH * 0.04,
  },
  chat: {
    height: 40,
    marginVertical: 5,
    width: '100%',
    padding: 10,
  },
  chatRight: {
    alignSelf: 'flex-end',
    backgroundColor: '#26a0fe',
    borderRadius: 15,
    overflow: 'hidden',
    maxWidth: '50%',
    paddingHorizontal: 10,
    color: '#FFF',
  },
  chatLeft: {
    height: 40,
    alignSelf: 'flex-start',
    backgroundColor: '#dfdfe0',
    borderRadius: 15,
    minWidth: 60,
    overflow: 'hidden',
    lineHeight: 40,
    paddingHorizontal: 10,
    color: '#000',
    marginVertical:15
  },
});

export default ChatForm;
