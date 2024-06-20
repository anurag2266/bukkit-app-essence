import { createStackNavigator, StackNavigatorConfig } from 'react-navigation';
import { staff as screens } from '../../constants/screens';
import { auth as screensAuth } from '../../constants/screens';
import routes from '../routes/staffDARoutes';

const config: StackNavigatorConfig = {
  headerMode: 'none',
  //initialRouteName: screensAuth.loginOptions
   initialRouteName: screens.da.appSettings
};

export default createStackNavigator(routes, config);