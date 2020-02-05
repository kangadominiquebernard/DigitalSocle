import {createStackNavigator} from 'react-navigation-stack';

import UIScreen from '../../features/ui/screens';

const PublicRoute = {
  UIScreen : UIScreen,
  
};

const PublicNavigatorConfig = {
  initialRouteName: 'UIScreen',
  header: null,
  headerMode: 'none',
};



const PublicStack = createStackNavigator(PublicRoute, PublicNavigatorConfig);

export default PublicStack;