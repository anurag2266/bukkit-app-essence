import React from 'react';
import MyAppointment from './MyAppointment';
import { SpeechBubbleTitleBar } from '../../../../components';

import { localization } from '../../../../constants';
import { NavigationScreenProps } from 'react-navigation';

const MyAppointmentContainer = (props: NavigationScreenProps) => (
  <MyAppointment {...props} />
);

MyAppointmentContainer.navigationOptions = {
  header: <SpeechBubbleTitleBar title={localization.hiThere} />
 //header:null
};

export default MyAppointmentContainer;
