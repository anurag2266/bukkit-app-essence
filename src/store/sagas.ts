import { all } from 'redux-saga/effects';

export function* rootSaga() {
  yield all([
    ...require('./attendance/ca/courses/sagas').default,
    ...require('./attendance/ca/beacons/sagas').default,
    ...require('./attendance/ca/staff/approvals/sagas').default,
    ...require('./attendance/ca/staff/beacons/sagas').default,
    ...require('./attendance/ca/staff/lessons/sagas').default,
    ...require('./attendance/ca/student/lessons/sagas').default
  ]);
}
