import { LessonsScheduleItem } from 'constants/types';

export const GET_SCHEDULE_REQUEST =
  '@attendance/student/lessons/schedule/request';
export const GET_SCHEDULE_SUCCESS =
  '@attendance/student/lessons/schedule/success';
export const GET_SCHEDULE_FAILURE =
  '@attendance/student/lessons/schedule/failure';

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
