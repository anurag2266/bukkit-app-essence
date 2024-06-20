import React from 'react';
import SelfieLogin from './SelfieLogin';
import { SpeechBubbleTitleBar } from '../../../components';

import { localization } from '../../../constants';
import { NavigationScreenProps } from 'react-navigation';

const SelfieLoginContainer = (props: NavigationScreenProps) => (
  <SelfieLogin {...props} />
);

SelfieLoginContainer.navigationOptions = {
  header: <SpeechBubbleTitleBar title={localization.timeForSelfie} />
};

export default SelfieLoginContainer;
