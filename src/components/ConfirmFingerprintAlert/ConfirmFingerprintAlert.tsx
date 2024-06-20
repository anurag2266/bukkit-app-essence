import React from 'react';
import { ScaledSheet } from '../../utils';
import Text, { TextVariant } from '../Text';
import Alert from '../Alert';
import AlertButton from '../Alert/AlertButton';
import Fingerprint from '../Fingerprint';

import { localization } from '../../constants';
import colors from '../../styles/colors';

type ConfirmFingerprintAlertProps = React.ComponentProps<typeof Alert> & {
  onOkay?: () => void;
  onCancel?: () => void;
};

const styles = ScaledSheet.create({
  contentContainer: {
    flexDirection: 'row'
  },

  description: {
    marginLeft: '14@s'
  }
});

const ConfirmFingerprintAlert = ({
  onOkay,
  onCancel,
  ...props
}: ConfirmFingerprintAlertProps) => {
  const buttons: Array<React.ComponentProps<typeof AlertButton>> = [
    {
      title: localization.cancel,
      onPress: onCancel
    },
    {
      title: localization.ok,
      titleColor: colors.blueLight,
      onPress: onOkay
    }
  ];

  return (
    <Alert
      title={localization.confirmFingerprint}
      contentContainerStyle={styles.contentContainer}
      buttons={buttons}
      {...props}
    >
      <Fingerprint width={26.4} height={31} color={colors.pink} />
      <Text
        style={styles.description}
        variant={TextVariant.Heading4GreyDarkRegular}
      >
        {localization.touchFingerprintReader}
      </Text>
    </Alert>
  );
};

export default ConfirmFingerprintAlert;
