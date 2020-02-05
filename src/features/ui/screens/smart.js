import React, { Component } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import CustomButton from '../../../global/components/button';
import style from './style';

class Smart extends Component {

  constructor(props){
      super(props);
  }

  render() {
    return (
        <View style={style.center}>
          <Text>---------- Custom Button -------</Text>
          <View style={[style.center, style.paddingButton]}>
          <CustomButton 
            onPressHandler={() => console.log('Button Custom')/*() => this.props.navigation.openDrawer()*/}
            disabled={false}
            text="CONNEXION"
            textStyle={style.textStyle}
            buttonStyle={style.buttonStyle}
            icon 
            iconName="share"
            iconType="Entypo"
            iconStyle={style.iconStyle}
            rounded={false}
          />
          <CustomButton 
            onPressHandler={() => console.log('Button Custom')/*() => this.props.navigation.openDrawer()*/}
            disabled={false}
            text="CONNEXION"
            textStyle={style.textStyle}
            buttonStyle={style.buttonStyle}
            icon 
            iconName="share"
            iconType="Entypo"
            iconStyle={style.iconStyle}
            rounded
          />
          <CustomButton 
            onPressHandler={() => console.log('Button Custom')/*() => this.props.navigation.openDrawer()*/}
            disabled={false}
            text="CONNEXION"
            textStyle={style.textStyle}
            buttonStyle={style.buttonStyle}
            icon={false} 
            iconName="share"
            iconType="Entypo"
            iconStyle={style.iconStyle}
            rounded
          />
       </View>
 
         </View>
      
    );
  }
}

export default Smart;
