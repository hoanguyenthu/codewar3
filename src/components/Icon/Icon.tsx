import React from "react";
import Ionicons  from "react-native-vector-icons/Ionicons";

const Icon = ({ color, name, size, style }: IconT) => {
  return (<Ionicons name={name} size={size} color={color} style={style} />);
}
export default Icon;