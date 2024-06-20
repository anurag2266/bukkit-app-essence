import React from 'react';
import { ListItem, FlatButton } from '../../../../../components';

import { ScaledSheet } from '../../../../../utils';
import { Hotspot } from '../../../../../constants/types';
import { images, localization } from '../../../../../constants';
import colors from '../../../../../styles/colors';

const styles = ScaledSheet.create({
  hostpotImage: {
    width: '30@s',
    height: undefined,
    aspectRatio: 1.07,
    tintColor: colors.greyMedium
  },

  button: {
    width: '68@s',
    height: '30@s'
  }
});

type HotspotListItemProps = Hotspot & {
  onPress?: () => void;
};

const HotspotListItem = ({ name, description, onPress }: HotspotListItemProps) => (
  <ListItem
    title={name}
    subtitle={description}
    leftIcon={{
      source: images.beacon,
      style: styles.hostpotImage,
      resizeMode: 'stretch'
    }}
    rightElement={
      <FlatButton
        style={styles.button}
        title={localization.select}
        type="pink"
        onPress={onPress}
      />
    }
  />
);

export default HotspotListItem;
