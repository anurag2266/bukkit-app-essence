import React from 'react';
import { View, ViewProps } from 'react-native';

import { scale } from '../../utils';
import colors from '../../styles/colors';

type PasscodeDigitProps = ViewProps & {
  size?: number;
  color?: string;
  filledColor?: string;
  filled?: boolean;
};

const PasscodeDigit = ({
  style,
  size = 21,
  color = colors.pink30,
  filledColor = colors.pink,
  filled = false
}: PasscodeDigitProps) => {
  const customStyle = {
    width: scale(size),
    aspectRatio: 1,
    borderRadius: scale(size / 2),
    backgroundColor: filled ? filledColor : color
  };

  return <View style={[customStyle, style]} />;
};

export default PasscodeDigit;
