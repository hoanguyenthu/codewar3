import {ConstantString} from './string';
import {useToast} from 'react-native-fast-toast';

import moment from 'moment';
import {Alert, Modal, View} from 'react-native';

export const getGreetingTime = () => {
  const currentTime = moment();
  if (!currentTime || !currentTime.isValid()) {
    return 'Hello';
  }

  const splitAfternoon = 12; // 24hr time to split the afternoon
  const splitEvening = 17; // 24hr time to split the evening
  const currentHour = parseFloat(currentTime.format('HH'));

  if (currentHour >= splitAfternoon && currentHour <= splitEvening) {
    // Between 12 PM and 5PM
    return 'Good afternoon';
  } else if (currentHour >= splitEvening) {
    // Between 5PM and Midnight
    return 'Good evening';
  }
  // Between dawn and noon
  return 'Good morning';
};

export const getLocalTime = () => {
  return moment().format('YYYY-MM-DDTHH:mm:ss');
};

export const timeOut = 30000;

export const handleError = (message: string) => {
  Alert.alert(ConstantString.ERROR, message);
};
export const handleSuccess = (message: string) => {
  Alert.alert(ConstantString.SUCCESS, message);
};
export const handleSuccessSignUp = () => {
  const toast = useToast();
  toast.show(ConstantString.SUCCESS_SIGNUP, {
    type: 'success',
    duration: 2000,
    animationType: 'slide-in',
  });
};
