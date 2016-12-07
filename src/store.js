import Vue from 'vue';
import Revue from './modules/revue';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/index';
import thunk from 'redux-thunk';
import logger from './middleware/logger';
import * as sampleActions from './actions/sample';
const createStoreWithMiddleware = applyMiddleware(
  thunk,
  logger
)(createStore);

const reduxStore = createStoreWithMiddleware(reducer);

const store = new Revue(Vue, reduxStore, { ...sampleActions });

if (typeof __DEV__ !== 'undefined' && __DEV__) {
    window.store = store;
}

export default store;
