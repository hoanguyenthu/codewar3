import assets from '@app/utils/assets';
import { ColorCustom } from '@app/utils/colors';
import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import { View, StyleSheet, SafeAreaView, TouchableOpacity, Text, Image, ImageBackground } from 'react-native';
import { select } from 'redux-saga/effects';
import { ButtonComponent } from '../ButtonComponent';

const listImageAnimal = [
    { image: require('../../assets/images/01.jpg'),id:0 },
    { image: require('../../assets/images/02.jpg'),id:1 },
    { image: require('../../assets/images/03.jpg'),id:2 },
    { image: require('../../assets/images/04.jpg'),id:3 },
    { image: require('../../assets/images/05.jpg'),id:4 },
    { image: require('../../assets/images/06.jpg'),id:5 },
    { image: require('../../assets/images/07.jpg'),id:6 },
    { image: require('../../assets/images/08.jpg'),id:7 },
    { image: require('../../assets/images/09.jpg'),id:8 },
]
const FavouriteAnimal = () => {
    const [selected, setSelected] = useState<number[]>([])
    const navigation = useNavigation()
    const onSubmit = () => {
      navigation.navigate('Home')
    }
    const disableSubmit = () => {

    }

    return (
        <ImageBackground style={styles.container} source={assets.Images.appBackground}>
            <View style={{marginHorizontal:20}}>
                <TouchableOpacity style={styles.btnNext}>
                    <Text style={styles.text}>Skip</Text>
                </TouchableOpacity>
                <Text style={styles.favorite}>Favorite animal</Text>
                <View style={styles.content}>
                    {
                        listImageAnimal.map((item,index) => {
                            return (
                                <TouchableOpacity style={selected.includes(index) ? styles.active : styles.boxImage} onPress={() => setSelected([...selected, index]) }>
                                    <Image source={item.image} resizeMode="cover" style={styles.image} />
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>
                <View style={styles.footer}>
                    <ButtonComponent
                        onClick={onSubmit}
                        title="Done"
                        disable={disableSubmit}
                        backgroundColor={
                            ColorCustom.BUTTON
                        }
                    />
                </View>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        // marginHorizontal: '8%',
        // marginTop: '10%',
        height:'100%'
    },
    btnNext: {
        alignSelf: 'flex-end'
    },
    text: {
        fontSize: 20,
        opacity: 0.4
    },
    favorite: {
        fontSize: 24,
        fontWeight: '500'
    },
    boxImage: {
        width: 100,
        height: 100,
        marginTop: 20,
        borderWidth: 3,
        borderStyle: 'solid',
    },
    content: {
        flexDirection: 'row',
        maxHeight: 400,
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    image: {
        width: '100%',
        height: '100%',
    },
    btnSubmit: {
        textAlign: 'center'
    },
    footer: {
        alignItems: 'center',
        marginTop: 20
    },
    active:{
        borderColor:'green',
        width: 100,
        height: 100,
        marginTop: 20,
        borderWidth: 3,
        borderStyle: 'solid',
    }
})
export default FavouriteAnimal;