import React from 'react';
import { TouchableOpacity, View, ViewProps, Image } from 'react-native';

import { ScaledSheet, scale } from '../../utils';
import { images } from '../../constants';
import colors from '../../styles/colors';

type FingerprintProps = ViewProps & {
  color?: string;
  width?: number;
  height?: number;
  onPress?: () => void;
};

const styles = ScaledSheet.create({
  image: {
    flex: 1,
    width: undefined,
    height: undefined
  }
});

const Fingerprint = ({
  style,
  color = colors.pink30,
  width = 37,
  height,
  onPress,
  ...props
}: FingerprintProps) => {
  const containerStyle = {
    width: scale(width),
    height: height && scale(height),
    aspectRatio: height ? undefined : 0.77
  };
  const imageStyle = { tintColor: color };

  const Component: React.ReactType = onPress ? TouchableOpacity : View;
  const componentProps = onPress ? { onPress } : {};

  return (
    <Component style={[containerStyle, style]} {...componentProps} {...props}>
      <Image
        source={images.fingerprint}
        style={[styles.image, imageStyle]}
        resizeMode="stretch"
      />
    </Component>
  );
};

export default Fingerprint;
