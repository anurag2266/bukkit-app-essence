import { createStackNavigator, StackNavigatorConfig } from 'react-navigation';
import routes from '../routes/authRoutes';
import { auth as screens } from '../../constants/screens';

const config: StackNavigatorConfig = {
  initialRouteName: screens.login,
};

export default createStackNavigator(routes, config);
