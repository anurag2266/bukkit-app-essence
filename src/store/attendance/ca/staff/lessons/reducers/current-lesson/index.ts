import { combineReducers } from 'redux';
import details from './details';
import onlineAttendance from './online-attendance';
import students from './students';

export default combineReducers({
  details,
  onlineAttendance,
  students
});
