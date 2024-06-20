import { takeLatest, call, put } from 'redux-saga/effects';
import * as Actions from './actions';
import Attendance from 'models/Attendance';
import { GET_SCHEDULE_REQUEST } from './types';

export function* getSchedule() {
  const attendance = yield* Attendance.getInstance();
  try {
    const response = yield call(attendance.getLessonsSchedule);
    if (response.success) {
      yield put(Actions.getScheduleSuccess(response.data));
    } else {
      yield put(Actions.getScheduleFailure(response.error));
    }
  } catch (error) {
    yield put(Actions.getScheduleFailure(error));
  }
}

export default [takeLatest(GET_SCHEDULE_REQUEST, getSchedule)];
