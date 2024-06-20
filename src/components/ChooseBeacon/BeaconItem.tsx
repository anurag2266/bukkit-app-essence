import React from 'react';
import FlatButton from '../FlatButton';
import ListItem from '../ListItem';

import { ScaledSheet } from '../../utils';
import { images, localization } from '../../constants';
import { Beacon } from '../../constants/types';

const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 0,
    paddingVertical: '20@s'
  },

  button: {
    width: '68@s',
    height: '30@s'
  },

  beaconImage: {
    width: '30@s',
    height: undefined,
    aspectRatio: 1.07
  }
});

type BeaconItemProps = Beacon & {
  onPress: () => void;
  title: string;
};

const BeaconItem = ({ name, title, onPress }: BeaconItemProps) => {
  return (<ListItem
    style={styles.container}
    title={name}
    subtitle={title}
    leftIcon={{ source: images.beacon, style: styles.beaconImage }}
    rightElement={
      <FlatButton
        style={styles.button}
        title={localization.label}
        type="pink"
        onPress={onPress}
      />
    }
  />);
  };

export default BeaconItem;
