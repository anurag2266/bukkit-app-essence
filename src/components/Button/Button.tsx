import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  TextStyle,
  StyleProp
} from 'react-native';
import Text, { TextVariant } from '../Text';

import styles from './styles';
import textStyles from '../../styles/textStyles';

type ButtonType =
  | 'grey'
  | 'pink'
  | 'red'
  | 'dark-red'
  | 'orange'
  | 'green'
  | 'blue'
  | 'yellow'

  | 'clear';

const getButtonStyle = (type: ButtonType) => {
  switch (type) {
    case 'pink':
      return styles.pinkButton;
    case 'red':
      return styles.redButton;
    case 'dark-red':
      return styles.darkRedButton;
    case 'orange':
      return styles.orangeButton;
    case 'green':
      return styles.greenButton;
    case 'yellow':
      return styles.yellowButton;
    case 'blue':
      return styles.yellowButton;
    case 'clear':
      return styles.clearButton;
    case 'grey':
    default:
      return styles.greyButton;
  }
};

const getTitleVariant = (type: ButtonType) => {
  switch (type) {
    case 'pink':
    case 'red':
    case 'dark-red':
    case 'orange':
    case 'green':
      return TextVariant.Heading1White;
    case 'clear':
    case 'grey':
    default:
      return TextVariant.Heading1Grey;
  }
};

const getStyle = (type: ButtonType) => {
  const buttonStyle = getButtonStyle(type);
  const titleVariant = getTitleVariant(type);

  return { buttonStyle, titleVariant };
};

type ButtonProps = TouchableOpacityProps & {
  title?: string;
  titleStyle?: StyleProp<TextStyle>;
  type?: ButtonType;
  onPress?: () => void;
};

const Button = ({
  style,
  title,
  titleStyle,
  type = 'grey',
  disabled,
  ...props
}: ButtonProps) => {
  const { buttonStyle, titleVariant } = getStyle(type);
  const titleVariantStyle = textStyles[titleVariant];

  return (
    <TouchableOpacity
      style={[
        styles.container,
        buttonStyle,
        disabled ? styles.disabled : undefined,
        style
      ]}
      disabled={disabled}
      {...props}
    >
      <Text style={[styles.title, titleVariantStyle, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
