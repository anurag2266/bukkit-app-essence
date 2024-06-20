import React from 'react';
import { View } from 'react-native';
import { Button, Text } from '../../../components';

import styles from './styles';
import { localization, screens } from '../../../constants';
import { TextVariant } from '../../../components/Text';
import { NavigationScreenProps } from 'react-navigation';

type SuggestFingerprintProps = NavigationScreenProps & {
  onUseFingerprint?: () => void;
};

const SuggestFingerprint = ({
  navigation,
  onUseFingerprint
}: SuggestFingerprintProps) => (
  <View style={styles.container}>
    <Text style={styles.introText} variant={TextVariant.Heading2GreyRegular}>
      {localization.whyNotFingerprint}
    </Text>

    <View>
      <Button
        title={localization.noThanks}
        onPress={() => navigation.navigate(screens.auth.selfieLogin)}
      />
      <Button
        title={localization.useFingerprint}
        style={styles.useFingerprintButton}
        type="pink"
        onPress={onUseFingerprint}
      />
    </View>
  </View>
);

export default SuggestFingerprint;
