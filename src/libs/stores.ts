import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "../libs/redux/reducers/rootReducers";
import rootSaga from "../libs/redux/sagas/rootSaga";
import logger from 'redux-logger';

const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;