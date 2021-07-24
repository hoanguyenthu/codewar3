import React from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  StyleSheet,
} from "react-native";
import { CardItemComponent } from "../CardItemComponent";
import { Icon } from "../Icon";
import DEMO from "../../assets/data/demo";
import Dimensions from '@app/utils/dimension';
import { ColorCustom } from "@app/utils/colors";
import Assets from '../../utils/assets';
import { useNavigation } from "@react-navigation/native";

const MatchesComponent = () => {
  const navigation = useNavigation()
  const onMatchPress = (data:any) => {
     navigation.navigate('OtherUserProfile',{data})
  }

  return (<ImageBackground
    source={Assets.Images.appBackground}
    style={styles.bg}
  >
    <View style={styles.containerMatches}>
      <View style={styles.top}>
        <Text style={styles.title}>Matches</Text>
        <TouchableOpacity>
          <Icon name="ellipsis-vertical" color={ColorCustom.DARK_GRAY} size={20} />
        </TouchableOpacity>
      </View>

      <FlatList
        numColumns={2}
        data={DEMO}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) =>  (
          <TouchableOpacity onPress={() => onMatchPress(item)}>
            <CardItemComponent
              image={item.image}
              name={item.name}
              isOnline={item.isOnline}
              hasVariant
            />
          </TouchableOpacity>
        )}
      />
    </View>
  </ImageBackground>
  )
};

const styles = StyleSheet.create({
  containerMatches: {
    justifyContent: "space-between",
    flex: 1,
    paddingHorizontal: 10,
  },
  bg: {
    flex: 1,
    resizeMode: "cover",
    width: Dimensions.Dimensions.DIMENSION_WIDTH,
    height: Dimensions.Dimensions.DIMENSION_HEIGHT,
  },
  top: {
    paddingTop: 50,
    marginHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: { paddingBottom: 10, fontSize: 22, color: ColorCustom.DARK_GRAY },
})

export default MatchesComponent;
