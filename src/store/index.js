import {createStore, compose, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './ducks';
import rootSaga from './sagas';

const middleares = [];
const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor : null;
const sagaMiddleware = createSagaMiddleware({sagaMonitor});

middleares.push(sagaMiddleware);

const composer = __DEV__
  ? compose(
      applyMiddleware(...middleares),
      console.tron.createEnhancer()
    )
  : applyMiddleware(...[]);

const store = createStore(rootReducer, composer);

sagaMiddleware.run(rootSaga);

export default store;
