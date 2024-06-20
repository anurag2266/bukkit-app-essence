import { takeLatest, call, put } from 'redux-saga/effects';
import * as Actions from './actions';
import {
  CreateLessonAction,
  GET_SCHEDULE_REQUEST,
  GET_SUMMARY_REQUEST,
  CREATE_LESSON_REQUEST,
  CREATE_LESSON_SUCCESS,
  GetCurrentLessonDetailsAction,
  GET_CURRENT_LESSON_DETAILS_REQUEST,
  GetCurrentLessonStudentsAction,
  GET_CURRENT_LESSON_STUDENTS_REQUEST,
  STOP_CURRENT_LESSON_REQUEST,
  StopCurrentLessonAction,
  STOP_CURRENT_LESSON_SUCCESS,
  SendStudentsReminderAction,
  SEND_STUDENTS_REMINDER_REQUEST,
  CHECK_ONLINE_ATTENDANCE_REQUEST,
  CheckOnlineAttendanceAction,
  CHECK_ONLINE_ATTENDANCE_SUCCESS,
  CheckOnlineAttendanceSuccessAction,
  GET_HISTORY_REQUEST
} from './types';
import Attendance from 'models/Attendance';

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

export function* getSummary() {
  const attendance = yield* Attendance.getInstance();

  try {
    const response = yield call(attendance.getStaffLessonsAttendanceSummary);
    if (response.success) {
      yield put(Actions.getSummarySuccess(response.data));
    } else {
      yield put(Actions.getSummaryFailure(response.error));
    }
  } catch (error) {
    yield put(Actions.getSummaryFailure(error));
  }
}

export function* createLesson(action: CreateLessonAction) {
  const attendance = yield* Attendance.getInstance();

  try {
    const response = yield call(attendance.createClass, action.payload);
    if (response.success) {
      yield put(Actions.createLessonSuccess());
    } else {
      yield put(Actions.createLessonFailure(response.error));
    }
  } catch (error) {
    yield put(Actions.createLessonFailure(error));
  }
}

export function* getCurrentLessonDetails(
  action: GetCurrentLessonDetailsAction
) {
  const attendance = yield* Attendance.getInstance();

  try {
    const response = yield call(attendance.getLessonDetails, {
      lessonId: action.payload.lessonId
    });
    if (response.success) {
      yield put(Actions.getCurrentLessonDetailsSuccess(response.data));
    } else {
      yield put(Actions.getCurrentLessonDetailsFailure(response.error));
    }
  } catch (error) {
    yield put(Actions.getCurrentLessonDetailsFailure(error));
  }
}

export function* getCurrentLessonStudents(
  action: GetCurrentLessonStudentsAction | CheckOnlineAttendanceSuccessAction
) {
  const attendance = yield* Attendance.getInstance();

  try {
    const response = yield call(attendance.getLessonStudentsAll, {
      lessonId: action.payload.lessonId
    });
    if (response.success) {
      yield put(Actions.getCurrentLessonStudentsSuccess(response.data));
    } else {
      yield put(Actions.getCurrentLessonStudentsFailure(response.error));
    }
  } catch (error) {
    yield put(Actions.getCurrentLessonStudentsFailure(error));
  }
}

export function* stopCurrentLesson(action: StopCurrentLessonAction) {
  const attendance = yield* Attendance.getInstance();

  try {
    const response = yield call(attendance.stopLesson, {
      lessonId: action.payload.lessonId
    });
    if (response.success) {
      yield put(Actions.stopCurrentLessonSuccess());
    } else {
      yield put(Actions.stopCurrentLessonFailure(response.error));
    }
  } catch (error) {
    yield put(Actions.stopCurrentLessonFailure(error));
  }
}

export function* sendStudentsReminder(action: SendStudentsReminderAction) {
  const attendance = yield* Attendance.getInstance();

  try {
    const response = yield call(attendance.sendStudentsReminder, {
      lessonId: action.payload.lessonId
    });
    if (response.success) {
      yield put(Actions.sendStudentsReminderSuccess());
    } else {
      yield put(Actions.sendStudentsReminderFailure(response.error));
    }
  } catch (error) {
    yield put(Actions.sendStudentsReminderFailure(error));
  }
}

export function* checkOnlineAttendance(action: CheckOnlineAttendanceAction) {
  const attendance = yield* Attendance.getInstance();

  try {
    const response = yield call(attendance.checkLessonOnlineAttendance, {
      lessonId: action.payload.lessonId
    });
    if (response.success) {
      yield put(
        Actions.checkOnlineAttendanceSuccess(
          action.payload.lessonId,
          response.data
        )
      );
    } else {
      yield put(Actions.checkOnlineAttendanceFailure(response.error));
    }
  } catch (error) {
    yield put(Actions.checkOnlineAttendanceFailure(error));
  }
}

export function* getHistory() {
  const attendance = yield* Attendance.getInstance();

  try {
    const response = yield call(attendance.getLessonsHistory);
    if (response.success) {
      yield put(Actions.getHistorySuccess(response.data));
    } else {
      yield put(Actions.getHistoryFailure(response.error));
    }
  } catch (error) {
    yield put(Actions.getHistoryFailure(error));
  }
}

export default [
  takeLatest(
    [GET_SCHEDULE_REQUEST, CREATE_LESSON_SUCCESS, STOP_CURRENT_LESSON_SUCCESS],
    getSchedule
  ),
  takeLatest([GET_HISTORY_REQUEST, CREATE_LESSON_SUCCESS], getHistory),
  takeLatest([GET_SUMMARY_REQUEST, CREATE_LESSON_SUCCESS], getSummary),
  takeLatest(CREATE_LESSON_REQUEST, createLesson),
  takeLatest(GET_CURRENT_LESSON_DETAILS_REQUEST, getCurrentLessonDetails),
  takeLatest(
    [GET_CURRENT_LESSON_STUDENTS_REQUEST, CHECK_ONLINE_ATTENDANCE_SUCCESS],
    getCurrentLessonStudents
  ),
  takeLatest(STOP_CURRENT_LESSON_REQUEST, stopCurrentLesson),
  takeLatest(SEND_STUDENTS_REMINDER_REQUEST, sendStudentsReminder),
  takeLatest(CHECK_ONLINE_ATTENDANCE_REQUEST, checkOnlineAttendance)
];
