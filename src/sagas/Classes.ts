import { takeEvery, put } from 'redux-saga/effects';
import { Attendance } from '../models';

import * as ACTIONS from '../actions';

function* getClasses(action: any) {
  try {
    const model = yield Attendance.getInstance();
    const data = yield model.getClassesByBeaconIds(action.beaconIds);
    yield put({ type: ACTIONS.GET_CLASSES_SUCCESS, data });
  } catch (error) {
    yield put({ type: ACTIONS.GET_CLASSES_FAIL, error });
  }
}

function* checkin(action: any) {
  const { classId, faceToken } = action;
  try {
    const model = yield Attendance.getInstance();
    const data = yield model.checkin(classId, faceToken);
    yield put({ type: ACTIONS.CHECKIN_SUCCESS, data });
    yield put({ type: ACTIONS.CLEAR_FACE_TOKEN });
  } catch (error) {
    yield put({ type: ACTIONS.CHECKIN_FAIL, error });
  }
}

function* checkout(action: any) {
  const { attendanceId } = action;
  try {
    const model = yield Attendance.getInstance();
    const data = yield model.checkout(attendanceId);
    yield put({ type: ACTIONS.CHECKOUT_SUCCESS, data });
  } catch (error) {
    yield put({ type: ACTIONS.CHECKOUT_FAIL, error });
  }
}

function* replaceClass(action: any) {
  const { data } = action;
  try {
    const model = yield Attendance.getInstance();
    yield model.replaceClass(data);
    yield put({ type: ACTIONS.REPLACE_CLASS_SUCCESS });
  } catch (error) {
    yield put({ type: ACTIONS.REPLACE_CLASS_FAIL, error });
  }
}

/*
 * binds actions to generators
 */
export function* classesSaga() {
  yield takeEvery(ACTIONS.GET_CLASSES, getClasses);
  yield takeEvery(ACTIONS.CHECKIN, checkin);
  yield takeEvery(ACTIONS.CHECKOUT, checkout);
  yield takeEvery(ACTIONS.REPLACE_CLASS, replaceClass);
}
