import { ColorCustom } from "@app/utils/colors";
import React from "react";
import { Text, View, StyleSheet } from "react-native";
import {Icon} from "../Icon";

const TabBarIconComponent = ({ focused, iconName, text }: TabBarIconT) => {
  const iconFocused = focused ? ColorCustom.PRIMARY_COLOR : ColorCustom.DARK_GRAY;

  return (
    <View style={styles.iconMenu}>
      <Icon name={iconName} size={16} color={iconFocused} />
      <Text style={[styles.tabButtonText, { color: iconFocused }]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    tabButtonText: {
        textTransform: "uppercase",
      },
      iconMenu: {
        alignItems: "center",
      },
})

export default TabBarIconComponent;
