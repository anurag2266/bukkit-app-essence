import { Platform } from 'react-native';
// eslint-disable-next-line
import BeaconBroadcast from 'react-native-ibeacon-simulator';
import { takeLatest, call, put, takeEvery } from 'redux-saga/effects';
import * as Actions from './actions';
import {
  GET_PERSONAL_BEACON_REQUEST,
  GET_PERSONAL_BEACON_SUCCESS,
  GetPersonalBeaconSuccessAction
} from './types';
import Attendance from 'models/Attendance';
import { USER_LOGIN, UserLoginAction } from 'store/common/types';
import { StaffFullRole } from 'constants/types';

export function* getPersonalBeacon() {
  const attendance = yield* Attendance.getInstance();

  try {
    const response = yield call(attendance.getStaffPersonalVirtualBeacon);
    if (response.success) {
      yield put(Actions.getPersonalBeaconSuccess(response.data));
    } else {
      yield put(Actions.getPersonalBeaconFailure(response.error));
    }
  } catch (error) {
    yield put(Actions.getPersonalBeaconFailure(error));
  }
}

export function* handleUserLogin(action: UserLoginAction) {
  // to run only for CA staff
  if (action.payload.fullRole === StaffFullRole.CA) {
    yield put(Actions.getPersonalBeacon());
  }
}

export function* startPersonalBeaconAdvertising(
  action: GetPersonalBeaconSuccessAction
) {
  try {
    const { payload: beacon } = action;
    if (Platform.OS === 'android') {
      // @ts-ignore
      yield call(BeaconBroadcast.checkTransmissionSupported);
    }
    yield call(BeaconBroadcast.stopAdvertisingBeacon);
    yield call(
      BeaconBroadcast.startAdvertisingBeaconWithString,
      beacon.uuid,
      beacon.name || 'vb',
      beacon.major,
      beacon.minor
    );
  } catch (error) {
    // eslint-disable-next-line
    console.log('Failed to start advertising beacon', error);
  }
}

export default [
  takeLatest(GET_PERSONAL_BEACON_REQUEST, getPersonalBeacon),
  takeLatest(USER_LOGIN, handleUserLogin),
  takeEvery(GET_PERSONAL_BEACON_SUCCESS, startPersonalBeaconAdvertising)
];
