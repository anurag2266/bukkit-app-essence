import { takeEvery, put, call, take } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { Platform, DeviceEventEmitter } from 'react-native';
import BeaconsManager from 'react-native-beacons-manager';
import { Attendance } from '../models';
import * as ACTIONS from '../actions';
import { BeaconDetails } from 'constants/types';

function* getBeaconsByCollegeId(action: any) {
  try {
    const model = yield Attendance.getInstance();
    const data = yield model.getBeaconsByCollegeId();

    const method =
      Platform.OS === 'ios' ? listenBeaconsIOS : listenBeaconsAndroid;

    const channel = yield call(method, data.data);
    yield put({ type: ACTIONS.LISTEN_BEACONS_SUCCESS });

    while (true) {
      const action = yield take(channel);
      yield put(action);
    }
  } catch (error) {
    yield put({ type: ACTIONS.LISTEN_BEACONS_FAIL, error });
  }
}

function* listenBeaconsIOS(beacons: BeaconDetails[]) {
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

  yield put({ type: ACTIONS.LISTEN_BEACONS_SUCCESS });

  return eventChannel(emitter => {
    // @ts-ignore
    // see https://github.com/MacKentoch/react-native-beacons-manager/issues/133#issuecomment-502964746
    BeaconsManager.BeaconsEventEmitter.addListener(
      'beaconsDidRange',
      ({ beacons: rangedBeacons }: any) => {
        const nextBeacons = beacons.filter(beacon =>
          rangedBeacons.find(
            (rb: any) =>
              rb.uuid.toLowerCase() === beacon.uuid &&
              rb.major === beacon.major &&
              rb.minor === beacon.minor
          )
        );
        return emitter({ type: ACTIONS.BEACONS_CHANGED, payload: nextBeacons });
      }
    );
    return () => {
      // @todo: unsubscribe
    };
  });
}

function* listenBeaconsAndroid(beacons: BeaconDetails[]) {
  BeaconsManager.detectIBeacons();

  yield call(BeaconsManager.startRangingBeaconsInRegion, 'REGION1');

  return eventChannel(emitter => {
    DeviceEventEmitter.addListener(
      'beaconsDidRange',
      ({ beacons: rangedBeacons }) => {
        const nextBeacons = beacons.filter(beacon =>
          rangedBeacons.find(
            (rb: any) =>
              rb.uuid === beacon.uuid &&
              rb.major === beacon.major &&
              rb.minor === beacon.minor
          )
        );

        return emitter({
          type: ACTIONS.BEACONS_CHANGED,
          payload: nextBeacons
        });
      }
    );
    return () => {
      // @todo: unsubscribe
    };
  });
}
/*
 * binds actions to generators
 */
export function* beaconsSaga() {
  yield takeEvery(ACTIONS.LISTEN_BEACONS, getBeaconsByCollegeId);
}
