import React from 'react';
import MyFavourites from './MyFavourites';
import { SpeechBubbleTitleBar } from '../../../../components';

import { localization } from '../../../../constants';
import { NavigationScreenProps } from 'react-navigation';

const MyFavouritesContainer = (props: NavigationScreenProps) => (
  <MyFavourites {...props} />
);

MyFavouritesContainer.navigationOptions = {
  header: <SpeechBubbleTitleBar title={localization.hiThere} />
 //header:null
};

export default MyFavouritesContainer;
