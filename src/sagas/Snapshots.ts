import { takeEvery, put } from 'redux-saga/effects';
import { Attendance } from '../models';

import * as ACTIONS from '../actions';

function* getSnapshot(action: any) {
  try {
    const model = yield Attendance.getInstance();
    const data = yield model.getSnapshot(action.classId);
    yield put({ type: ACTIONS.GET_SNAPSHOT_SUCCESS, data });
  } catch (error) {
    yield put({ type: ACTIONS.GET_SNAPSHOT_FAIL, error });
  }
}

function* updateSnapshot(action: any) {
  try {
    const model = yield Attendance.getInstance();
    yield model.updateSnapshot(action.classId);
    yield put({ type: ACTIONS.GET_SNAPSHOT, action });
  } catch (error) {
    yield put({ type: ACTIONS.GET_SNAPSHOT_FAIL, error });
  }
}

function* deleteSnapshot(action: any) {
  try {
    const model = yield Attendance.getInstance();
    yield model.deleteSnapshot(action.classId);
    yield put({ type: ACTIONS.GET_SNAPSHOT, action });
  } catch (error) {
    yield put({ type: ACTIONS.GET_SNAPSHOT_FAIL, error });
  }
}

function* deletesSingleSnapshot(action: any) {
  try {
    const model = yield Attendance.getInstance();
    yield model.deletesSingleSnapshot(action.id);
    yield put({ type: ACTIONS.GET_SNAPSHOT, action });
  } catch (error) {
    yield put({ type: ACTIONS.GET_SNAPSHOT_FAIL, error });
  }
}

/*
 * binds actions to generators
 */
export function* snapshotsSaga() {
  yield takeEvery(ACTIONS.GET_SNAPSHOT, getSnapshot);
  yield takeEvery(ACTIONS.UPDATE_SNAPSHOT, updateSnapshot);
  yield takeEvery(ACTIONS.DELETE_SNAPSHOT, deleteSnapshot);
  yield takeEvery(ACTIONS.DELETE_SINGLE_SNAPSHOT, deletesSingleSnapshot);
}
