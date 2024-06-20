import React, { useState } from 'react';
import { View } from 'react-native';
import { RNCamera } from 'react-native-camera';

import { Container, Text, Button } from '../../../components';

import styles from './styles';
import { localization, screens } from '../../../constants';
import { TextVariant } from '../../../components/Text';
import { NavigationScreenProps } from 'react-navigation';

const CaptureSelfie = ({ navigation }: NavigationScreenProps) => {
  let camera: RNCamera | null;

  const takePicture = async () => {
    if (camera) {
      const options = { quality: 0.5, base64: true };
      const photo = await camera.takePictureAsync(options);
      navigation.navigate(screens.auth.confirmSelfie, { photo });
    }
  };
  
  return (
  <Container
    contentContainerStyle={styles.container}
    title={localization.takeAPhoto}
    headerLeft={{
      icon: 'back',
      onPress: () => navigation.goBack()
    }}
  >


    <RNCamera
      ref={ref => {
        camera = ref;
      }}
      type={RNCamera.Constants.Type.front}
      androidCameraPermissionOptions={localization.cameraPermission}
      style={styles.faceOval}
      captureAudio={false}
    >
    </RNCamera>

    <Text variant={TextVariant.Heading2GreyRegular}>
      {localization.positionYourFaceAutoGrab}
    </Text>

    <View style={styles.takePicture}>
      <Button
        title={localization.takePhoto}
        onPress={()=> takePicture()}
        type="pink"
      />
    </View>

  </Container>);
};

export default CaptureSelfie;
