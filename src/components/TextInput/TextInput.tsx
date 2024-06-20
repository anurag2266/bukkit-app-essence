import React, { useMemo } from 'react';
import {
  View,
  ViewStyle,
  StyleProp,
  TextInput as BaseInput,
  TextInputProps as BaseInputProps,
  TextStyle
} from 'react-native';
import Text, { TextVariant } from '../Text';
import styles from './styles';
import colors from '../../styles/colors';

type TextInputProps = BaseInputProps & {
  containerStyle?: StyleProp<ViewStyle>;
  underlineColor?: string;
  label?: string;
  labelTextVariant?: TextVariant;
  labelStyle?: StyleProp<TextStyle>;
  timePicker?: boolean;
};

const TextInput = ({
  containerStyle,
  style,
  underlineColor = colors.greenLight,
  label = ' ',
  labelTextVariant = TextVariant.Heading4GreyDarkRegular,
  labelStyle,
  placeholderTextColor = colors.greyMedium,
  ...props
}: TextInputProps) => {
  const customInputStyle = useMemo(() => ({ borderColor: underlineColor }), [
    underlineColor
  ]);

  return (
    <View style={containerStyle}>
      <Text variant={labelTextVariant} style={labelStyle}>
        {label}
      </Text>
      <BaseInput
        style={[styles.input, customInputStyle, style]}
        placeholderTextColor={placeholderTextColor}
        {...props}
      />
    </View>
  );
};

export default TextInput;
