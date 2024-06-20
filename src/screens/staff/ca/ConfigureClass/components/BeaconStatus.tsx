import React from 'react';
import { View, Image } from 'react-native';
import { FlatButton } from '../../../../../components';

import { ScaledSheet } from '../../../../../utils';
import { localization, images } from '../../../../../constants';
import colors from '../../../../../styles/colors';

const styles = ScaledSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: '25@s'
  },

  beaconImage: {
    width: '115@s',
    height: undefined,
    aspectRatio: 1.05
  },

  configureButton: {
    height: '32@s',
    paddingHorizontal: '10@s',
    marginTop: '25@s'
  }
});

type Status = 'inactive' | 'scheduled' | 'active' | 'stopped';

type BeaconStatusProps = {
  status?: Status;
  onConfigure?: () => void;
};

const getBeaconColor = (status: Status) => {
  switch (status) {
    case 'scheduled':
      return colors.orangeAlert;
    case 'active':
      return colors.greenLight;
    case 'stopped':
      return colors.redAlert;
    case 'inactive':
    default:
      return colors.greyMedium;
  }
};

const BeaconStatus = ({
  status = 'inactive',
  onConfigure
}: BeaconStatusProps) => {
  const customBeaconStyle = [
    styles.beaconImage,
    { tintColor: getBeaconColor(status) }
  ];

  return (
    <View style={styles.container}>
      <Image
        source={images.beacon}
        style={customBeaconStyle}
        resizeMode="stretch"
      />

      <FlatButton
        style={styles.configureButton}
        title={localization.configure}
        type="pink"
        onPress={onConfigure}
      />
    </View>
  );
};

export default BeaconStatus;
