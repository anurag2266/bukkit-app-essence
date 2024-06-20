import React from 'react';
import { View, ViewProps } from 'react-native';

import { scale } from '../../utils';
import colors from '../../styles/colors';

type UnderlineProps = ViewProps & {
  color?: string;
  height?: number;
  width?: number;
};

const Underline = ({
  style,
  color = colors.greenLight,
  height = 6,
  width = 21
}: UnderlineProps) => {
  const underlineStyle = {
    backgroundColor: color,
    height: scale(height),
    width: scale(width)
  };

  return <View style={[underlineStyle, style]} />;
};

export default Underline;
