import React from 'react';
import Settings from './Settings';
import { SpeechBubbleTitleBar } from '../../../../components';

import { localization } from '../../../../constants';
import { NavigationScreenProps } from 'react-navigation';

const SettingsContainer = (props: NavigationScreenProps) => (
  <Settings {...props} />
);

SettingsContainer.navigationOptions = {
  header: <SpeechBubbleTitleBar title={localization.hiThere} />
 //header:null
};

export default SettingsContainer;
