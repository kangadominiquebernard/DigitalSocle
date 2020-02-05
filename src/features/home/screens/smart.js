import React, { Component } from 'react';

import { Text, TouchableOpacity } from 'react-native';

class Smart extends Component {
  constructor(props){
    super(props);
}

  render() {
    return (
      <TouchableOpacity onPress={this.props.navigation.openDrawer()}>
      <Text>TEEST</Text>
  </TouchableOpacity>
    );
  }
}

export default Smart;
