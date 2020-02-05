import { StyleSheet } from 'react-native';
import vars from 'global/vars';

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
});
