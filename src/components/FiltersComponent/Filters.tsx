import { ColorCustom } from "@app/utils/colors";
import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { Icon } from "../Icon";

const Filters = () => (
  <TouchableOpacity style={styles.filters}>
    <Text style={styles.filtersText}>
      <Icon name="filter" size={13} color={ColorCustom.DARK_GRAY} /> Filters
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
    filters: {
        backgroundColor: ColorCustom.WHITE,
        padding: 10,
        borderRadius: 20,
        width: 90,
        elevation: 1,
        shadowOpacity: 0.05,
        shadowRadius: 10,
        shadowColor: ColorCustom.BLACK,
        shadowOffset: { height: 0, width: 0 },
      },
      filtersText: {
        color: ColorCustom.DARK_GRAY,
        fontSize: 13,
        textAlign: "center",
      },
})

export default Filters;