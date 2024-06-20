import { BeaconDetails, LessonDetails } from 'constants/types';

// Beacons

export const GET_ALL_BEACONS_REQUEST =
  '@store/attendance/beacons/get-all-beacons/request';
export const GET_ALL_BEACONS_SUCCESS =
  '@store/attendance/beacons/get-all-beacons/success';
export const GET_ALL_BEACONS_FAILURE =
  '@store/attendance/beacons/get-all-beacons/failure';

export type GetAllBeaconsAction = {
  type: typeof GET_ALL_BEACONS_REQUEST;
};

export type GetAllBeaconsSuccessAction = {
  type: typeof GET_ALL_BEACONS_SUCCESS;
  payload: BeaconDetails[];
};

export type GetAllBeaconsFailureAction = {
  type: typeof GET_ALL_BEACONS_FAILURE;
  error: Error;
};

export type AllBeaconsAction =
  | GetAllBeaconsAction
  | GetAllBeaconsSuccessAction
  | GetAllBeaconsFailureAction;

export const UPDATE_DISCOVERED_BEACONS =
  '@store/attendance/beacons/update-discovered-beacons';

export type UpdateDiscoveredBeaconsAction = {
  type: typeof UPDATE_DISCOVERED_BEACONS;
  // IDs of discovered beacons
  payload: number[];
};

// Lessons

export const GET_LESSONS_REQUEST =
  '@store/attendance/beacons/get-lessons/request';
export const GET_LESSONS_SUCCESS =
  '@store/attendance/beacons/get-lessons/success';
export const GET_LESSONS_FAILURE =
  '@store/attendance/beacons/get-lessons/failure';

export type GetLessonsAction = {
  type: typeof GET_LESSONS_REQUEST;
  // discovered beacons ids
  payload: number[];
};

export type GetLessonsSuccessAction = {
  type: typeof GET_LESSONS_SUCCESS;
  payload: LessonDetails[];
};

export type GetLessonsFailureAction = {
  type: typeof GET_LESSONS_FAILURE;
  error: Error;
};

export type LessonsAction =
  | GetLessonsAction
  | GetLessonsSuccessAction
  | GetLessonsFailureAction;
