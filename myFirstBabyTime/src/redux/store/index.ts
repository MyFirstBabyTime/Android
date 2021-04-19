import {createStore, applyMiddleware, StoreCreator} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
// import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducer';

import Reactotron from 'reactotron-react-js';
import {reactotronRedux} from 'reactotron-redux';

const store = createStore(rootReducer, composeWithDevTools());
export type ReducerType = ReturnType<typeof rootReducer>;
export default store;
