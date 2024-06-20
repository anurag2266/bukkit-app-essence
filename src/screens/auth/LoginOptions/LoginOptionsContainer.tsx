import React from 'react';
import LoginOptions from './LoginOptions';
import { SpeechBubbleTitleBar } from '../../../components';

import { localization } from '../../../constants';
import { NavigationScreenProps } from 'react-navigation';

const LoginOptionsContainer = (props: NavigationScreenProps) => (
  <LoginOptions {...props} />
);

LoginOptionsContainer.navigationOptions = {
  //header: <SpeechBubbleTitleBar title={localization.hiThere} />
  header: null
};

export default LoginOptionsContainer;
