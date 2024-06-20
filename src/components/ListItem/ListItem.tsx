import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  ImageProps,
  Image,
  TextStyle
} from 'react-native';
import Text from '../Text';

import styles from './styles';

type ListItemProps = {
  style?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
  title?: string;
  titleStyle?: StyleProp<TextStyle>;
  subtitle?: string;
  subtitleStyle?: StyleProp<TextStyle>;
  leftElement?: React.ReactNode;
  leftIcon?: ImageProps;
  leftElementContainerStyle?: StyleProp<ViewStyle>;
  rightElement?: React.ReactNode;
  rightIcon?: ImageProps;
  rightElementContainerStyle?: StyleProp<ViewStyle>;
  onPress?: () => void;
};

const ListItem = ({
  style,
  contentContainerStyle,
  title = '',
  titleStyle,
  subtitle = '',
  subtitleStyle,
  leftElement,
  leftIcon,
  leftElementContainerStyle,
  rightElement,
  rightIcon,
  rightElementContainerStyle,
  onPress
}: ListItemProps) => {
  let leftNode = leftElement;
  let rightNode = rightElement;

  if (leftIcon) {
    leftNode = <Image {...leftIcon} />;
  }

  if (rightIcon) {
    rightNode = <Image {...rightIcon} />;
  }

  const Component: React.ReactType = onPress ? TouchableOpacity : View;
  const componentProps = onPress ? { onPress } : {};

  return (
    <Component style={[styles.container, style]} {...componentProps}>
      {leftNode && (
        <View style={[styles.leftContainer, leftElementContainerStyle]}>
          {leftNode}
        </View>
      )}

      <View style={[styles.content, contentContainerStyle]}>
        <Text style={[styles.title, titleStyle]}>{title}</Text>
        <Text style={[styles.subtitle, subtitleStyle]}>{subtitle}</Text>
      </View>

      {rightNode && (
        <View style={[styles.rightContainer, rightElementContainerStyle]}>
          {rightNode}
        </View>
      )}
    </Component>
  );
};

export default ListItem;
