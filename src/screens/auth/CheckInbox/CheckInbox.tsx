/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Text, Link } from '../../../components';

import styles from './styles';
import { localization, images, screens } from '../../../constants';
import { TextVariant } from '../../../components/Text';
import { NavigationScreenProps } from 'react-navigation';

const CheckInbox = ({ navigation }: NavigationScreenProps) => (
  <View style={styles.container}>
    <Text variant={TextVariant.Heading2GreyRegular}>
      {localization.sentYouEmail}
    </Text>

    <TouchableOpacity
      style={styles.syncIconContainer}
      onPress={() => navigation.navigate(screens.auth.confirmClient)} // for prototype only
    >
      <Image
        style={styles.syncIcon}
        source={images.sync}
        resizeMode="contain"
      />
    </TouchableOpacity>

    <Text variant={TextVariant.Heading2GreyRegular}>
      {localization.didntReceiveEmail}
      <Link>{localization.resendIt}</Link>
    </Text>
  </View>
);

export default CheckInbox;
