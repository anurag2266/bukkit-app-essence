import {
  GetScheduleAction,
  GET_SCHEDULE_REQUEST,
  GetScheduleSuccessAction,
  GET_SCHEDULE_SUCCESS,
  GetScheduleFailureAction,
  GET_SCHEDULE_FAILURE,
  GetSummaryAction,
  GET_SUMMARY_REQUEST,
  GetSummarySuccessAction,
  GET_SUMMARY_SUCCESS,
  GetSummaryFailureAction,
  GET_SUMMARY_FAILURE,
  CREATE_LESSON_REQUEST,
  CreateLessonAction,
  CreateLessonSuccessAction,
  CREATE_LESSON_SUCCESS,
  CreateLessonFailureAction,
  CREATE_LESSON_FAILURE,
  CREATE_LESSON_RESET,
  GetCurrentLessonDetailsAction,
  GET_CURRENT_LESSON_DETAILS_REQUEST,
  GetCurrentLessonDetailsSuccessAction,
  GET_CURRENT_LESSON_DETAILS_SUCCESS,
  GetCurrentLessonDetailsFailureAction,
  GET_CURRENT_LESSON_DETAILS_FAILURE,
  GetCurrentLessonStudentsAction,
  GET_CURRENT_LESSON_STUDENTS_REQUEST,
  GET_CURRENT_LESSON_STUDENTS_SUCCESS,
  GetCurrentLessonStudentsSuccessAction,
  GET_CURRENT_LESSON_STUDENTS_FAILURE,
  GetCurrentLessonStudentsFailureAction,
  ResetCurrentLessonAction,
  RESET_CURRENT_LESSON,
  StopCurrentLessonAction,
  STOP_CURRENT_LESSON_REQUEST,
  StopCurrentLessonSuccessAction,
  STOP_CURRENT_LESSON_SUCCESS,
  StopCurrentLessonFailureAction,
  STOP_CURRENT_LESSON_FAILURE,
  SendStudentsReminderAction,
  SEND_STUDENTS_REMINDER_REQUEST,
  SendStudentsReminderSuccessAction,
  SEND_STUDENTS_REMINDER_SUCCESS,
  SendStudentsReminderFailureAction,
  SEND_STUDENTS_REMINDER_FAILURE,
  CheckOnlineAttendanceAction,
  CHECK_ONLINE_ATTENDANCE_REQUEST,
  CheckOnlineAttendanceSuccessAction,
  CHECK_ONLINE_ATTENDANCE_SUCCESS,
  CHECK_ONLINE_ATTENDANCE_FAILURE,
  CheckOnlineAttendanceFailureAction,
  GET_HISTORY_REQUEST,
  GetHistoryAction,
  GetHistorySuccessAction,
  GET_HISTORY_SUCCESS,
  GetHistoryFailureAction,
  GET_HISTORY_FAILURE
} from './types';
import {
  LessonsScheduleItem,
  StaffLessonsAttendanceSummary,
  LessonDetails,
  StudentAttendanceListItemDetails,
  DayLessonsDetails
} from 'constants/types';
import { LessonOnlineAttendanceCheckResult } from 'models/Attendance';

// Schedule
export const getSchedule = (): GetScheduleAction => ({
  type: GET_SCHEDULE_REQUEST
});

export const getScheduleSuccess = (
  schedule: LessonsScheduleItem[]
): GetScheduleSuccessAction => ({
  type: GET_SCHEDULE_SUCCESS,
  payload: schedule
});

export const getScheduleFailure = (error: Error): GetScheduleFailureAction => ({
  type: GET_SCHEDULE_FAILURE,
  error
});

// Summary
export const getSummary = (): GetSummaryAction => ({
  type: GET_SUMMARY_REQUEST
});

export const getSummarySuccess = (
  summary: StaffLessonsAttendanceSummary
): GetSummarySuccessAction => ({
  type: GET_SUMMARY_SUCCESS,
  payload: summary
});

export const getSummaryFailure = (error: Error): GetSummaryFailureAction => ({
  type: GET_SUMMARY_FAILURE,
  error
});

// Create lesson

export const createLesson = (lesson: any): CreateLessonAction => ({
  type: CREATE_LESSON_REQUEST,
  payload: lesson
});

export const createLessonSuccess = (): CreateLessonSuccessAction => ({
  type: CREATE_LESSON_SUCCESS
});

export const createLessonFailure = (
  error: Error
): CreateLessonFailureAction => ({
  type: CREATE_LESSON_FAILURE,
  error
});

export const createLessonReset = () => ({
  type: CREATE_LESSON_RESET
});

// Current Lesson

export const getCurrentLessonDetails = (
  lessonId: number
): GetCurrentLessonDetailsAction => ({
  type: GET_CURRENT_LESSON_DETAILS_REQUEST,
  payload: {
    lessonId
  }
});

export const getCurrentLessonDetailsSuccess = (
  details: LessonDetails
): GetCurrentLessonDetailsSuccessAction => ({
  type: GET_CURRENT_LESSON_DETAILS_SUCCESS,
  payload: details
});

export const getCurrentLessonDetailsFailure = (
  error: Error
): GetCurrentLessonDetailsFailureAction => ({
  type: GET_CURRENT_LESSON_DETAILS_FAILURE,
  error
});

export const getCurrentLessonStudents = (
  lessonId: number
): GetCurrentLessonStudentsAction => ({
  type: GET_CURRENT_LESSON_STUDENTS_REQUEST,
  payload: {
    lessonId
  }
});

export const getCurrentLessonStudentsSuccess = (
  students: StudentAttendanceListItemDetails[]
): GetCurrentLessonStudentsSuccessAction => ({
  type: GET_CURRENT_LESSON_STUDENTS_SUCCESS,
  payload: students
});

export const getCurrentLessonStudentsFailure = (
  error: Error
): GetCurrentLessonStudentsFailureAction => ({
  type: GET_CURRENT_LESSON_STUDENTS_FAILURE,
  error
});

export const resetCurrentLesson = (): ResetCurrentLessonAction => ({
  type: RESET_CURRENT_LESSON
});

export const stopCurrentLesson = (
  lessonId: number
): StopCurrentLessonAction => ({
  type: STOP_CURRENT_LESSON_REQUEST,
  payload: {
    lessonId
  }
});

export const stopCurrentLessonSuccess = (): StopCurrentLessonSuccessAction => ({
  type: STOP_CURRENT_LESSON_SUCCESS
});

export const stopCurrentLessonFailure = (
  error: Error
): StopCurrentLessonFailureAction => ({
  type: STOP_CURRENT_LESSON_FAILURE,
  error
});

export const sendStudentsReminder = (
  lessonId: number
): SendStudentsReminderAction => ({
  type: SEND_STUDENTS_REMINDER_REQUEST,
  payload: {
    lessonId
  }
});

export const sendStudentsReminderSuccess = (): SendStudentsReminderSuccessAction => ({
  type: SEND_STUDENTS_REMINDER_SUCCESS
});

export const sendStudentsReminderFailure = (
  error: Error
): SendStudentsReminderFailureAction => ({
  type: SEND_STUDENTS_REMINDER_FAILURE,
  error
});

export const checkOnlineAttendance = (
  lessonId: number
): CheckOnlineAttendanceAction => ({
  type: CHECK_ONLINE_ATTENDANCE_REQUEST,
  payload: {
    lessonId
  }
});

export const checkOnlineAttendanceSuccess = (
  lessonId: number,
  result: LessonOnlineAttendanceCheckResult
): CheckOnlineAttendanceSuccessAction => ({
  type: CHECK_ONLINE_ATTENDANCE_SUCCESS,
  payload: {
    lessonId,
    result
  }
});

export const checkOnlineAttendanceFailure = (
  error: Error
): CheckOnlineAttendanceFailureAction => ({
  type: CHECK_ONLINE_ATTENDANCE_FAILURE,
  error
});

export const getHistory = (): GetHistoryAction => ({
  type: GET_HISTORY_REQUEST
});

export const getHistorySuccess = (
  history: DayLessonsDetails[]
): GetHistorySuccessAction => ({
  type: GET_HISTORY_SUCCESS,
  payload: history
});

export const getHistoryFailure = (error: Error): GetHistoryFailureAction => ({
  type: GET_HISTORY_FAILURE,
  error
});
