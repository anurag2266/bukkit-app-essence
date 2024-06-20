import React from 'react';
import { View, StyleProp, ViewStyle, Image } from 'react-native';
import Text, { TextVariant } from '../Text';

import { ScaledSheet } from '../../utils';
import { types, localization, images } from '../../constants';
import colors from '../../styles/colors';

const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '38@s',
    marginTop: '6@s',
    backgroundColor: colors.greyLight
  },

  month: {
    flex: 1,
    textTransform: 'uppercase',
    textAlign: 'center'
  },

  arrow: {
    width: '6@s',
    height: undefined,
    aspectRatio: 0.6,
    tintColor: colors.greyDark
  },

  activeArrow: {
    transform: [{ rotate: '90deg' }]
  }
});

type SectionHeaderProps = {
  style?: StyleProp<ViewStyle>;
  month: number;
  studentType?: types.StudentFullRole;
  active?: boolean;
};

const SectionHeader = ({
  style,
  month,
  active = false
}: SectionHeaderProps) => (
  <View style={[styles.container, style]}>
    <Image
      source={images.rightArrow}
      style={[styles.arrow, active && styles.activeArrow]}
      resizeMode="contain"
    />

    <Text style={styles.month} variant={TextVariant.Heading4GreyDarkBold}>
      {localization.monthArray[+month - 1]}
    </Text>
  </View>
);

export default SectionHeader;
