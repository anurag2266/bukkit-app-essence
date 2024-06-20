import { takeLatest, call, put } from 'redux-saga/effects';
import * as ActionTypes from './types';
import * as Actions from './actions';
import Attendance from 'models/Attendance';

export function* getStudents() {
  const attendance = yield* Attendance.getInstance();

  try {
    const response = yield call(attendance.getStaffStudentsAwaitingApproval);
    if (response.success) {
      yield put(Actions.getStudentsSuccess(response.data));
    } else {
      yield put(Actions.getStudentsFailure(response.error));
    }
  } catch (error) {
    yield put(Actions.getStudentsFailure(error));
  }
}

export default [takeLatest(ActionTypes.GET_STUDENTS_REQUEST, getStudents)];
