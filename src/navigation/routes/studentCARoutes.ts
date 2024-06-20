import { student as screens } from '../../constants/screens';
import {
  Attendance,
  AttendanceDetails,
  ChooseClass
} from '../../screens/student/ca';

const routes = {
  [screens.ca.attendance]: Attendance,
  [screens.ca.attendanceDetails]: AttendanceDetails,
  [screens.ca.chooseClass]: ChooseClass
};

export default routes;
