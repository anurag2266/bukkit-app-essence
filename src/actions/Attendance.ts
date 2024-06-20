export const GET_ATTENDANCE = 'GET_ATTENDANCE';
export const GET_ATTENDANCE_SUCCESS = 'GET_ATTENDANCE_SUCCESS';
export const GET_ATTENDANCE_FAIL = 'GET_ATTENDANCE_FAIL';

export const GET_ATTENDANCE_BY_CLASS = 'GET_ATTENDANCE_BY_CLASS';
export const GET_ATTENDANCE_BY_CLASS_SUCCESS =
  'GET_ATTENDANCE_BY_CLASS_SUCCESS';
export const GET_ATTENDANCE_BY_CLASS_FAIL = 'GET_ATTENDANCE_BY_CLASS_FAIL';

export function getAttendance() {
  return {
    type: GET_ATTENDANCE
  };
}

export function getAttendanceByClass(classId: number) {
  return {
    type: GET_ATTENDANCE_BY_CLASS
  };
}
