import Attendance from '../../models/Attendance';
import { createFetcher } from '../../modules/fetcher';

export const StaffStudentsTodayAttendanceFetcher = createFetcher({
  fetch: token => new Attendance(token).getStaffStudentsTodayAttendance
});
