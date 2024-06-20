import React from 'react';
import { View, Image, ActivityIndicator } from 'react-native';
import { Container, Text, Button } from '../../../components';

import styles from './styles';
import { localization, screens } from '../../../constants';
import { TextVariant } from '../../../components/Text';
import { NavigationScreenProps } from 'react-navigation';
import { User } from '../../../reducers';

interface Props extends NavigationScreenProps {
  onUseThisPhoto: () => any;
  User: any;
}

const ConfirmSelfie = ({ navigation, onUseThisPhoto, User }: Props) => {
  const photo = navigation.getParam('photo');

  return (
  <Container
    contentContainerStyle={styles.container}
    title={localization.confirmation}
    headerLeft={{
      icon: 'back',
      onPress: () => navigation.goBack()
    }}
  >
    <View>
      <Image
        style={styles.faceBox}
        source={{uri: `data:image/jpeg;base64,${photo.base64}`}}/>
      <Text variant={TextVariant.Heading2GreyRegular}>
        {localization.lookingGood}
      </Text>
    </View>
    {
      User.loading &&
      <ActivityIndicator size="large" color="#0000ff" />
    }

    <View>
      <Button
        title={localization.tryAgain}
        onPress={() => navigation.goBack()}
      />
      <Button
        title={localization.usePhoto}
        onPress={onUseThisPhoto}
        style={styles.usePhotoButton}
        type="pink"
      />
    </View>
  </Container>);
};

export default ConfirmSelfie;
