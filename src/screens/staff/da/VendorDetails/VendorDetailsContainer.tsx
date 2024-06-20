import React from 'react';
import VendorDetails from './VendorDetails';
import { SpeechBubbleTitleBar } from '../../../../components';

import { localization } from '../../../../constants';
import { NavigationScreenProps } from 'react-navigation';

const VendorDetailsContainer = (props: NavigationScreenProps) => (
  <VendorDetails {...props} />
);

VendorDetailsContainer.navigationOptions = {
  header: <SpeechBubbleTitleBar title={localization.hiThere} />
 //header:null
};

export default VendorDetailsContainer;
