import React from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';
import SummaryItem from './SummaryItem';

import { ScaledSheet } from '../../utils';
import shortid from 'shortid';

const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: '30@s',
    paddingVertical: '22@s'
  }
});

type SummaryDataItem = {
  title: string;
  value: string | number;
};

type SummaryBoxProps = {
  style?: StyleProp<ViewStyle>;
  data?: Array<SummaryDataItem>;
};

const SummaryBox = ({ style, data = [] }: SummaryBoxProps) => {
  const getPosition = (index: number) => {
    switch (index) {
      case 0:
        return 'first';
      case data.length - 1:
        return 'last';
      default:
        return 'middle';
    }
  };

  const renderItem = (item: SummaryDataItem, index: number) => {
    const position = getPosition(index);
    return (
      <SummaryItem {...item} position={position} key={shortid.generate()} />
    );
  };

  return (
    <View style={[styles.container, style]}>
      {data && data.map(renderItem)}
    </View>
  );
};

export default SummaryBox;
