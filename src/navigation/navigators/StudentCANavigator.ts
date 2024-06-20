import { createStackNavigator, StackNavigatorConfig } from 'react-navigation';
import { student as screens } from '../../constants/screens';
import routes from '../routes/studentCARoutes';

const config: StackNavigatorConfig = {
  headerMode: 'none',
  initialRouteName: screens.ca.attendance
};

export default createStackNavigator(routes, config);
