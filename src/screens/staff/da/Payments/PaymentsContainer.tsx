import React from 'react';
import Payments from './Payments';
import { SpeechBubbleTitleBar } from '../../../../components';

import { localization } from '../../../../constants';
import { NavigationScreenProps } from 'react-navigation';

const PaymentsContainer = (props: NavigationScreenProps) => (
  <Payments {...props} />
);

PaymentsContainer.navigationOptions = {
  header: <SpeechBubbleTitleBar title={localization.hiThere} />
 //header:null
};

export default PaymentsContainer;
