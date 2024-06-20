import { student as screens } from '../../constants/screens';
import {
  Attendance,
  AttendanceDetails,
  ChooseHotspot,
} from '../../screens/student/da';

const routes = {
  [screens.da.attendance]: Attendance,
  [screens.da.attendanceDetails]: AttendanceDetails,
  [screens.da.chooseHotspot]: ChooseHotspot
};

export default routes;
