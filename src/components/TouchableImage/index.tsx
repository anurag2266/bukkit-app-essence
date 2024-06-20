import React from 'react';
import {
  Image,
  ImageStyle,
  ImageSourcePropType,
  TouchableOpacity,
  TouchableOpacityProps,
  StyleProp,
  ViewStyle,
  Text,
  TextStyle

} from 'react-native';

type TouchableImageProps = TouchableOpacityProps & {
  style?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ImageStyle>;
  source: ImageSourcePropType;
  title: string;
  textStyle: StyleProp<TextStyle>
};

const TouchableImage = ({
  style,
  title,
  imageStyle,
  textStyle,
  source,
  ...props
}: TouchableImageProps) => {
  const touchableImageStyle: StyleProp<ViewStyle> = {
    justifyContent: 'center',
    alignItems: 'center'
  };

  return (
    <TouchableOpacity style={[touchableImageStyle, style]} {...props}>
      {source && (
        <Image source={source} style={imageStyle} resizeMode="contain" />
      )}
      {title && (
        <Text style={textStyle}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default TouchableImage;
