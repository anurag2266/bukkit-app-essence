import * as React from 'react';
import { View } from 'react-native';
import Text, { TextVariant } from '../Text';

import { sectionHeader as styles } from './styles';

type SectionHeaderProps = {
  data?: Array<string>;
};

const SectionHeader = ({ data = [] }: SectionHeaderProps) => (
  <View style={styles.container}>
    <Text
      style={[styles.column, styles.firstColumn]}
      variant={TextVariant.Heading4GreyDarkBold}
    >
      {data[0]}
    </Text>

    <Text
      style={[styles.column, styles.secondColumn]}
      variant={TextVariant.Heading4GreyDarkBold}
    >
      {data[1]}
    </Text>

    <Text style={styles.column} variant={TextVariant.Heading4GreyDarkBold}>
      {data[2]}
    </Text>
  </View>
);

export default SectionHeader;
