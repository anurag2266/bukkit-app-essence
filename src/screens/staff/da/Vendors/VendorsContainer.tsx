import React from 'react';
import Vendors from './Vendors';
import { SpeechBubbleTitleBar } from '../../../../components';

import { localization } from '../../../../constants';
import { NavigationScreenProps } from 'react-navigation';

const VendorsContainer = (props: NavigationScreenProps) => (
  <Vendors {...props} />
);

VendorsContainer.navigationOptions = {
  header: <SpeechBubbleTitleBar title={localization.hiThere} />
 //header:null
};

export default VendorsContainer;
