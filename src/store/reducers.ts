import { combineReducers } from 'redux';
import {
  ApprovalList,
  Attendance,
  Auth,
  Beacons,
  Classes,
  ClassUsers,
  FaceRecognition,
  Snapshots,
  User
} from 'reducers';
import attendanceCaCourses from './attendance/ca/courses/reducer';
import attendanceCaBeacons from './attendance/ca/beacons/reducers';
import attendanceCaStaffApprovals from './attendance/ca/staff/approvals/reducers';
import attendanceCaStaffLessons from './attendance/ca/staff/lessons/reducers';
import attendanceCaStudentLessons from './attendance/ca/student/lessons/reducers';
import attendanceCaStaffBeacons from './attendance/ca/staff/beacons/reducers';

// @ts-ignore
export const rootReducer = combineReducers({
  attendance: combineReducers({
    ca: combineReducers({
      beacons: attendanceCaBeacons,
      courses: attendanceCaCourses,
      staff: combineReducers({
        approvals: attendanceCaStaffApprovals,
        lessons: attendanceCaStaffLessons,
        beacons: attendanceCaStaffBeacons
      }),
      student: combineReducers({
        lessons: attendanceCaStudentLessons
      })
    })
  }),
  // legacy reducers
  ApprovalList,
  Attendance,
  Auth,
  Beacons,
  Classes,
  ClassUsers,
  FaceRecognition,
  Snapshots,
  User
});
