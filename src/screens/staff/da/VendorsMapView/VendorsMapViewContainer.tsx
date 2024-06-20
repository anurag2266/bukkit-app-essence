import React from 'react';
import VendorsMapView from './VendorsMapView';
import { SpeechBubbleTitleBar } from '../../../../components';

import { localization } from '../../../../constants';
import { NavigationScreenProps } from 'react-navigation';

const VendorsMapViewContainer = (props: NavigationScreenProps) => (
  <VendorsMapView {...props} />
);

VendorsMapViewContainer.navigationOptions = {
  header: <SpeechBubbleTitleBar title={localization.hiThere} />
 //header:null
};

export default VendorsMapViewContainer;
