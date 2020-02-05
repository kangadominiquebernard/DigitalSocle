import React from 'react';
import { View, Image, ScrollView } from 'react-native';
import vars from '../../vars';
import { i18nString } from '../../i18n';
import style from './style';



const Dump = ({ 
  currentRoute, menuNavigateTo, toggleDrawer, navigation, disconnect, services,
}) => (
  
  <View style={style.container}>
    <View style={style.topMenu} >
    </View>
    <View >
      <ScrollView style={style.menu}>
        <View style={style.drawer}>
         
        </View>
      </ScrollView>
    </View>
  </View>
 
);

export default Dump;
