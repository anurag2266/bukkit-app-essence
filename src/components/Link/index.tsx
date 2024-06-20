import React from 'react';
import { TextProps } from 'react-native';
import Text from '../Text';

import colors from '../../styles/colors';

type LinkProps = TextProps & {
  children?: React.ReactNode;
  color?: string;
};

const Link = ({
  children,
  style = {},
  color = colors.blueLight,
  ...props
}: LinkProps) => (
  <Text style={[{ color }, style]} {...props}>
    {children}
  </Text>
);

export default Link;
