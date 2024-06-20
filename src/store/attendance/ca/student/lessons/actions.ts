import {
  GetScheduleAction,
  GET_SCHEDULE_REQUEST,
  GET_SCHEDULE_SUCCESS,
  GET_SCHEDULE_FAILURE,
  GetScheduleSuccessAction,
  GetScheduleFailureAction
} from './types';
import { LessonsScheduleItem } from 'constants/types';

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
