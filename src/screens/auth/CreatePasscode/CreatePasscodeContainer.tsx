import React from 'react';
import CreatePasscode from './CreatePasscode';
import SpeechBubbleTitleBar from '../../../components/SpeechBubbleTitleBar';

import {
  NavigationScreenConfigProps,
  NavigationScreenProps
} from 'react-navigation';
import { localization, screens } from '../../../constants';

const CreatePasscodeContainer = ({ navigation }: NavigationScreenProps) => {
  const handleFulfillPasscode = (passcode: string) => {
    navigation.navigate(screens.auth.confirmPasscode, { passcode });
  }
    

  return <CreatePasscode onFulfillPasscode={handleFulfillPasscode} />;
};

CreatePasscodeContainer.navigationOptions = ({
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

export default CreatePasscodeContainer;
