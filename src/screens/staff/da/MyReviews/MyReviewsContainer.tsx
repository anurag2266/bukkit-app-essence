import React from 'react';
import MyReviews from './MyReviews';
import { SpeechBubbleTitleBar } from '../../../../components';

import { localization } from '../../../../constants';
import { NavigationScreenProps } from 'react-navigation';

const MyReviewsContainer = (props: NavigationScreenProps) => (
  <MyReviews {...props} />
);

MyReviewsContainer.navigationOptions = {
  header: <SpeechBubbleTitleBar title={localization.hiThere} />
 //header:null
};

export default MyReviewsContainer;
