/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TextStyle
} from 'react-native';
import Text, { TextVariant } from '../Text';
import colors from '../../styles/colors';
import textStyles from '../../styles/textStyles';

type AlertButtonProps = {
  title?: string;
  titleStyle?: StyleProp<TextStyle>;
  titleColor?: string;
  style?: StyleProp<ViewStyle>;
  onPress?: (param?: any) => void;
};

const AlertButton = ({
  title,
  titleStyle,
  titleColor = colors.greyDark,
  style,
  onPress
}: AlertButtonProps) => {
  const containerStyle: StyleProp<ViewStyle> = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  };

  const textStyle: StyleProp<TextStyle> = {
    ...textStyles[TextVariant.Heading4GreyDarkRegular],
    color: titleColor,
    textTransform: 'uppercase'
  };

  return (
    <TouchableOpacity style={[containerStyle, style]} onPress={onPress}>
      <Text style={[textStyle, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AlertButton;
