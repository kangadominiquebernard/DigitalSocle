import React, { Component } from 'react';
import { Alert } from 'react-native';
import { i18nString } from '../../i18n';
import Dump from './dump';

class Smart extends Component {

  constructor(props) {
    super(props);
    //this.disconnect = this.disconnect.bind(this);
  }

  disconnect() {

    text1 = i18nString('global.components.drawerLeft.alert_confirmation_title');
    text2 = i18nString('global.components.drawerLeft.alert_logout_body');

    Alert.alert(
      i18nString('global.components.drawerLeft.alert_confirmation_title'),
      i18nString('global.components.drawerLeft.alert_logout_body'),
      [
        {text: i18nString('btn.btn_cancel'), onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: i18nString('btn.btn_logout'), onPress: this.props.disconnect}
      ],
      { cancelable: false }
    );
  }

  render() {
    return (
      <Dump
        {...this.props}
        //disconnect={this.disconnect}
      />
    );
  };
};

export default Smart;
