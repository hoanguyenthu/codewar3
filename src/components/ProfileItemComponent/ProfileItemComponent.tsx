import { ColorCustom } from "@app/utils/colors";
import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Icon } from "../Icon";

const ProfileItem = ({
  age,
  info1,
  info2,
  info3,
  info4,
  location,
  matches,
  name,
}: ProfileItemT) => (
  <View style={styles.containerProfileItem}>
    <View style={styles.matchesProfileItem}>
      <Text style={styles.matchesTextProfileItem}>
        <Icon name="heart" size={13} color={ColorCustom.WHITE} /> {matches}% Match!
      </Text>
    </View>

    <Text style={styles.name}>{name}</Text>

    <Text style={styles.descriptionProfileItem}>
      {age} - {location}
    </Text>

    <View style={styles.info}>
      <Text style={styles.iconProfile}>
        <Icon name="person" size={12} color={ColorCustom.DARK_GRAY} />
      </Text>
      <Text style={styles.infoContent}>{info1}</Text>
    </View>

    <View style={styles.info}>
      <Text style={styles.iconProfile}>
        <Icon name="pizza" size={12} color={ColorCustom.DARK_GRAY} />
      </Text>
      <Text style={styles.infoContent}>{info2}</Text>
    </View>

    <View style={styles.info}>
      <Text style={styles.iconProfile}>
        <Icon name="airplane" size={12} color={ColorCustom.DARK_GRAY} />
      </Text>
      <Text style={styles.infoContent}>{info3}</Text>
    </View>

    <View style={styles.info}>
      <Text style={styles.iconProfile}>
        <Icon name="calendar" size={12} color={ColorCustom.DARK_GRAY} />
      </Text>
      <Text style={styles.infoContent}>{info4}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
    containerProfileItem: {
        backgroundColor: ColorCustom.WHITE,
        paddingHorizontal: 10,
        paddingBottom: 25,
        margin: 20,
        borderRadius: 8,
        marginTop: -65,
        elevation: 1,
        shadowOpacity: 0.05,
        shadowRadius: 10,
        shadowColor: ColorCustom.BLACK,
        shadowOffset: { height: 0, width: 0 },
      },
      matchesProfileItem: {
        width: 135,
        marginTop: -15,
        backgroundColor: ColorCustom.PRIMARY_COLOR,
        paddingVertical: 7,
        paddingHorizontal: 20,
        borderRadius: 20,
        alignSelf: "center",
      },
      matchesTextProfileItem: {
        color: ColorCustom.WHITE,
        textAlign: "center",
      },
      name: {
        paddingTop: 25,
        paddingBottom: 5,
        color: ColorCustom.DARK_GRAY,
        fontSize: 15,
        textAlign: "center",
      },
      descriptionProfileItem: {
        color: ColorCustom.GRAY,
        textAlign: "center",
        paddingBottom: 20,
        fontSize: 13,
      },
      info: {
        paddingVertical: 8,
        flexDirection: "row",
        alignItems: "center",
      },
      iconProfile: {
        fontSize: 12,
        color: ColorCustom.DARK_GRAY,
        paddingHorizontal: 10,
      },
      infoContent: {
        color: ColorCustom.GRAY,
        fontSize: 13,
      },
})

export default ProfileItem;