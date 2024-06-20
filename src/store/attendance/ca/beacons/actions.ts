import {
  GetAllBeaconsAction,
  GET_ALL_BEACONS_REQUEST,
  GetAllBeaconsSuccessAction,
  GET_ALL_BEACONS_SUCCESS,
  GetAllBeaconsFailureAction,
  GET_ALL_BEACONS_FAILURE,
  UpdateDiscoveredBeaconsAction,
  UPDATE_DISCOVERED_BEACONS,
  GetLessonsAction,
  GET_LESSONS_REQUEST,
  GetLessonsSuccessAction,
  GET_LESSONS_SUCCESS,
  GetLessonsFailureAction,
  GET_LESSONS_FAILURE
} from './types';
import { BeaconDetails, LessonDetails } from 'constants/types';

// Beacons

export const getAllBeacons = (): GetAllBeaconsAction => ({
  type: GET_ALL_BEACONS_REQUEST
});

export const getAllBeaconsSuccess = (
  beacons: BeaconDetails[]
): GetAllBeaconsSuccessAction => ({
  type: GET_ALL_BEACONS_SUCCESS,
  payload: beacons
});

export const getAllBeaconsFailure = (
  error: Error
): GetAllBeaconsFailureAction => ({
  type: GET_ALL_BEACONS_FAILURE,
  error
});

export const updateDiscoveredBeacons = (
  ids: number[]
): UpdateDiscoveredBeaconsAction => ({
  type: UPDATE_DISCOVERED_BEACONS,
  payload: ids
});

// Lessons (beacons)

export const getLessons = (ids: number[]): GetLessonsAction => ({
  type: GET_LESSONS_REQUEST,
  payload: ids
});

export const getLessonsSuccess = (
  lessons: LessonDetails[]
): GetLessonsSuccessAction => ({
  type: GET_LESSONS_SUCCESS,
  payload: lessons
});

export const getLessonsFailure = (error: Error): GetLessonsFailureAction => ({
  type: GET_LESSONS_FAILURE,
  error
});
