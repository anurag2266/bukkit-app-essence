import React from 'react';
import Cart from './Cart';
import { SpeechBubbleTitleBar } from '../../../../components';

import { localization } from '../../../../constants';
import { NavigationScreenProps } from 'react-navigation';

const CartContainer = (props: NavigationScreenProps) => (
  <Cart {...props} />
);

CartContainer.navigationOptions = {
  header: <SpeechBubbleTitleBar title={localization.hiThere} />
 //header:null
};

export default CartContainer;
