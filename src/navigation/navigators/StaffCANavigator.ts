import { createStackNavigator, StackNavigatorConfig } from 'react-navigation';
import { staff as screens } from '../../constants/screens';
import routes from '../routes/staffCARoutes';

const config: StackNavigatorConfig = {
  headerMode: 'none',
  initialRouteName: screens.ca.attendance
};

export default createStackNavigator(routes, config);
