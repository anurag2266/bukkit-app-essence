import React from 'react';
import MyReviewsDetails from './MyReviewsDetails';
import { SpeechBubbleTitleBar } from '../../../../components';

import { localization } from '../../../../constants';
import { NavigationScreenProps } from 'react-navigation';

const MyReviewsDetailsContainer = (props: NavigationScreenProps) => (
  <MyReviewsDetails {...props} />
);

MyReviewsDetailsContainer.navigationOptions = {
  header: <SpeechBubbleTitleBar title={localization.hiThere} />
 //header:null
};

export default MyReviewsDetailsContainer;
