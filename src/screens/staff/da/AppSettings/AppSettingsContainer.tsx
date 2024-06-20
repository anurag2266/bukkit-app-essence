import React from 'react';
import AppSettings from './AppSettings';
import { SpeechBubbleTitleBar } from '../../../../components';

import { localization } from '../../../../constants';
import { NavigationScreenProps } from 'react-navigation';

const AppSettingsContainer = (props: NavigationScreenProps) => (
  <AppSettings {...props} />
);

AppSettingsContainer.navigationOptions = {
  header: <SpeechBubbleTitleBar title={localization.hiThere} />
 //header:null
};

export default AppSettingsContainer;
