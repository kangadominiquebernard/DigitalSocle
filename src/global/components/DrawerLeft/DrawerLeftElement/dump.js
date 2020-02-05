import React from 'react';
import { Text, View, Image, Alert } from 'react-native';
import style from './style';
import { i18nString } from '../../../../global/i18n';



const Dump = ({
  icon,
  title,
  selected,
  navigate,
  notifications,
  disabled,
  hidden
}) => (
  hidden ?
    <View />
    :
    <TouchableOpacity
      style={[
        style.container, {opacity: disabled ? 0.5 : 1}, selected ? style.backgroundSelected : style.background
      ]}
      activeOpacity={.3}
      static
    >
      <View style={[style.iconBlock]}>
        <View style={[style.iconWrapper, selected && style.borderBot, selected && style.borderTop]}>
          <View style={style.center}>
            <Image style={style.iconSize} source={icon} />
          </View>
        </View>
      </View>
      <View style={[style.title]}>
        <Text style={[selected ? style.textTitleSelected : style.textTitle]}>{title}</Text>
      </View>
      <View style={style.notif}>
        {
          notifications &&
          <View style={style.cadreNotif}>
            <Text style={style.notifText}>{notifications}</Text>
          </View>
        }
      </View>

      <View style={[style.arrowBlock, style.center]}>
        <Image style={style.arrowSize} source={images.icons.iconArrowRight} />
      </View>
    </TouchableOpacity>
);

export default Dump;
