import { StyleSheet } from 'react-native';
import vars from '../../../global/vars';

export default StyleSheet.create({
  flex: {
    flex: 1,
  },
  flexRow: {
    flexDirection: 'row'
  },
  bgWhite: {
    backgroundColor: 'white'
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  padding: {
    paddingVertical: vars.widthUnit * 3,
    paddingHorizontal: vars.widthUnit * 4,
  },
  paddingButton: {
    paddingBottom: vars.widthUnit * 2,
  },
  textStyle: {
    fontSize: 4 * vars.widthUnit,
    fontFamily: vars.RobotoReg,
    color: '#e67b00',
  },
  buttonStyle: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#e67b00',
    borderWidth: 0.5,
    width: vars.widthUnit * 70,
    height: vars.heightUnit * 9,
    
  },
  iconStyle: {
    color: '#e67b00',
    fontSize: vars.widthUnit * 7,
    marginLeft: vars.widthUnit,
  },
});
