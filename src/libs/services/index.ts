import {configureApi} from './intercepter';
import * as auth from './auth';
import Axios from 'axios';

function isCancel(e: any) {
  return Axios.isCancel(e);
}

export {configureApi, isCancel, auth};
