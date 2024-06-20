import { createAppContainer } from 'react-navigation';
import Auth from './navigators/AuthNavigator';
import StudentCA from './navigators/StudentCANavigator';
import StudentDA from './navigators/StudentDANavigator';
import StaffCA from './navigators/StaffCANavigator';
import StaffDA from './navigators/StaffDANavigator';
import Login from './navigators/LoginNavigator';

const AuthNavigator = createAppContainer(Auth);
const StudentCANavigator = createAppContainer(StudentCA);
const StudentDANavigator = createAppContainer(StudentDA);
const StaffCANavigator = createAppContainer(StaffCA);
const StaffDANavigator = createAppContainer(StaffDA);
const LoginNavigator = createAppContainer(Login);

export {
  AuthNavigator,
  StudentCANavigator,
  StudentDANavigator,
  StaffCANavigator,
  StaffDANavigator,
  LoginNavigator,
};
