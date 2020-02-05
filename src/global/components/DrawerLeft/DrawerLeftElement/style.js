import { StyleSheet, Platform } from 'react-native';
import vars from '../../../vars';

export default StyleSheet.create({

  container: {
    minHeight: vars.heightUnit * 7,
    flexDirection: 'row',
    ...Platform.select({
      ios: {
        borderBottomWidth: 1
      },
      android: {
        borderBottomWidth: 0.3,
      }
    }),
    borderBottomColor: '#c6c6c6',
  },
  backgroundSelected: {
    backgroundColor: '#ffffff',
  },
  background: {
    backgroundColor: '#fbfbfb',
  },
  iconBlock: {
    width: '20%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  iconSize: {
    resizeMode: 'stretch',
    height: vars.widthUnit * 8,
    width: vars.widthUnit * 8,
  },
  title: {
    width: '60%',
    justifyContent: 'center',
  },
  arrowBlock: {
    width: '10%',
  },
  arrowSize: {
    resizeMode: 'stretch',
    height: vars.widthUnit * 2,
    width: Number(vars.widthUnit) * 1
  },
  borderTop: {
    ...Platform.select({
      ios: {
        borderTopWidth: 2,
      },
      android: {
        borderTopWidth: 1.5,
      }
    }),
    borderTopColor: '#e67b00',
  },
  borderBot: {
    ...Platform.select({
      ios: {
        borderBottomWidth: 2,
      },
      android: {
        borderBottomWidth: 1.5,
      }
    }),
    borderBottomColor: '#e67b00'
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconWrapper: {
    justifyContent: 'center'
  },
  textTitleSelected: {
    color: '#e67b00',
    fontFamily: vars.RobotoReg,
    fontSize: vars.widthUnit * 3.5
  },
  textTitle: {
    color: '#622800',
    fontFamily: vars.RobotoReg,
    fontSize: vars.widthUnit * 3.5
  },
  titleContainer: {
    width: '80%',
  },
  notifContainer: {
    width: '20%'
  },
  cadreNotif: {
    backgroundColor: '#e67b00',
    width: '60%',
    alignItems: 'center',
    borderRadius: vars.widthUnit * 2.5
  },
  notif: {
    width: '20%',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  notifText: {
    color: '#ffffff'
  }


});
