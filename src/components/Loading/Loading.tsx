import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { RNCamera } from 'react-native-camera';

import Overlay from '../Overlay';

import styles from './styles';

type LoadingProps = {
  visible: boolean;

};

const Loading = ({
  visible
}: LoadingProps) => {
  return <Overlay style={styles.overlay} visible={visible} transparent={true} >
      <ActivityIndicator size='large' />
  </Overlay>
};

export default Loading;
