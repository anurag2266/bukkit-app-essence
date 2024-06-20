import React from 'react';
import {
  View,
  ImageBackground,
  GestureResponderEvent,
  ViewStyle,
  StyleProp,
  TextStyle,
} from 'react-native';
import Text, { TextVariant } from '../Text';
import TouchableImage from '../TouchableImage';

import styles from './styles';
import { images } from '../../constants';
import colors from '../../styles/colors';

type SideButtonIcon = 'back' | 'close' | 'questionMark' | 'backSignin'|'closeLargeIcon';

type SideButton = {
  icon?: SideButtonIcon;
  iconColor?: any;
  iconStyle?:StyleProp<ViewStyle>;
  text?:string;
  onPress?: (event: GestureResponderEvent) => void;
};

type TitleBarProps = {
  style?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
  title: string;
  left?: SideButton;
  right?: SideButton;
};

const TitleBar = ({
  style,
  titleStyle,
  contentContainerStyle,
  title,
  left = {},
  right = {}
}: TitleBarProps) => {
  const leftButtonImageStyle = [
    styles.sideButtonImage,
    left.iconColor ? { tintColor: left.iconColor } : {tintColor: colors.greyDark}
  ];
  const rightButtonImageStyle = [
    styles.sideButtonImage,
    right.iconColor ? { tintColor: right.iconColor } : {tintColor: colors.greyDark}
  ];

  const leftButtonContainerStyle = [
    left.iconStyle ?  left.iconStyle  : {}
  ];
  return (
    <View
      //source={images.topNavBar}
      style={[styles.container, style]}
      //resizeMode="stretch"
    >
      <View style={[styles.contentContainer, contentContainerStyle]}>
        <TouchableImage
          style={[styles.sideButton, styles.sideButtonLeft,leftButtonContainerStyle]}
          source={left.icon && images[left.icon]}
          imageStyle={leftButtonImageStyle}
          onPress={left.onPress}
        />

        <View style={styles.middle}>
          <Text
            style={[styles.title, titleStyle ]}
            variant={TextVariant.Heading1Grey}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {title}
          </Text>
        </View>
        {right.text?(
          <Text>Hello</Text>
        ):(
        <TouchableImage
          style={[styles.sideButton, styles.sideButtonRight]}
          source={right.icon && images[right.icon]}
          imageStyle={rightButtonImageStyle}
          onPress={right.onPress}
        />)}
      </View>
    </View>
  );
};

export default TitleBar;
