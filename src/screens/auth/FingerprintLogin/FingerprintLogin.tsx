import React from 'react';
import { View, Alert } from 'react-native';
import { Text, Link, Fingerprint } from '../../../components';

import TouchID from 'react-native-touch-id';

import styles from './styles';
import { localization, screens } from '../../../constants';
import { TextVariant } from '../../../components/Text';
import { NavigationScreenProps } from 'react-navigation';

type FingerprintLoginProps = NavigationScreenProps & {
  onReadFingerprint: () => void;
};

const FingerprintLogin = ({
  navigation,
  onReadFingerprint
}: FingerprintLoginProps) => (
  <View style={styles.container}>
    <Text variant={TextVariant.Heading2GreyRegular}>
      {localization.touchFingerprint}
    </Text>

    <Fingerprint
      style={styles.fingerprintButton}
      width={65}
      onPress={onReadFingerprint}
    />

    <Text variant={TextVariant.Heading2GreyRegular}>
      {localization.loginWith}
      <Link onPress={() => navigation.navigate(screens.auth.login)}>
        {localization.pin}
      </Link>
    </Text>
  </View>
);

export default FingerprintLogin;
