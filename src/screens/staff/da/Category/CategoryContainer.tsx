import React from 'react';
import Category from './Category';
import { SpeechBubbleTitleBar } from '../../../../components';

import { localization } from '../../../../constants';
import { NavigationScreenProps } from 'react-navigation';

const CategoryContainer = (props: NavigationScreenProps) => (
  <Category {...props} />
);

CategoryContainer.navigationOptions = {
  header: <SpeechBubbleTitleBar title={localization.hiThere} />
 //header:null
};

export default CategoryContainer;
