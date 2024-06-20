import { takeEvery, put } from 'redux-saga/effects';
import { Attendance } from '../models';

import * as ACTIONS from '../actions';

function* getUsersByClass(action: any) {
  try {
    const model = yield Attendance.getInstance();
    const data = yield model.getUsersByClassId(action.classId);
    yield put({ type: ACTIONS.GET_CLASS_USERS_SUCCESS, data });
  } catch (error) {
    yield put({ type: ACTIONS.GET_CLASS_USERS_FAIL, error });
  }
}

/*
 * binds actions to generators
 */
export function* classStudentsSaga() {
  yield takeEvery(ACTIONS.GET_CLASS_USERS, getUsersByClass);
}
