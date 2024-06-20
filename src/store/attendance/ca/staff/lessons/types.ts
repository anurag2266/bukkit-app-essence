import {
  LessonsScheduleItem,
  StaffLessonsAttendanceSummary,
  LessonDetails,
  StudentAttendanceListItemDetails,
  DayLessonsDetails
} from 'constants/types';
import { LessonOnlineAttendanceCheckResult } from 'models/Attendance';

// Schedule

export const GET_SCHEDULE_REQUEST =
  '@attendance/staff/lessons/schedule/request';
export const GET_SCHEDULE_SUCCESS =
  '@attendance/staff/lessons/schedule/success';
export const GET_SCHEDULE_FAILURE =
  '@attendance/staff/lessons/schedule/failure';

export type GetScheduleAction = {
  type: typeof GET_SCHEDULE_REQUEST;
};

export type GetScheduleSuccessAction = {
  type: typeof GET_SCHEDULE_SUCCESS;
  payload: LessonsScheduleItem[];
};

export type GetScheduleFailureAction = {
  type: typeof GET_SCHEDULE_FAILURE;
  error: Error;
};

export type ScheduleAction =
  | GetScheduleAction
  | GetScheduleSuccessAction
  | GetScheduleFailureAction;

// Summary

export const GET_SUMMARY_REQUEST = '@attendance/staff/lessons/summary/request';
export const GET_SUMMARY_SUCCESS = '@attendance/staff/lessons/summary/success';
export const GET_SUMMARY_FAILURE = '@attendance/staff/lessons/summary/failure';

export type GetSummaryAction = {
  type: typeof GET_SUMMARY_REQUEST;
};

export type GetSummarySuccessAction = {
  type: typeof GET_SUMMARY_SUCCESS;
  payload: StaffLessonsAttendanceSummary;
};

export type GetSummaryFailureAction = {
  type: typeof GET_SUMMARY_FAILURE;
  error: Error;
};

export type SummaryAction =
  | GetSummaryAction
  | GetSummarySuccessAction
  | GetSummaryFailureAction;

// Create lesson

export const CREATE_LESSON_REQUEST =
  '@attendance/staff/lessons/create-lesson/request';

export const CREATE_LESSON_SUCCESS =
  '@attendance/staff/lessons/create-lesson/success';

export const CREATE_LESSON_FAILURE =
  '@attendance/staff/lessons/create-lesson/failure';

export const CREATE_LESSON_RESET =
  '@attendance/staff/lessons/create-lesson/reset';

export type CreateLessonAction = {
  type: typeof CREATE_LESSON_REQUEST;
  payload: any;
};

export type CreateLessonSuccessAction = {
  type: typeof CREATE_LESSON_SUCCESS;
};

export type CreateLessonFailureAction = {
  type: typeof CREATE_LESSON_FAILURE;
  error: Error;
};

export type CreateLessonReset = {
  type: typeof CREATE_LESSON_RESET;
};

export type LessonAction =
  | CreateLessonAction
  | CreateLessonSuccessAction
  | CreateLessonFailureAction
  | CreateLessonReset;

// Current Lesson

export const GET_CURRENT_LESSON_DETAILS_REQUEST =
  '@attendance/staff/lessons/get-current-lesson-details/request';

export const GET_CURRENT_LESSON_DETAILS_SUCCESS =
  '@attendance/staff/lessons/get-current-lesson-details/success';

export const GET_CURRENT_LESSON_DETAILS_FAILURE =
  '@attendance/staff/lessons/get-current-lesson-details/failure';

export type GetCurrentLessonDetailsAction = {
  type: typeof GET_CURRENT_LESSON_DETAILS_REQUEST;
  payload: {
    lessonId: number;
  };
};

export type GetCurrentLessonDetailsSuccessAction = {
  type: typeof GET_CURRENT_LESSON_DETAILS_SUCCESS;
  payload: LessonDetails;
};

export type GetCurrentLessonDetailsFailureAction = {
  type: typeof GET_CURRENT_LESSON_DETAILS_FAILURE;
  error: Error;
};

export const GET_CURRENT_LESSON_STUDENTS_REQUEST =
  '@attendance/staff/lessons/get-current-lesson-students/request';

export const GET_CURRENT_LESSON_STUDENTS_SUCCESS =
  '@attendance/staff/lessons/get-current-lesson-students/success';

export const GET_CURRENT_LESSON_STUDENTS_FAILURE =
  '@attendance/staff/lessons/get-current-lesson-students/failure';

export type GetCurrentLessonStudentsAction = {
  type: typeof GET_CURRENT_LESSON_STUDENTS_REQUEST;
  payload: {
    lessonId: number;
  };
};

export type GetCurrentLessonStudentsSuccessAction = {
  type: typeof GET_CURRENT_LESSON_STUDENTS_SUCCESS;
  payload: StudentAttendanceListItemDetails[];
};

export type GetCurrentLessonStudentsFailureAction = {
  type: typeof GET_CURRENT_LESSON_STUDENTS_FAILURE;
  error: Error;
};

export const RESET_CURRENT_LESSON =
  '@attendance/staff/lessons/reset-current-lesson';

export type ResetCurrentLessonAction = {
  type: typeof RESET_CURRENT_LESSON;
};

export const STOP_CURRENT_LESSON_REQUEST =
  '@attendance/staff/lessons/stop-current-lesson/request';

export const STOP_CURRENT_LESSON_SUCCESS =
  '@attendance/staff/lessons/stop-current-lesson/success';

export const STOP_CURRENT_LESSON_FAILURE =
  '@attendance/staff/lessons/stop-current-lesson/failure';

export type StopCurrentLessonAction = {
  type: typeof STOP_CURRENT_LESSON_REQUEST;
  payload: {
    lessonId: number;
  };
};

export type StopCurrentLessonSuccessAction = {
  type: typeof STOP_CURRENT_LESSON_SUCCESS;
};

export type StopCurrentLessonFailureAction = {
  type: typeof STOP_CURRENT_LESSON_FAILURE;
  error: Error;
};

export const SEND_STUDENTS_REMINDER_REQUEST =
  '@attendance/staff/lessons/send-students-reminder/request';

export const SEND_STUDENTS_REMINDER_SUCCESS =
  '@attendance/staff/lessons/send-students-reminder/success';

export const SEND_STUDENTS_REMINDER_FAILURE =
  '@attendance/staff/lessons/send-students-reminder/failure';

export type SendStudentsReminderAction = {
  type: typeof SEND_STUDENTS_REMINDER_REQUEST;
  payload: {
    lessonId: number;
  };
};

export type SendStudentsReminderSuccessAction = {
  type: typeof SEND_STUDENTS_REMINDER_SUCCESS;
};

export type SendStudentsReminderFailureAction = {
  type: typeof SEND_STUDENTS_REMINDER_FAILURE;
  error: Error;
};
export const CHECK_ONLINE_ATTENDANCE_REQUEST =
  '@attendance/staff/lessons/check-online-attendance/request';

export const CHECK_ONLINE_ATTENDANCE_SUCCESS =
  '@attendance/staff/lessons/check-online-attendance/success';

export const CHECK_ONLINE_ATTENDANCE_FAILURE =
  '@attendance/staff/lessons/check-online-attendance/failure';

export type CheckOnlineAttendanceAction = {
  type: typeof CHECK_ONLINE_ATTENDANCE_REQUEST;
  payload: {
    lessonId: number;
  };
};

export type CheckOnlineAttendanceSuccessAction = {
  type: typeof CHECK_ONLINE_ATTENDANCE_SUCCESS;
  payload: {
    lessonId: number;
    result: LessonOnlineAttendanceCheckResult;
  };
};

export type CheckOnlineAttendanceFailureAction = {
  type: typeof CHECK_ONLINE_ATTENDANCE_FAILURE;
  error: Error;
};

export type CurrentLessonAction =
  | GetCurrentLessonDetailsAction
  | GetCurrentLessonDetailsSuccessAction
  | GetCurrentLessonDetailsFailureAction
  | GetCurrentLessonStudentsAction
  | GetCurrentLessonStudentsSuccessAction
  | GetCurrentLessonStudentsFailureAction
  | ResetCurrentLessonAction
  | StopCurrentLessonAction
  | StopCurrentLessonSuccessAction
  | StopCurrentLessonFailureAction
  | SendStudentsReminderAction
  | SendStudentsReminderSuccessAction
  | SendStudentsReminderFailureAction
  | CheckOnlineAttendanceAction
  | CheckOnlineAttendanceSuccessAction
  | CheckOnlineAttendanceFailureAction;

// History

export const GET_HISTORY_REQUEST = '@attendance/staff/lessons/history/request';
export const GET_HISTORY_SUCCESS = '@attendance/staff/lessons/history/success';
export const GET_HISTORY_FAILURE = '@attendance/staff/lessons/history/failure';

export type GetHistoryAction = {
  type: typeof GET_HISTORY_REQUEST;
};

export type GetHistorySuccessAction = {
  type: typeof GET_HISTORY_SUCCESS;
  payload: DayLessonsDetails[];
};

export type GetHistoryFailureAction = {
  type: typeof GET_HISTORY_FAILURE;
  error: Error;
};

export type HistoryAction =
  | GetHistoryAction
  | GetHistorySuccessAction
  | GetHistoryFailureAction;
