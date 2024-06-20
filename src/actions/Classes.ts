export const GET_CLASSES = 'GET_CLASSES';
export const GET_CLASSES_SUCCESS = 'GET_CLASSES_SUCCESS';
export const GET_CLASSES_FAIL = 'GET_CLASSES_FAIL';

export const CHECKIN = 'CHECKIN';
export const CHECKIN_SUCCESS = 'CHECKIN_SUCCESS';
export const CHECKIN_FAIL = 'CHECKIN_FAIL';

export const CHECKOUT = 'CHECKOUT';
export const CHECKOUT_SUCCESS = 'CHECKOUT_SUCCESS';
export const CHECKOUT_FAIL = 'CHECKOUT_FAIL';

export const REPLACE_CLASS = 'REPLACE_CLASS';
export const REPLACE_CLASS_SUCCESS = 'REPLACE_CLASS_SUCCESS';
export const REPLACE_CLASS_FAIL = 'REPLACE_CLASS_FAIL';

export function getClasses(beaconIds: number[]) {
  return {
    type: GET_CLASSES,
    beaconIds,
  };
}
export function checkin(classId: number, faceToken: number) {
  return {
    type: CHECKIN,
    classId,
    faceToken,
  };
}

export function checkout(attendanceId: number) {
  return {
    type: CHECKOUT,
    attendanceId,
  };
}

export function replaceClass(data: any) {
  return {
    type: REPLACE_CLASS,
    data,
  };
}