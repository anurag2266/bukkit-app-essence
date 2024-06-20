import React from 'react';
import RequestLoginCode from './RequestLoginCode';
import SpeechBubbleTitleBar from '../../../components/SpeechBubbleTitleBar';

import {
  NavigationScreenConfigProps,
  NavigationScreenProps
} from 'react-navigation';
import { localization, screens } from '../../../constants';

const RequestLoginCodeContainer = ({ navigation }: NavigationScreenProps) => {
  const handleSendCode = (mobileNumber: string) =>
    navigation.navigate(screens.auth.loginEnterCode);

  return <RequestLoginCode onSendCode={handleSendCode} />;
};

RequestLoginCodeContainer.navigationOptions = ({
  navigation
}: NavigationScreenConfigProps) => ({
  header: (
    <SpeechBubbleTitleBar
      title={localization.letsGetSetup}
      leftIcon="back"
      onLeftIconPress={() => navigation.goBack()}
    />
  )
});
export default RequestLoginCodeContainer;
