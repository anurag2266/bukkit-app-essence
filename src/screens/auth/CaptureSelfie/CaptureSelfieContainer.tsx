import React from 'react';
import CaptureSelfie from './CaptureSelfie';

import { NavigationScreenProps } from 'react-navigation';

const CaptureSelfieContainer = (props: NavigationScreenProps) => (
  <CaptureSelfie {...props} />
);

CaptureSelfieContainer.navigationOptions = {
  header: null
};

export default CaptureSelfieContainer;
