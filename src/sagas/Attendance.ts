import { takeEvery, put } from 'redux-saga/effects';
import { Attendance } from '../models';

import * as ACTIONS from '../actions';
import { localization } from '../constants';

function* getAttendanceCA(action: any) {
  try {
    const model = yield Attendance.getInstance();
    const summary = yield model.getAttendanceSummaryCA();
    const details = yield model.getAttendanceDetails();

    for (let i = 0; i < details.data.length; i++) {
      const { data } = details.data[i];

      for (let j = 0; j < data.length; j++) {
        const dayData = data[j];
        const [year, month, day] = dayData.date;
        details.data[i].data[j].date = new Date(year, month, day);
      }
    }

    const month = localization.monthArray[summary.data.month - 1];
    const data = {
      summary: [
        { title: `Lessons\nin ${month}`, value: summary.data.montlyLessons },
        {
          title: `Hours in\n${month}`,
          value: summary.data.monthlyHours.toFixed(2)
        },
        {
          title: 'Rate of\nAttendance',
          value: `${summary.data.rateOfAttendance}%`
        }
      ],
      details: details.data
    };

    yield put({ type: ACTIONS.GET_ATTENDANCE_SUCCESS, data });
  } catch (error) {
    yield put({ type: ACTIONS.GET_ATTENDANCE_FAIL, error });
  }
}

function* getAttendanceDA(action: any) {
  try {
    const model = yield Attendance.getInstance();
    const summary = yield model.getAttendanceSummaryDA();
    const details = yield model.getAttendanceDetails();

    for (let i = 0; i < details.data.length; i++) {
      const { data } = details.data[i];

      for (let j = 0; j < data.length; j++) {
        const dayData = data[j];
        const [year, month, day] = dayData.date;
        details.data[i].data[j].date = new Date(year, month, day);
      }
    }

    const month = localization.monthArray[summary.data.month - 1];
    const data = {
      summary: [
        { title: `Days in\n${month}`, value: summary.data.daysInTheMonth },
        {
          title: `Days \nin ${summary.data.year}`,
          value: summary.data.daysinTheYear
        },
        {
          title: 'Rate of\nattendance',
          value: `${summary.data.rateOfAttendance}%`
        }
      ],
      details: details.data
    };

    yield put({ type: ACTIONS.GET_ATTENDANCE_SUCCESS, data });
  } catch (error) {
    yield put({ type: ACTIONS.GET_ATTENDANCE_FAIL, error });
  }
}

/*
 * binds actions to generators
 */
export function* attendanceSaga() {
  yield takeEvery(ACTIONS.GET_ATTENDANCE, getAttendanceDA);
}
