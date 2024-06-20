import { createStackNavigator, StackNavigatorConfig } from 'react-navigation';
import { student as screens } from '../../constants/screens';
import routes from '../routes/studentDARoutes';

const config: StackNavigatorConfig = {
  headerMode: 'none',
  initialRouteName: screens.da.attendance
};

export default createStackNavigator(routes, config);
