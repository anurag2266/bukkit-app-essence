import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  mapStateToProps,
  mapDispatchToProps
} from '../../../utils';

import Login from './Login';
import SpeechBubbleTitleBar from '../../../components/SpeechBubbleTitleBar';

import {
  NavigationScreenProps,
  NavigationScreenConfigProps
} from 'react-navigation';
import { localization, screens } from '../../../constants';
import { pinSecurity } from '../../../utils';

interface Props extends NavigationScreenProps {
  setLoggedIn: Function;
  Auth: any;
}
const LoginContainer = (props: Props) => {
  const [isAlertVisible, setAlertVisible] = useState(false);

  const showAlert = () => setAlertVisible(true);
  const hideAlert = () => setAlertVisible(false);

  const handleFulfillPasscode = async (passcode: string) => {
    const isCorrect = await pinSecurity.isPinCodeMatch(passcode);
    if (isCorrect && props.Auth.authToken && props.Auth.authToken.length > 0) {
      props.setLoggedIn(true);
    } else {
      showAlert();
    }
  };

  return (
    <Login
      onFulfillPasscode={handleFulfillPasscode}
      onRetry={hideAlert}
      isIncorrectPinAlertVisible={isAlertVisible}
      {...props}
    />
  );
};

LoginContainer.navigationOptions = ({
  navigation
}: NavigationScreenConfigProps) => ({
  // header: (
  //   <SpeechBubbleTitleBar
  //     title={localization.welcomeBack}
  //     leftIcon="back"
  //     onLeftIconPress={() => navigation.goBack()}
  //   />
  // )
  header: null
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
