import React from 'react';
import { connect } from 'react-redux';
import {
  mapStateToProps,
  mapDispatchToProps
} from '../../../utils';

import { Alert } from 'react-native';
import FingerprintLogin from './FingerprintLogin';
import SpeechBubbleTitleBar from '../../../components/SpeechBubbleTitleBar';
import TouchID from 'react-native-touch-id';

import {
  NavigationScreenConfigProps,
  NavigationScreenProps
} from 'react-navigation';
import { localization } from '../../../constants';

interface Props extends NavigationScreenProps {
  setLoggedIn: Function;
  Auth: any;
}
const FingerprintLoginContainer = (props: Props) => {
  const handleReadFingerprint = () =>
    TouchID.authenticate()
      .then((success: boolean) => {
        if (props.Auth.authToken && props.Auth.authToken.length > 0) {
          props.setLoggedIn(success)
        }
      })
      .catch((error: any) => {
        Alert.alert("User not recognized");
      });

  return (
    <FingerprintLogin onReadFingerprint={handleReadFingerprint} {...props} />
  );
};

FingerprintLoginContainer.navigationOptions = ({
  navigation
}: NavigationScreenConfigProps) => ({
  header: (
    <SpeechBubbleTitleBar
      title={localization.fingerprintLogin}
      leftIcon="back"
      onLeftIconPress={() => navigation.goBack()}
    />
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(FingerprintLoginContainer);
