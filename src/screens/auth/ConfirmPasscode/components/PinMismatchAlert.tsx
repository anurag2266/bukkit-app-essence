import React from 'react';
import { Text, Alert } from '../../../../components';
import AlertButton from '../../../../components/Alert/AlertButton';

import { localization } from '../../../../constants';
import colors from '../../../../styles/colors';
import { TextVariant } from '../../../../components/Text';

type PinMismatchAlertProps = React.ComponentProps<typeof Alert> & {
  onOkay?: () => void;
};

const PinMismatchAlert = ({ onOkay, ...props }: PinMismatchAlertProps) => {
  const buttons: Array<React.ComponentProps<typeof AlertButton>> = [
    {
      title: localization.ok,
      titleColor: colors.blueLight,
      onPress: onOkay
    }
  ];

  return (
    <Alert title={localization.pinDoesntMatch} buttons={buttons} {...props}>
      <Text variant={TextVariant.Heading4GreyDarkRegular}>
        {localization.reEnterPin}
      </Text>
    </Alert>
  );
};

export default PinMismatchAlert;
