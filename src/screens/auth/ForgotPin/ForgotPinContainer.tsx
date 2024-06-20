import React from 'react';
import { connect } from 'react-redux';
import {
  mapStateToProps,
  mapDispatchToProps
} from '../../../utils';

import ForgotPin from './ForgotPin';
import SpeechBubbleTitleBar from '../../../components/SpeechBubbleTitleBar';

import {
  NavigationScreenProps,
  NavigationScreenConfigProps
} from 'react-navigation';
import { localization, screens } from '../../../constants';

interface Props extends NavigationScreenProps {
  Auth: any;
}
const ForgotPinContainer = ({ navigation }: Props) => {
  const handleResetPin = () => {
    navigation.navigate(screens.auth.loginEnterCode );
  };

  return <ForgotPin onResetPin={handleResetPin} />;
};

ForgotPinContainer.navigationOptions = ({
  navigation
}: NavigationScreenConfigProps) => ({
  header: (
    <SpeechBubbleTitleBar
      title={localization.oopsForgotten}
      leftIcon="back"
      onLeftIconPress={() => navigation.goBack()}
    />
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPinContainer);
