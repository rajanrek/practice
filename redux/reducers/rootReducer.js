import {combineReducers} from 'redux';
import dummyReducer from './dummyReducer';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
  dummy: dummyReducer,
  items: loginReducer,
});

export default rootReducer;
