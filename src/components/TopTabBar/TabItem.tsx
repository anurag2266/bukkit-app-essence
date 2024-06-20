import React from 'react';
import { View, ViewStyle, StyleProp, TextStyle } from 'react-native';
import Text, { TextVariant } from '../Text';

import textStyles from '../../styles/textStyles';

type TabItemProps = {
  title?: string;
  isCurrent?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<TextStyle>;
  onPress?: () => void;
};

const TabItem = ({
  title,
  isCurrent = false,
  containerStyle,
  style,
  onPress
}: TabItemProps) => {
  const fontStyle: StyleProp<TextStyle> = {
    ...textStyles[TextVariant.Heading1White]
  };

  return (
    <View style={containerStyle}>
      <Text
        style={[fontStyle, style]}
        underlinePosition="center"
        showUnderline={isCurrent}
        onPress={onPress}
      >
        {title}
      </Text>
    </View>
  );
};

export default TabItem;
