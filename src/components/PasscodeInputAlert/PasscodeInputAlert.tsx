import React, { useState } from 'react';
import Alert from '../Alert';
import PasscodeInput from '../PasscodeInput';
import AlertButton from '../Alert/AlertButton';

import { localization } from '../../constants';
import colors from '../../styles/colors';

type AlertProps = React.ComponentProps<typeof Alert>;
type AlertButtonProps = React.ComponentProps<typeof AlertButton>;

type PasscodeInputAlertProps = AlertProps & {
  onCancel?: () => void;
  onSubmit?: (passcode: string) => void;
  onFulfill?: (passcode: string) => void;
};

const PasscodeInputAlert = ({
  onCancel,
  onSubmit = () => null,
  onFulfill,
  ...props
}: PasscodeInputAlertProps) => {
  const [passcode, setPasscode] = useState('');

  const buttons: Array<AlertButtonProps> = [
    {
      title: localization.cancel,
      titleColor: colors.greyDark,
      onPress: onCancel
    },
    {
      title: localization.ok,
      titleColor: colors.blueLight,
      onPress: () => onSubmit(passcode)
    }
  ];

  return (
    <Alert title={localization.enterStaffPin} buttons={buttons} {...props}>
      <PasscodeInput onChangeValue={setPasscode} onFulfill={onFulfill} />
    </Alert>
  );
};

export default PasscodeInputAlert;
