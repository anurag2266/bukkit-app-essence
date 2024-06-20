import React from 'react';
import BookAppointment from './BookAppointment';
import { SpeechBubbleTitleBar } from '../../../../components';

import { localization } from '../../../../constants';
import { NavigationScreenProps } from 'react-navigation';

const BookAppointmentContainer = (props: NavigationScreenProps) => (
  <BookAppointment {...props} />
);

BookAppointmentContainer.navigationOptions = {
  header: <SpeechBubbleTitleBar title={localization.hiThere} />
 //header:null
};

export default BookAppointmentContainer;
