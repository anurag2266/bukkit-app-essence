import { BeaconDetails } from 'constants/types';

export const GET_PERSONAL_BEACON_REQUEST =
  '@attendance/ca/staff/beacons/get-personal-beacon/request';
export const GET_PERSONAL_BEACON_SUCCESS =
  '@attendance/ca/staff/beacons/get-personal-beacon/success';
export const GET_PERSONAL_BEACON_FAILURE =
  '@attendance/ca/staff/beacons/get-personal-beacon/failure';

export type GetPersonalBeaconAction = {
  type: typeof GET_PERSONAL_BEACON_REQUEST;
};

export type GetPersonalBeaconSuccessAction = {
  type: typeof GET_PERSONAL_BEACON_SUCCESS;
  payload: BeaconDetails;
};

export type GetPersonalBeaconFailureAction = {
  type: typeof GET_PERSONAL_BEACON_FAILURE;
  error: Error;
};

export type PersonalBeaconAction =
  | GetPersonalBeaconAction
  | GetPersonalBeaconSuccessAction
  | GetPersonalBeaconFailureAction;
