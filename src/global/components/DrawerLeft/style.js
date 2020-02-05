import { StyleSheet } from 'react-native';
import vars from '../../vars';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: vars.widthUnit * 83.3
  },
  topMenu: {
    height: '25%',
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#c6c6c6'
  },
  menu: {
    height: '70%',
  },
  logo: {
    resizeMode: 'stretch',
    width: '100%',
    height: '100%'
  }


});
