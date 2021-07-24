import React, {useEffect, useState} from 'react';
import Dimensions from '@app/utils/dimension';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {ConstantString} from '../../utils/string';
import {ButtonComponent} from '../ButtonComponent';
import {ColorCustom} from '../../utils/colors';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../libs/redux';
import {
  checkEmailValidate,
  checkEmpty,
  passwordValidate,
} from '../../utils/validations';
import {handleError} from '../../utils/common';
import Assets from '../../utils/assets';
import {login} from '../../libs/redux/actions/auth/authActions';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailError, setIsEmailError] = useState(false);
  const [isPasswordError, setPasswordError] = useState(false);
  const [disableSubmit, setDisableSubmit] = useState(false);
  const [isShowPassword, setValueShowPassword] = useState(false);
  const loading = useSelector<RootState>(
    state => state?.auth?.loading,
  ) as LoadingState;
  const error = useSelector<RootState>(state => state?.auth?.error) as IError;
  const dispatch = useDispatch();

  const navigation = useNavigation();

  const onSubmit = () => {
    if (checkEmpty(email)) {
      setIsEmailError(true);
      handleError(ConstantString.EMAIL_EMPTY_ALERT);
      return;
    }
    if (passwordValidate(password)) {
      setPasswordError(true);
      handleError(ConstantString.PASSWORD_INVALID);
      return;
    }
    if (checkEmailValidate(email)) {
      setIsEmailError(true);
      handleError(ConstantString.INVALID_EMAIL);
      return;
    }
    setIsEmailError(false);
    setIsEmailError(false);
    dispatch(login(email, password, handleError));
  };

  useEffect(() => {
    if (loading === 'loading') {
      setDisableSubmit(true);
    } else {
      setDisableSubmit(false);
    }
  }, [loading]);

  const onShowPassword = () => {
    setValueShowPassword(!isShowPassword);
  };


  const onSignUpPress = () => {
    navigation.navigate('SignUp');
  };

  const onEmailBlur = () => {
    if (checkEmpty(email) || checkEmailValidate(email)) {
      setIsEmailError(true);
    } else {
      setIsEmailError(false);
    }
  };

  const onPassBlur = () => {
    if (passwordValidate(password)) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };

  return (
    <ImageBackground
      source={Assets.Images.appBackground}
      style={styles.container}>
      <View style={styles.header}>
        <Image source={Assets.Images.appAvatar} style={styles.appAvatar} />
      </View>
      <View>
        <Text style={styles.smallTextHeader}>Welcome Back</Text>
        <Text style={styles.textHeader}>Please, Sign In</Text>
      </View>
      <KeyboardAvoidingView style={styles.body} behavior={'position'}>
        <View style={styles.inputContainer}>
          <View style={styles.wrapperIcon}>
            <Icon name="user-circle" size={20} />
          </View>
          <TextInput
            placeholder="Account"
            keyboardType="email-address"
            multiline={false}
            returnKeyType="done"
            style={styles.input}
            onBlur={() => onEmailBlur()}
            onChangeText={text => setEmail(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.wrapperIcon}>
            <Icon name="key" size={20} />
          </View>
          <TextInput
            placeholder="Password"
            style={styles.input}
            returnKeyType="done"
            onChangeText={text => setPassword(text)}
            secureTextEntry={!isShowPassword}
            onBlur={() => onPassBlur()}
          />
          <TouchableOpacity
            style={styles.showPasswordButton}
            activeOpacity={0.6}
            onPress={onShowPassword}>
            <Icon name={!isShowPassword ? 'eye-slash' : 'eye'} size={20} />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
      <View style={styles.footer}>
        <ButtonComponent
          onClick={onSubmit}
          title="Continue"
          disable={disableSubmit}
          backgroundColor={
            !disableSubmit ? ColorCustom.BUTTON : ColorCustom.BG_DARK
          }
        />
        <TouchableOpacity
          style={{marginTop: 10, marginBottom: 10}}>
          <Text style={styles.orText}>{ConstantString.OR}</Text>
        </TouchableOpacity>
        <ButtonComponent
          onClick={onSignUpPress}
          title="Create an Account"
          disable={disableSubmit}
          backgroundColor={
            !disableSubmit ? ColorCustom.REGISTER_BUTTON : ColorCustom.BG_DARK
          }
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    borderRadius: 4,
  },
  header: {
    marginTop: '5%',
    alignItems: 'center',
  },
  appAvatar: {
    width: '80%',
    height: 200,
  },
  smallTextHeader: {
    // fontFamily: 'SF Pro Display',
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    color: ColorCustom.WHITE,
  },
  textHeader: {
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
    color: ColorCustom.WHITE,
  },
  input: {
    paddingHorizontal: 40,
    height: 55,
    width: '80%',
    borderWidth: 1,
    borderColor: ColorCustom.WHITE,
    backgroundColor: ColorCustom.WHITE,
    borderRadius: 37,
    position: 'relative',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: ColorCustom.WHITE,
    borderColor: ColorCustom.WHITE,
    height: 55,
    borderRadius: 37,
    marginHorizontal: '10%',
    marginTop: Dimensions.Dimensions.DIMENSION_HEIGHT * 0.03,
    width: '80%',
  },
  orText: {
    color: ColorCustom.WHITE,
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '500',
  },
  footer: {
    alignItems: 'center',
    marginTop: Dimensions.Dimensions.DIMENSION_HEIGHT * 0.03,
  },
  body: {
    justifyContent: 'center',
  },
  showPasswordButton: {
    position: 'absolute',
    right: 10,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorTextStyle: {
    color: ColorCustom.DANGER,
    marginTop: 10,
    textAlign: 'center',
    fontSize: 14,
  },
  wrapperIcon: {
    zIndex: 100,
    left: 20,
    justifyContent: 'center',
    height: '100%',
    position: 'absolute',
  },
});
export default LoginForm;
