import { ColorCustom } from "@app/utils/colors";
import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import Dimensions from '@app/utils/dimension';

const SmallMessageComponent = ({ image, lastMessage, name }: MessageT) => (
  <View style={styles.containerMessage}>
    <Image source={image} style={styles.avatar} />
    <View>
      <Text>{name}</Text>
      <Text style={styles.message}>{lastMessage}</Text>
    </View>
  </View>
);
const styles = StyleSheet.create({
    containerMessage: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "row",
        paddingHorizontal: 10,
        width: Dimensions.Dimensions.DIMENSION_WIDTH - 100,
      },
      avatar: {
        borderRadius: 30,
        width: 60,
        height: 60,
        marginRight: 20,
        marginVertical: 15,
      },
      message: {
        color: ColorCustom.GRAY,
        fontSize: 12,
        paddingTop: 5,
      },
})
export default SmallMessageComponent;