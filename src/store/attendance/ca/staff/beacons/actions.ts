import {
  GetPersonalBeaconAction,
  GET_PERSONAL_BEACON_REQUEST,
  GetPersonalBeaconSuccessAction,
  GET_PERSONAL_BEACON_SUCCESS,
  GetPersonalBeaconFailureAction,
  GET_PERSONAL_BEACON_FAILURE
} from './types';
import { BeaconDetails } from 'constants/types';

export const getPersonalBeacon = (): GetPersonalBeaconAction => ({
  type: GET_PERSONAL_BEACON_REQUEST
});

export const getPersonalBeaconSuccess = (
  beacon: BeaconDetails
): GetPersonalBeaconSuccessAction => ({
  type: GET_PERSONAL_BEACON_SUCCESS,
  payload: beacon
});

export const getPersonalBeaconFailure = (
  error: Error
): GetPersonalBeaconFailureAction => ({
  type: GET_PERSONAL_BEACON_FAILURE,
  error
});
