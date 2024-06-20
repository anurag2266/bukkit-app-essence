export const LISTEN_BEACONS = 'LISTEN_BEACONS';
export const LISTEN_BEACONS_SUCCESS = 'LISTEN_BEACONS_SUCCESS';
export const LISTEN_BEACONS_FAIL = 'LISTEN_BEACONS_FAIL';
export const BEACONS_CHANGED = 'BEACONS_CHANGED';
export const STOP_BEACONS = 'STOP_BEACONS';

export function listenBeacons() {
  return {
    type: LISTEN_BEACONS,
  };
}

