import React from 'react';
import { ListItem } from '../../../../../components';

import { ScaledSheet } from '../../../../../utils';
import { Hotspot } from '../../../../../constants/types';
import { images } from '../../../../../constants';
import colors from '../../../../../styles/colors';

const styles = ScaledSheet.create({
  classImage: {
    width: '30@s',
    height: undefined,
    aspectRatio: 1.07,
    tintColor: colors.greyMedium
  }
});

type ClassListItemProps = Hotspot & {
  onPress?: () => void;
};

const ClassListItem = ({ name, description, onPress }: ClassListItemProps) => (
  <ListItem
    title={name}
    subtitle={description}
    leftIcon={{
      source: images.class,
      style: styles.classImage,
      resizeMode: 'stretch'
    }}
    onPress={onPress}
  />
);

export default ClassListItem;
