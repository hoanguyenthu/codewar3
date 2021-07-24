import React, {useState} from 'react';
import Dimensions from '@app/utils/dimension';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../../libs/redux';
import {ColorCustom} from '../../utils/colors';

const ButtonComponent = (props: any) => {
  const loading = useSelector<RootState>(
    state => state?.auth?.loading,
  ) as LoadingState;
  return (
    <TouchableOpacity
      activeOpacity={props.disable ? 1 : 0.7}
      style={{...styles.loginButton, backgroundColor: props.backgroundColor}}
      onPress={() => {
        !props.disable && props.onClick();
      }}>
      {loading !== 'loading' ? (
        <Text style={styles.textButton}>{props.title}</Text>
      ) : (
        <ActivityIndicator />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  loginButton: {
    height: Dimensions.Dimensions.DIMENSION_HEIGHT * 0.075,
    width: '80%',
    borderRadius: 37,
    color: ColorCustom.WHITE,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundButton: {
    backgroundColor: ColorCustom.BUTTON,
  },
  textButton: {
    fontWeight: 'bold',
    color: ColorCustom.WHITE,
  },
  backgroundButtonDisable: {
    backgroundColor: ColorCustom.BUTTON_DISABLE,
  },
});

export default ButtonComponent;
