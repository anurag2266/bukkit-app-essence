import React from 'react';
import { View, ViewStyle, StyleProp } from 'react-native';
import Text, { TextVariant } from '../Text';

import { ScaledSheet } from '../../utils';
import textStyles from '../../styles/textStyles';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    marginHorizontal: '2@s'
  },

  firstContainer: {
    marginLeft: 0
  },

  lastContainer: {
    marginRight: 0
  },

  firstText: {
    textAlign: 'left'
  },

  middleText: {
    textAlign: 'center'
  },

  lastText: {
    textAlign: 'right'
  },

  title: {
    ...textStyles[TextVariant.Heading2GreyBold]
  },

  value: {
    ...textStyles[TextVariant.TitleMainPink]
  }
});

type SummaryItemProps = {
  style?: StyleProp<ViewStyle>;
  title: string;
  value: string | number;
  position?: 'first' | 'middle' | 'last';
};

const SummaryItem = ({
  style,
  title,
  value,
  position = 'middle'
}: SummaryItemProps) => {
  const getContainerStyle: any = () => {
    const key = `${position}Container`;
    return styles[key as keyof typeof styles];
  };

  const getAlignmentStyle: any = () => {
    const key = `${position}Text`;
    return styles[key as keyof typeof styles];
  };

  const alignmentStyle = getAlignmentStyle();

  return (
    <View style={[styles.container, getContainerStyle(), style]}>
      <Text style={[styles.title, alignmentStyle]}>{title}</Text>
      <Text style={[styles.value, alignmentStyle]}>{value}</Text>
    </View>
  );
};

export default SummaryItem;
