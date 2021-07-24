import React from "react";
import { Text, View, Image, Dimensions, TouchableOpacity, StyleSheet } from "react-native";
import { Icon } from "../Icon";
import { ColorCustom } from "@app/utils/colors";

const CardItemComponent = ({
  description,
  hasActions,
  hasVariant,
  image,
  isOnline,
  matches,
  name,
  onGoBackPress,
  onRejectPress,
  onHeartPress
}: CardItemT) => {
  // Custom styling
  const fullWidth = Dimensions.get("window").width;

  const imageStyle = [
    {
      borderRadius: 8,
      width: hasVariant ? fullWidth / 2 - 30 : fullWidth - 80,
      height: hasVariant ? 170 : 350,
      margin: hasVariant ? 0 : 20,
    },
  ];

  const nameStyle = [
    {
      paddingTop: hasVariant ? 10 : 15,
      paddingBottom: hasVariant ? 5 : 7,
      color: "#363636",
      fontSize: hasVariant ? 15 : 30,
    },
  ];

  
  return (
    <View style={styles.containerCardItem}>
      {/* IMAGE */}
      <Image source={image} style={imageStyle} />

      {/* MATCHES */}
      {matches && (
        <View style={styles.matchesCardItem}>
          <Text style={styles.matchesTextCardItem}>
            <Icon name="heart" color={ColorCustom.WHITE} size={13} /> {matches}% Match!
          </Text>
        </View>
      )}

      {/* NAME */}
      <Text style={nameStyle}>{name}</Text>

      {/* DESCRIPTION */}
      {description && (
        <Text style={styles.descriptionCardItem}>{description}</Text>
      )}

      {/* STATUS */}
      {!description && (
        <View style={styles.status}>
          <View style={isOnline ? styles.online : styles.offline} />
          <Text style={styles.statusText}>
            {isOnline ? "Online" : "Offline"}
          </Text>
        </View>
      )}

      {/* ACTIONS */}
      {hasActions && (
        <View style={styles.actionsCardItem}>
          <TouchableOpacity style={styles.miniButton} onPress={() => onHeartPress()}>
            <Icon name="arrow-undo-outline" color={ColorCustom.FLASH_ACTIONS} size={14} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => onHeartPress()} >
            <Icon name="heart" color={ColorCustom.LIKE_ACTIONS} size={25} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => onRejectPress()}>
            <Icon name="close" color={ColorCustom.DISLIKE_ACTIONS} size={25} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.miniButton}  onPress={() =>onHeartPress()}>
            <Icon name="star" color={ColorCustom.SHARK_COLOR} size={14}/>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
    containerCardItem: {
        backgroundColor: ColorCustom.WHITE,
        borderRadius: 8,
        alignItems: "center",
        margin: 10,
        elevation: 1,
        shadowOpacity: 0.05,
        shadowRadius: 10,
        shadowColor: ColorCustom.BLACK,
        shadowOffset: { height: 0, width: 0 },
      },
      matchesCardItem: {
        marginTop: -35,
        backgroundColor: ColorCustom.PRIMARY_COLOR,
        paddingVertical: 7,
        paddingHorizontal: 20,
        borderRadius: 20,
      },
      matchesTextCardItem: {
        color: ColorCustom.WHITE,
      },
      descriptionCardItem: {
        color: ColorCustom.GRAY,
        textAlign: "center",
      },
      status: {
        paddingBottom: 10,
        flexDirection: "row",
        alignItems: "center",
      },
      statusText: {
        color: ColorCustom.GRAY,
        fontSize: 12,
      },
      online: {
        width: 6,
        height: 6,
        backgroundColor: ColorCustom.ONLINE_STATUS,
        borderRadius: 3,
        marginRight: 4,
      },
      offline: {
        width: 6,
        height: 6,
        backgroundColor: ColorCustom.OFFLINE_STATUS,
        borderRadius: 3,
        marginRight: 4,
      },
    actionsCardItem: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 30,
      },
      button: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: ColorCustom.WHITE,
        marginHorizontal: 7,
        alignItems: "center",
        justifyContent: "center",
        elevation: 1,
        shadowOpacity: 0.15,
        shadowRadius: 20,
        shadowColor: ColorCustom.DARK_GRAY,
        shadowOffset: { height: 10, width: 0 },
      },
      miniButton: {
        width: 40,
        height: 40,
        borderRadius: 30,
        backgroundColor: ColorCustom.WHITE,
        marginHorizontal: 7,
        alignItems: "center",
        justifyContent: "center",
        elevation: 1,
        shadowOpacity: 0.15,
        shadowRadius: 20,
        shadowColor: ColorCustom.DARK_GRAY,
        shadowOffset: { height: 10, width: 0 },
      },
})

export default CardItemComponent;
