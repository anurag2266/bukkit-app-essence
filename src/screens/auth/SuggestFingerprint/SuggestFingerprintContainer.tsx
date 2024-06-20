import React from 'react';
import { Alert } from 'react-native';
import SuggestFingerprint from './SuggestFingerprint';
import SpeechBubbleTitleBar from '../../../components/SpeechBubbleTitleBar';
import TouchID from 'react-native-touch-id';

import { NavigationScreenProps } from 'react-navigation';
import { localization, screens } from '../../../constants';

const SuggestFingerprintContainer = (props: NavigationScreenProps) => {
  const handleUseFingerprint = () =>
    TouchID.authenticate()
      .then((success: any) => {
        if (success) {
          props.navigation.navigate
          props.navigation.navigate(screens.auth.selfieLogin);

        }
      })
      .catch((error: any) => {
        Alert.alert(error.message);
      });

  return (
    <SuggestFingerprint onUseFingerprint={handleUseFingerprint} {...props} />
  );
};

SuggestFingerprintContainer.navigationOptions = {
  header: <SpeechBubbleTitleBar title={localization.unlockWithTouch} />
};

export default SuggestFingerprintContainer;
