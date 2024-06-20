import React from 'react';
import Legal from './Legal';
import { SpeechBubbleTitleBar } from '../../../../components';

import { localization } from '../../../../constants';
import { NavigationScreenProps } from 'react-navigation';

const LegalContainer = (props: NavigationScreenProps) => (
  <Legal {...props} />
);

LegalContainer.navigationOptions = {
  header: <SpeechBubbleTitleBar title={localization.hiThere} />
 //header:null
};

export default LegalContainer;
