// /* eslint-disable prettier/prettier */
// import {call, put, takeLatest} from 'redux-saga/effects';
// import {loginSuccess, loginFailed} from '../actions/login';
// import action, { dummySuccess } from '../actions/dummy';
// import api from '../../services';

// function* loginSaga({userName, password}) {
//   try {
//     const response = yield call(api.post, '/login', {
//       userName,
//       password,
//     });
//     console.log(response)
//     yield put(loginSuccess(response.data));
//   } catch (error) {
//     console.log("error--", error)
//     yield put(loginFailed(error));
//   }
// }

// export function* watchLoginSaga() {
//   yield takeLatest('LOGIN', loginSaga);
// }

// function* dummySaga(action) {
//     try {
//     //   const response = yield call(api, action.payload)
//       yield put(dummySuccess(action.payload));
//     } catch (error) {
//       console.log("error--", error)
//       yield put(loginFailed(error));
//     }
//   }
  
//   export function* watchDummySaga() {
//     yield takeLatest('DUMMY', loginSaga);
//   }
