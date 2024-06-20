import React from 'react';
import CheckInbox from './CheckInbox';
import SpeechBubbleTitleBar from '../../../components/SpeechBubbleTitleBar';

import { NavigationScreenProps } from 'react-navigation';
import { localization } from '../../../constants';

const CheckInboxContainer = (props: NavigationScreenProps) => (
  <CheckInbox {...props} />
);

CheckInboxContainer.navigationOptions = {
  header: <SpeechBubbleTitleBar title={localization.youGotMail} />
};

export default CheckInboxContainer;
