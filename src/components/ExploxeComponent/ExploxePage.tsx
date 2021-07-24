import React, { useEffect, useRef, useState } from 'react';
import {View, Text, StyleSheet, ImageBackground, SafeAreaView} from 'react-native';
import CardItem from '../CardItemComponent/CardItemComponent';
import CardStack, { Card } from 'react-native-card-stack-swiper';
import { City } from '../CityComponent';
import Filters from '../FiltersComponent/Filters';
import DEMO from "../../assets/data/demo";
import Assets from '../../utils/assets';
import Dimensions  from '@app/utils/dimension';

const ExploxePage = () => {
  const [swiper, setSwiper] = useState<CardStack | null>(null);
  const newSwiperRef= useRef<CardStack | null>(null);
  const onGoBackPress = () => {
    newSwiperRef.current.goBackFromLeft();
  }

  const onHeartPress = () =>{
    newSwiperRef.current.swipeRight();
  }

  const onRejectPress = () => {
    newSwiperRef.current.swipeLeft();
  }

  const onSwipedLeft = () => {
    console.log('left')
  }
  
  const onSwipedRight = () => {
    console.log('right')
  }

    return (
        <ImageBackground
      source={Assets.Images.appBackground}
      style={styles.bg}
    >
      <SafeAreaView >
      <View style={styles.containerHome}>
        <View style={styles.top}>
          <City />
          <Filters />
        </View>
        <CardStack
          loop
          verticalSwipe={false}
          renderNoMoreCards={() => null}
          ref={newSwiperRef}
        >
          {DEMO.map((item) => (
            <Card key={item.id} onSwipedLeft={onSwipedLeft} onSwipedRight={onSwipedRight}>
              <CardItem
                onHeartPress={onHeartPress}
                onRejectPress={onRejectPress}
                onGoBackPress={onGoBackPress}
                hasActions
                image={item.image}
                name={item.name}
                description={item.description}
                matches={item.match}
              />
            </Card>
          ))}
        </CardStack>
      </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
const styles = StyleSheet.create(
    {
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
            paddingTop: 10,
            marginHorizontal: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          },
    }
)

export default ExploxePage;