import React from 'react';
import PaymentConfirmation from './PaymentConfirmation';
import { SpeechBubbleTitleBar } from '../../../../components';

import { localization } from '../../../../constants';
import { NavigationScreenProps } from 'react-navigation';

const PaymentConfirmationContainer = (props: NavigationScreenProps) => (
  <PaymentConfirmation {...props} />
);

PaymentConfirmationContainer.navigationOptions = {
  header: <SpeechBubbleTitleBar title={localization.hiThere} />
 //header:null
};

export default PaymentConfirmationContainer;
