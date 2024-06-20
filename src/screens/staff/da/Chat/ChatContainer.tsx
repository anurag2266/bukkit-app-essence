import React from 'react';
import Chat from './Chat';
import { SpeechBubbleTitleBar } from '../../../../components';

import { localization } from '../../../../constants';
import { NavigationScreenProps } from 'react-navigation';

const ChatContainer = (props: NavigationScreenProps) => (
  <Chat {...props} />
);

ChatContainer.navigationOptions = {
  header: <SpeechBubbleTitleBar title={localization.hiThere} />
 //header:null
};

export default ChatContainer;
