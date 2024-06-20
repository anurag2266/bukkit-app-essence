import AsyncStorage from '@react-native-community/async-storage';
import { takeEvery, put } from 'redux-saga/effects';
import { Attendance } from '../models';
import { config } from '../constants';

import * as ACTIONS from '../actions';

function* addUser(action: any) {
  try {
    const model = yield Attendance.getInstance();
    const data = yield model.addUser(action.filePath);
    yield put({ type: ACTIONS.USER_STORE_USER, data: data.data });
  } catch (error) {
    yield put({ type: ACTIONS.USER_ADD_USER_FAIL, error });
  }
}

function* loadUserData(action: any) {
  try {
    const data = yield AsyncStorage.getItem(config.asyncStorage.userData);

    yield put({ type: ACTIONS.USER_LOAD_USER_SUCCESS, data: JSON.parse(data) });
  } catch (error) {
    yield put({ type: ACTIONS.USER_LOAD_USER_FAIL, error });
  }
}

function* storeUserData(action: any) {
  try {
    yield AsyncStorage.setItem(
      config.asyncStorage.userData,
      JSON.stringify(action.data)
    );
    yield put({ type: ACTIONS.USER_STORE_USER_SUCCESS, data: action.data });
  } catch (error) {
    yield put({ type: ACTIONS.USER_STORE_USER_FAIL, error });
  }
}

function* clearUserData(action: any) {
  try {
    yield AsyncStorage.removeItem(config.asyncStorage.userData);
    yield put({ type: ACTIONS.USER_CLEAR_USER_SUCCESS });
  } catch (error) {
    yield put({ type: ACTIONS.USER_CLEAR_USER_FAIL, error });
  }
}

/*
 * binds actions to generators
 */
export function* userSaga() {
  yield takeEvery(ACTIONS.USER_ADD_USER, addUser);
  yield takeEvery(ACTIONS.USER_LOAD_USER, loadUserData);
  yield takeEvery(ACTIONS.USER_STORE_USER, storeUserData);
  yield takeEvery(ACTIONS.USER_CLEAR_USER, clearUserData);
}
