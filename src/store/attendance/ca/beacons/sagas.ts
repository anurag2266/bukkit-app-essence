import { call, takeLatest, put, select, take } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import {
  GET_ALL_BEACONS_REQUEST,
  GET_ALL_BEACONS_SUCCESS,
  UPDATE_DISCOVERED_BEACONS,
  UpdateDiscoveredBeaconsAction,
  GET_LESSONS_REQUEST,
  GetLessonsAction
} from './types';
import * as Actions from './actions';
import Attendance from 'models/Attendance';
import { Platform, DeviceEventEmitter } from 'react-native';
import { USER_LOGIN, UserLoginAction } from 'store/common/types';
import { StudentFullRole, StaffFullRole, BeaconDetails } from 'constants/types';
import BeaconsManager from 'react-native-beacons-manager';
import { AppState } from 'store';
import isEqual from 'lodash/isEqual';

type BeaconInfo = {
  uuid: string;
  major: number;
  minor: number;
};
type BeaconsDidChangeEvent = {
  beacons: BeaconInfo[];
};
function watchBeaconsIOS(beacons: BeaconDetails[]) {
  beacons.forEach(({ id, uuid, major, minor }) => {
    const region = {
      identifier: String(id),
      uuid,
      major,
      minor
    };
    BeaconsManager.requestWhenInUseAuthorization();
    BeaconsManager.startMonitoringForRegion(region);
    BeaconsManager.startRangingBeaconsInRegion(region);
    BeaconsManager.startUpdatingLocation();
  });

  return eventChannel(emitter => {
    // @ts-ignore
    // see https://github.com/MacKentoch/react-native-beacons-manager/issues/133#issuecomment-502964746
    const subscription = BeaconsManager.BeaconsEventEmitter.addListener(
      'beaconsDidRange',
      (data: BeaconsDidChangeEvent) => emitter(data.beacons)
    );

    return () => {
      // @ts-ignore
      BeaconsManager.BeaconsEventEmitter.removeListener(
        'beaconsDidChange',
        subscription.listener
      );
    };
  });
}

function* watchBeaconsAndroid() {
  BeaconsManager.detectIBeacons();

  yield call(BeaconsManager.startRangingBeaconsInRegion, 'REGION1');

  // @ts-ignore
  return eventChannel(emitter => {
    const unsubscribe = DeviceEventEmitter.addListener(
      'beaconsDidRange',
      (data: BeaconsDidChangeEvent) => emitter(data.beacons)
    );

    return unsubscribe;
  });
}

function* watchBeacons() {
  const state: AppState = yield select();
  const allBeacons = state.attendance.ca.beacons.all.data;

  const channel = yield call(
    Platform.OS === 'ios' ? watchBeaconsIOS : watchBeaconsAndroid,
    allBeacons
  );

  while (true) {
    const discoveredBeacons: BeaconInfo[] = yield take(channel);
    const ids = allBeacons
      .filter((beacon: BeaconDetails) =>
        discoveredBeacons.find(
          db =>
            db.uuid.toLowerCase() === beacon.uuid &&
            db.major === beacon.major &&
            db.minor === beacon.minor
        )
      )
      .map((beacon: BeaconDetails) => beacon.id)
      .sort((a: number, b: number) => a - b);

    yield put(Actions.updateDiscoveredBeacons(ids));
  }
}

export function* getAllBeacons() {
  try {
    const attendance = yield* Attendance.getInstance();
    const response = yield call(attendance.getBeaconsByCollegeId);

    if (response.success) {
      yield put(Actions.getAllBeaconsSuccess(response.data));
    } else {
      yield put(Actions.getAllBeaconsFailure(response.error));
    }
  } catch (error) {
    yield put(Actions.getAllBeaconsFailure(error));
  }
}

export function* handleUpdateDiscoveredBeacons(
  action: UpdateDiscoveredBeaconsAction
) {
  const nextBeaconsIds = action.payload;

  const state: AppState = yield select();
  const currentBeaconsIds = state.attendance.ca.beacons.lessons.beaconIds;

  if (!isEqual(nextBeaconsIds, currentBeaconsIds)) {
    yield put(Actions.getLessons(nextBeaconsIds));
  }
}

export function* getLessons(action: GetLessonsAction) {
  const ids = action.payload;
  try {
    if (!ids.length) {
      yield put(Actions.getLessonsSuccess([]));
    } else {
      const attendance = yield* Attendance.getInstance();
      const response = yield call(attendance.getLessonsByBeaconIds, ids);

      if (response.success) {
        yield put(Actions.getLessonsSuccess(response.data));
      } else {
        yield put(Actions.getLessonsFailure(response.error));
      }
    }
  } catch (error) {
    yield put(Actions.getLessonsFailure(error));
  }
}

export function* handleUserLogin(action: UserLoginAction) {
  const { fullRole } = action.payload;
  const isRoleSupported = [StudentFullRole.CA, StaffFullRole.CA].includes(
    fullRole
  );

  if (isRoleSupported) {
    yield put(Actions.getAllBeacons());
  }
}

export default [
  takeLatest(GET_ALL_BEACONS_REQUEST, getAllBeacons),
  takeLatest(GET_ALL_BEACONS_SUCCESS, watchBeacons),
  takeLatest(USER_LOGIN, handleUserLogin),
  takeLatest(UPDATE_DISCOVERED_BEACONS, handleUpdateDiscoveredBeacons),
  takeLatest(GET_LESSONS_REQUEST, getLessons)
];
