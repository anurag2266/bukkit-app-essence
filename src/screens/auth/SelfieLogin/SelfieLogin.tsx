import React from 'react';
import { View } from 'react-native';
import { Text, Button } from '../../../components';

import styles from './styles';
import { localization, screens } from '../../../constants';
import { TextVariant } from '../../../components/Text';
import { NavigationScreenProps } from 'react-navigation';

const SelfieLogin = ({ navigation }: NavigationScreenProps) => {
  const onTakeMyPhoto = () => navigation.navigate(screens.auth.captureSelfie);

  return (
    <View style={styles.container}>
      <Text style={styles.introText} variant={TextVariant.Heading2GreyRegular}>
        {localization.needsToKnowFace}
      </Text>

      <Button
        title={localization.takeMyPhoto}
        type="pink"
        onPress={onTakeMyPhoto}
      />
    </View>
  );
};

export default SelfieLogin;
