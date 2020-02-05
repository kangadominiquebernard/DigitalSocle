import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import PublicNavigator from './PublicNavigation';

const RootNavigator = createSwitchNavigator(
  {
    Public: PublicNavigator,
    
  },
  {
    initialRouteName: 'Public',
  },
);

export default createAppContainer(RootNavigator);