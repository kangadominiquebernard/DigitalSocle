
import React from 'react';
import {createAppContainer} from "react-navigation";
import { createDrawerNavigator } from 'react-navigation-drawer';
import Home from '../features/home/screens';
import Dashboard from '../features/dashboard/screens'
import DrawerLeft from '../global/components/DrawerLeft'

const IN_APP_STACK = createDrawerNavigator(
    {
        Home: {screen: Home},
        Dashboard: {screen: Dashboard},
        
    },
    {
        initialRouteName: "Home",
        drawerPosition:  'left',
        /*backBehavior: 'initialRoute',*/
        contentOptions: {
            activeTintColor: 'green'
        },
        contentComponent: props => <DrawerLeft {...props}/>
    }
);

export default createAppContainer(IN_APP_STACK);