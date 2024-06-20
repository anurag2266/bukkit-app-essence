import React from 'react';
import PersonalDetails from './PersonalDetails';
import { SpeechBubbleTitleBar } from '../../../../components';

import { localization } from '../../../../constants';
import { NavigationScreenProps } from 'react-navigation';

const PersonalDetailsContainer = (props: NavigationScreenProps) => (
  <PersonalDetails {...props} />
);

PersonalDetailsContainer.navigationOptions = {
  header: <SpeechBubbleTitleBar title={localization.hiThere} />
 //header:null
};

export default PersonalDetailsContainer;
