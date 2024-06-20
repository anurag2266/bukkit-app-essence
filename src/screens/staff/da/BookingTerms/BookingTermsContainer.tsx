import React from 'react';
import BookingTerms from './BookingTerms';
import { SpeechBubbleTitleBar } from '../../../../components';

import { localization } from '../../../../constants';
import { NavigationScreenProps } from 'react-navigation';

const BookingTermsContainer = (props: NavigationScreenProps) => (
  <BookingTerms {...props} />
);

BookingTermsContainer.navigationOptions = {
  header: <SpeechBubbleTitleBar title={localization.hiThere} />
 //header:null
};

export default BookingTermsContainer;
