import React, { Component } from 'react';
import { Icon } from 'native-base';
import { Text, TouchableOpacity } from 'react-native';

class CustomButton extends Component {
    
    render() {
      const {
        text, buttonStyle, textStyle, onPressHandler, disabled, icon, iconName, iconType, iconStyle, rounded
      } = this.props;
      return (
        <TouchableOpacity
          style={[buttonStyle, rounded ? {borderRadius: 25} : null ]}
          onPress={onPressHandler}
          activeOpacity={0.5}
          disabled={disabled}
          static
        >
          <Text style={textStyle}>{text.toUpperCase()}</Text>
          {
            icon ? <Icon type={iconType} name={iconName} size={20} style={iconStyle} /> : null
 
          }
        </TouchableOpacity>
      );
    };
};

export default CustomButton;
