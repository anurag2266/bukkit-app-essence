import * as React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import Text, { TextVariant } from '../Text';

import { sectionItem as styles } from './styles';
import { images } from '../../constants';

type SectionItemProps = {
  data: Array<string>;
  onPress?: () => void;
};

const SectionItem = ({ data = [], onPress }: SectionItemProps) => (
  <TouchableOpacity
    style={styles.container}
    disabled={!onPress}
    onPress={onPress}
  >
    <Text
      style={styles.firstColumn}
      variant={TextVariant.Heading4GreyDarkRegular}
    >
      {data[0]}
    </Text>

    <Text
      style={styles.secondColumn}
      variant={TextVariant.Heading4GreyDarkRegular}
    >
      {data[1]}
    </Text>

    <View style={styles.thirdColumnContainer}>
      <Text
        style={styles.thirdColumn}
        variant={TextVariant.Heading4GreyDarkRegular}
      >
        {data[2]}
      </Text>

      {!!onPress && (
        <Image
          source={images.rightArrow}
          style={styles.arrow}
          resizeMode="contain"
        />
      )}
    </View>
  </TouchableOpacity>
);

export default SectionItem;
