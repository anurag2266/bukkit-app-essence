import React from 'react';
import Alert from '../Alert';
import AlertButton from '../Alert/AlertButton';
import ListItem from '../ListItem';
import { TextVariant } from '../Text';

import { ScaledSheet } from '../../utils';
import { localization, images } from '../../constants';
import { Beacon } from '../../constants/types';
import colors from '../../styles/colors';
import textStyles from '../../styles/textStyles';

const styles = ScaledSheet.create({
  container: {
    paddingHorizontal: 0,
    paddingVertical: 0
  },

  title: {
    ...textStyles[TextVariant.Heading4GreyDarkRegular]
  },

  leftContainer: {
    marginRight: '14@s'
  },

  beaconImage: {
    width: '30@s',
    height: undefined,
    aspectRatio: 1.07
  }
});

type ConfirmBeaconCheckInAlertProps = React.ComponentProps<typeof Alert> & {
  beacon?: Beacon;
  onCancel?: () => void;
  onConfirm?: (beacon?: Beacon) => void;
};

const ConfirmBeaconCheckInAlert = ({
  beacon,
  onCancel,
  onConfirm,
  ...props
}: ConfirmBeaconCheckInAlertProps) => {
  const handleConfirm = () => {
    if (onConfirm) {
      onConfirm(beacon);
    }
  };

  const buttons: Array<React.ComponentProps<typeof AlertButton>> = [
    {
      title: localization.cancel,
      titleColor: colors.greyDark,
      onPress: onCancel
    },
    {
      title: localization.confirmed,
      titleColor: colors.blueLight,
      onPress: handleConfirm
    }
  ];

  return (
    <Alert title={localization.confirmCheckIn} buttons={buttons} {...props}>
      <ListItem
        style={styles.container}
        title={beacon && beacon.name}
        titleStyle={styles.title}
        subtitle={beacon && beacon.description}
        leftIcon={{ source: images.beacon, style: styles.beaconImage }}
        leftElementContainerStyle={styles.leftContainer}
      />
    </Alert>
  );
};

export default ConfirmBeaconCheckInAlert;
