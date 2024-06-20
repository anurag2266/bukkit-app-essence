import React from 'react';
import {
  View,
  ViewStyle,
  StyleProp,
  Text as BaseText,
  TextProps as BaseTextProps
} from 'react-native';
import Underline from '../Underline';

import { TextVariant } from './enums';
import styles from '../../styles/textStyles';

type UnderlinePosition = 'left' | 'center' | 'right';

type TextProps = BaseTextProps & {
  children?: React.ReactNode;
  variant?: TextVariant;
  showUnderline?: boolean;
  underlineStyle?: StyleProp<ViewStyle>;
  underlinePosition?: UnderlinePosition;
  underlineColor?: string;
  underlineWidth?: number;
  underlineHeight?: number;
};

const getAlignment = (position: UnderlinePosition) => {
  switch (position) {
    case 'right':
      return 'flex-end';
    case 'center':
      return 'center';
    case 'left':
    default:
      return 'flex-start';
  }
};

const Text = ({
  style,
  variant,
  showUnderline = false,
  underlineStyle,
  underlinePosition = 'left',
  underlineColor,
  underlineWidth,
  underlineHeight,
  ...props
}: TextProps) => {
  const variantStyle = variant && styles[variant];
  const textStyle = [variantStyle, style];
  const component = <BaseText style={textStyle} {...props} />;

  if (showUnderline) {
    return (
      <View style={{ alignItems: getAlignment(underlinePosition) }}>
        {component}
        <Underline
          style={underlineStyle}
          color={underlineColor}
          width={underlineWidth}
          height={underlineHeight}
        />
      </View>
    );
  }

  return component;
};

export default Text;
