import React from 'react';
import Welcome from './Welcome';
import { SpeechBubbleTitleBar } from '../../../../components';

import { localization } from '../../../../constants';
import { NavigationScreenProps } from 'react-navigation';

const WelcomeContainer = (props: NavigationScreenProps) => (
  <Welcome {...props} />
);

WelcomeContainer.navigationOptions = {
 // header: <SpeechBubbleTitleBar title={localization.hiThere} />
 header:null
};

export default WelcomeContainer;
