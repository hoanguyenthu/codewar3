import React, { useContext, useState } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native'
// import { Icon } from 'react-native-gradient-icon'
import ImagePicker from 'react-native-image-crop-picker'
import Icon from '@app/components/Icon/Icon'
import { ColorCustom } from '@app/utils/colors'
// import { ChangeDataContext } from '../../contexts/ChangeData'

// const defaultImg = require('../../../assets/img/dinesh.jpg')

function Avatar({ image, name, info }) {
  const [loading, setLoading] = useState(false)

  return (
    <View style={styles.avatar}>
      <TouchableOpacity>
        {loading && (
          <ActivityIndicator size={35} color="#fff" style={styles.loading} />
        )}
        <ImageBackground
          source={image}
          style={styles.image}
        />
      </TouchableOpacity>
      <View style={styles.info}>
        <View style={styles.nameLine}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.icon}>
            <Icon name="heart" color={ColorCustom.WHITE} size={13}/>
          </Text>
        </View>
        <Text style={styles.smallInfo}>{info}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  avatar: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingTop: 20,
  },
  loading: {
    position: 'absolute',
    zIndex: 999,
    top: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, .5)',
    width: 150,
    height: 150,
    borderRadius: 200,
  },
  image: {
    borderRadius: 200,
    overflow: 'hidden',
    width: 150,
    height: 150,
    position: 'relative',
  },
  info: {
    justifyContent: 'center',
  },
  nameLine: {
    alignSelf: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  icon: {
    position: 'absolute',
    top: 24,
    right: -30,
  },
  smallInfo: {
    marginTop: 5,
    fontSize: 13,
    textAlign: 'center',
    color: '#777',
  },
})

export default Avatar