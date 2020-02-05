import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import IN_APP_STACK from './DrawerStack';
import OUT_APP_STACK from './AuthenticationStack';


const RootNavigator = createSwitchNavigator(
  {
   
    OutApp: OUT_APP_STACK,

    InApp: IN_APP_STACK,

  },
  {
    initialRouteName: 'OutApp',
  },
);

export default createAppContainer(RootNavigator);