import React from 'react';
import FullMap from './FullMap';
import { SpeechBubbleTitleBar } from '../../../../components';

import { localization } from '../../../../constants';
import { NavigationScreenProps } from 'react-navigation';

const FullMapContainer = (props: NavigationScreenProps) => (
  <FullMap {...props} />
);

FullMapContainer.navigationOptions = {
  header: <SpeechBubbleTitleBar title={localization.hiThere} />
 //header:null
};

export default FullMapContainer;
