import { Dimensions, Platform } from 'react-native';

export default {
  isIos: Platform.OS === 'ios',
  isAndroid: Platform.OS === 'android',

  WIDTH: Dimensions.get('window').width,
  HEIGHT: Dimensions.get('window').height,

  widthUnit: Dimensions.get('window').width / 100,
  heightUnit: Dimensions.get('window').height / 100,

  RobotoBold: 'Roboto-Bold',
  RobotoMed: 'Roboto-Medium',
  RobotoReg: 'Roboto-Regular',
  RobotoLight: 'Roboto-Light',

  mainColor: '#622800',

 
};
