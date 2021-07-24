import React, {useEffect, useMemo, useState} from 'react';
import Dimensions from '@app/utils/dimension';
import {useToast} from 'react-native-fast-toast';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Image,
  BackHandler,
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
import {
  handleError,
  handleSuccess,
  handleSuccessSignUp,
} from '../../utils/common';
import Assets from '../../utils/assets';
import {signUp} from '@app/libs/redux/actions/auth/authActions';

const SignUpForm = () => {
  const toast = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confimPassword, setComfirmPassword] = useState('');
  const [isEmailError, setIsEmailError] = useState(false);
  const [isPasswordError, setPasswordError] = useState(false);
  const [disableSubmit, setDisableSubmit] = useState(false);
  const [isShowPassword, setValueShowPassword] = useState(false);
  const [warning, setWarning] = useState('');
  const loading = useSelector<RootState>(
    state => state?.auth?.loading,
  ) as LoadingState;

  const successMessage = useSelector<RootState>(
    state => state?.auth?.success,
  ) as string;

  const error = useSelector<RootState>(state => state?.auth?.error) as IError;
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const isCheckConfirmPassword = text => {
    setWarning('');
    setComfirmPassword(text);
  };

  const onBackPress = () => {
    navigation.navigate('Login');
    return true;
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      onBackPress,
    );
    return () => backHandler.remove();
  }, []);

  const onSubmit = () => {
    if (password !== confimPassword) {
      setWarning('Confirm password is not correct');
    }
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

    dispatch(
      signUp(
        {emailAddress: email, password: password},
        handleError,
        handleSuccessSignUp,
      ),
    );
  };

  useEffect(() => {
    if (loading === 'loading') {
      setDisableSubmit(true);
    } else {
      setDisableSubmit(false);
    }
  }, [loading]);

  useMemo(() => {
    if (successMessage !== '') {
      toast.show(ConstantString.SUCCESS_SIGNUP, {
        type: 'success',
        duration: 2000,
        animationType: 'slide-in',
      });
      setTimeout(() => {
        navigation.navigate('Login');
      }, 2000);
    }
  }, [successMessage]);

  const onShowPassword = () => {
    setValueShowPassword(!isShowPassword);
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
        <Image source={Assets.Images.avatarSignUp} style={styles.appAvatar} />
      </View>
      <View>
        <Text style={styles.smallTextHeader}>Hi there!</Text>
        <Text style={styles.textHeader}>Let's Get Started</Text>
      </View>
      <KeyboardAvoidingView style={styles.body} behavior={'position'}>
        <View style={styles.inputContainer}>
          <View style={styles.wrapperIcon}>
            <Icon name="user-circle" size={20} />
          </View>
          <TextInput
            placeholder="Acount"
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
        <View style={styles.inputContainer}>
          <View style={styles.wrapperIcon}>
            <Icon name="check-circle" size={20} />
          </View>
          <TextInput
            placeholder="Confirm Password"
            style={styles.input}
            returnKeyType="done"
            onChangeText={text => isCheckConfirmPassword(text)}
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
          title="Create an Account"
          disable={disableSubmit}
          backgroundColor={
            !disableSubmit ? ColorCustom.BUTTON : ColorCustom.BG_DARK
          }
        />
        <TouchableOpacity
          style={{
            marginTop: Dimensions.Dimensions.DIMENSION_HEIGHT * 0.02,
            marginBottom: Dimensions.Dimensions.DIMENSION_HEIGHT * 0.02,
          }}>
          <Text style={styles.orText}>{ConstantString.OR}</Text>
        </TouchableOpacity>
        <ButtonComponent
          onClick={onBackPress}
          title="Log In"
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
    paddingLeft: 40,
    paddingRight: 40,
    width: '80%',
    height: Dimensions.Dimensions.DIMENSION_HEIGHT * 0.065,
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
    height: Dimensions.Dimensions.DIMENSION_HEIGHT * 0.065,
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
    marginTop: 30,
  },
  body: {
    justifyContent: 'center',
  },
  showPasswordButton: {
    position: 'absolute',
    top: '32%',
    right: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorTextStyle: {
    color: ColorCustom.DANGER,
    marginTop: 10,
    textAlign: 'center',
    fontSize: 14,
  },
  showWarning: {
    color: ColorCustom.DANGER,
    fontSize: 14,
    marginTop: 5,
    paddingLeft: '20%',
  },
  wrapperIcon: {
    zIndex: 100,
    left: 20,
    justifyContent: 'center',
    height: '100%',
    position: 'absolute',
  },
});

export default SignUpForm;
