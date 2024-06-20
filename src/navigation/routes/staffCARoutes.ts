import { staff as screens } from '../../constants/screens';
import {
  Attendance,
  ConfigureClass,
  NewLesson,
  LessonDetail,
  Approvals,
  ApprovalsByCourse,
  AttendanceApproval,
  StudentAttendance
} from '../../screens/staff/ca';

const routes = {
  [screens.ca.attendance]: Attendance,
  [screens.ca.configureClass]: ConfigureClass,
  [screens.ca.newLesson]: NewLesson,
  [screens.ca.lessonDetail]: LessonDetail,
  [screens.ca.approvals]: Approvals,
  [screens.ca.approvalsByCourse]: ApprovalsByCourse,
  [screens.ca.attendanceApproval]: AttendanceApproval,
  [screens.ca.studentAttendance]: StudentAttendance
};

export default routes;
