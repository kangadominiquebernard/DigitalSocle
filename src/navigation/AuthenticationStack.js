import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from "../features/ui/screens";
import PUBLIC_STACK from "./featuresStacks/PublicStack";
import FORGOT_PASSWORD_STACK from "./featuresStacks/ForgotPasswordStack";


const OUT_APP_STACK = createStackNavigator(
    {
        Home: {
            screen: LoginScreen,
        },
        // Registration: {
        //     screen: REGISTRATION_STACK,
        // },
        // ForgotPassword:{
        //     screen: FORGOT_PASSWORD_STACK,
        // },
        PublicStack: PUBLIC_STACK,
    },
    {
        initialRouteName: 'Home',
        headerMode: "none"
    }
);

export default createAppContainer(OUT_APP_STACK);