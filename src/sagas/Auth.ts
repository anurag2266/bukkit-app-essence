import AsyncStorage from '@react-native-community/async-storage';
import { takeEvery, put } from 'redux-saga/effects';
import { Auth } from '../models';
import { config } from '../constants';
import * as ACTIONS from '../actions';

const model = new Auth();

function* getUserColleges(action: any) {
  try {
    const data = yield model.getUserColleges(action.email);
    yield put({ type: ACTIONS.AUTH_GET_USER_COLLEGES_SUCCESS, data });
  } catch (error) {
    yield put({ type: ACTIONS.AUTH_GET_USER_COLLEGES_FAIL, error });
  }
}

function* sendOneTimePassword(action: any) {
  try {
    const data = yield model.sendOneTimePassword(action.email, action.slug);
    yield put({ type: ACTIONS.AUTH_SEND_ONETIME_PASSWORD_SUCCESS, data });
  } catch (error) {
    yield put({ type: ACTIONS.AUTH_SEND_ONETIME_PASSWORD_FAIL, error });
  }
}

function* signIn(action: any) {
  try {
    const r = yield model.signIn(action.email, action.slug, action.password);
    yield put({ type: ACTIONS.AUTH_SIGN_IN_SUCCESS, authToken: r.data.token });
  } catch (error) {
    yield put({ type: ACTIONS.AUTH_SIGN_IN_FAIL, error });
  }
}

function* loadAuthToken(action: any) {
  try {
    const authToken = yield AsyncStorage.getItem(config.asyncStorage.authToken);
    yield put({ type: ACTIONS.AUTH_LOAD_TOKEN_SUCCESS, authToken });
  } catch (error) {
    yield put({ type: ACTIONS.AUTH_LOAD_TOKEN_FAIL, error });
  }
}

function* storeAuthToken(action: any) {
  try {
    yield AsyncStorage.setItem(config.asyncStorage.authToken, action.authToken);
    yield put({ type: ACTIONS.AUTH_STORE_TOKEN_SUCCESS });
  } catch (error) {
    yield put({ type: ACTIONS.AUTH_STORE_TOKEN_FAIL, error });
  }
}

function* clearAuthToken(action: any) {
  try {
    yield AsyncStorage.removeItem(config.asyncStorage.authToken);
    yield put({ type: ACTIONS.AUTH_CLEAR_TOKEN_SUCCESS });
  } catch (error) {
    yield put({ type: ACTIONS.AUTH_CLEAR_TOKEN_FAIL, error });
  }
}

/*
 * binds actions to generators
 */
export function* authSaga() {
  yield takeEvery(ACTIONS.AUTH_GET_USER_COLLEGES, getUserColleges);
  yield takeEvery(ACTIONS.AUTH_SEND_ONETIME_PASSWORD, sendOneTimePassword);
  yield takeEvery(ACTIONS.AUTH_SIGN_IN, signIn);
  yield takeEvery(ACTIONS.AUTH_LOAD_TOKEN, loadAuthToken);
  yield takeEvery(ACTIONS.AUTH_STORE_TOKEN, storeAuthToken);
  yield takeEvery(ACTIONS.AUTH_CLEAR_TOKEN, clearAuthToken);
}
