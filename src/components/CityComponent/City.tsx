import { ColorCustom } from "@app/utils/colors";
import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { Icon } from "../Icon";

const City = () => (
  <TouchableOpacity style={styles.city}>
    <Text style={styles.cityText}>
      <Icon name="location-sharp" size={13} color={ColorCustom.DARK_GRAY} /> New York
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
    city: {
        backgroundColor: ColorCustom.WHITE,
        padding: 10,
        borderRadius: 20,
        width: 100,
        elevation: 1,
        shadowOpacity: 0.05,
        shadowRadius: 10,
        shadowColor: ColorCustom.BLACK,
        shadowOffset: { height: 0, width: 0 },
      },
      cityText: {
        color: ColorCustom.DARK_GRAY,
        fontSize: 13,
        textAlign: "center",
      },
})

export default City;