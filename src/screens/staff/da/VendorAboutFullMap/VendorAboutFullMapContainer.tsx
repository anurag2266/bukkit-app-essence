import React from 'react';
import VendorAboutFullMap from './VendorAboutFullMap';
import { SpeechBubbleTitleBar } from '../../../../components';

import { localization } from '../../../../constants';
import { NavigationScreenProps } from 'react-navigation';

const VendorAboutFullMapContainer = (props: NavigationScreenProps) => (
  <VendorAboutFullMap {...props} />
);

VendorAboutFullMapContainer.navigationOptions = {
  header: <SpeechBubbleTitleBar title={localization.hiThere} />
 //header:null
};

export default VendorAboutFullMapContainer;
