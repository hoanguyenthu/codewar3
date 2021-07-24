/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {AppProvider} from './src/providers/appProvider';
import {ToastProvider} from 'react-native-fast-toast';
import React from 'react';

import {configureApi} from './src/libs/services';

import configureStore from './src/libs/stores';
import Router from './src/navigation/router';
import {API_URL} from '@app/constants/api';

const store = configureStore();

configureApi({
  baseURL: API_URL,
});

const App: React.ReactNode = () => {
  return (
    <AppProvider store={store}>
      <ToastProvider>
        <Router />
      </ToastProvider>
    </AppProvider>
  );
};

export default App;
