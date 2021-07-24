import AsyncStorage from '@react-native-community/async-storage';
import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Avatar from './Avatar';
import ProfileAction from './ProfileAction';
import ProfileImages from './ProfileImage';
import DEMO from "../../assets/data/demo";
import Dimensions from '@app/utils/dimension';
import { ColorCustom } from "@app/utils/colors";
import Assets from '../../utils/assets';
function Profile({ navigation }) {
    const [data, setData] = useState()
    const {
        age,
        image,
        info1,
        info2,
        info3,
        info4,
        location,
        match,
        name,
    } = DEMO[7];

    return (
        <View style={styles.container}>
            <ScrollView>
                <Avatar image={image} name={name} info={info1}/>
                <ProfileAction name={name} image={image}/>
                <ProfileImages photos={[image]} />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        overflow: 'scroll',
        alignItems: 'center',
        width: '100%',
        minHeight: '100%',
        paddingTop: 10,
        backgroundColor: '#FFF',
    },
})

export default Profile;