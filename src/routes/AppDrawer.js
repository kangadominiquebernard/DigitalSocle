import {createDrawerNavigator} from 'react-navigation-stack';

import LoginScreen from '_scenes/login';

const AuthNavigatorConfig = {
  initialRouteName: 'Login',
  header: null,
  headerMode: 'none',
};

const RouteConfigs = {
  Login:LoginScreen,
};

const AuthNavigator = createDrawerNavigator(RouteConfigs, AuthNavigatorConfig);

export default AuthNavigator;