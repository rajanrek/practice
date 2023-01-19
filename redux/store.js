// import {configureStore} from '@reduxjs/toolkit';
// import createSagaMiddleware from 'redux-saga';
// import {watchLoginSaga} from './sagas/loginSaga';
import {createStore} from 'redux';
import rootReducer from './reducers/rootReducer';
// import anotherSlice from './anotherSlice';

// const sagaMiddleware = createSagaMiddleware();
console.log('store hitttt');
const store = createStore(rootReducer);

// sagaMiddleware.run(watchLoginSaga);

export default store;
