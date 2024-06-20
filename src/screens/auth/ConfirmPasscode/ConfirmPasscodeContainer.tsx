import React, { useState } from 'react';
import ConfirmPasscode from './ConfirmPasscode';
import SpeechBubbleTitleBar from '../../../components/SpeechBubbleTitleBar';
import PinMismatchAlert from './components/PinMismatchAlert';

import { pinSecurity } from '../../../utils';
import { localization, screens } from '../../../constants';
import {
  NavigationScreenProps,
  NavigationScreenConfigProps
} from 'react-navigation';

const ConfirmPasscodeContainer = ({ navigation }: NavigationScreenProps) => {
  const [isAlertVisible, setAlertVisible] = useState(false);
  const passcodeToMatch = navigation.getParam('passcode');

  const hideAlert = () => setAlertVisible(false);
  const showAlert = () => setAlertVisible(true);

  const handleFulfillPasscode = async (passcode: string) => {
    if (passcode === passcodeToMatch) {
      try {
        await pinSecurity.storePinCode(passcode);
        navigation.navigate(screens.auth.suggestFingerprint);
      } catch (e) {
        console.error(
          '[ERROR] ConfirmPasscodeContainer::handleFulfillPasscode -',
          e
        );
      }
    } else {
      showAlert();
    }
  };

  return (
    <>
      <PinMismatchAlert visible={isAlertVisible} onOkay={hideAlert} />
      <ConfirmPasscode onFulfillPasscode={handleFulfillPasscode} />
    </>
  );
};

ConfirmPasscodeContainer.navigationOptions = ({
  navigation
}: NavigationScreenConfigProps) => ({
  header: (
    <SpeechBubbleTitleBar
      title={localization.magicNumbers}
      rightIcon="close"
      onRightIconPress={() => navigation.goBack()}
    />
  )
});

export default ConfirmPasscodeContainer;
