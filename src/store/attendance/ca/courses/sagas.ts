import { takeLatest, put, call } from 'redux-saga/effects';
import * as Actions from './actions';
import * as ActionTypes from './types';
import Attendance from 'models/Attendance';

export function* getCourses() {
  const attendance = yield* Attendance.getInstance();

  try {
    const response = yield call(attendance.getCourses);

    if (response.success) {
      yield put(Actions.getCoursesSuccess(response.data));
    } else {
      yield put(Actions.getCoursesFailure(response.error));
    }
  } catch (error) {
    yield put(Actions.getCoursesFailure(error));
  }
}

export default [takeLatest(ActionTypes.GET_COURSES_REQUEST, getCourses)];
