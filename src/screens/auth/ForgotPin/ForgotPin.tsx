import React from 'react';
import { View } from 'react-native';
import { Button, Text, TextInput } from '../../../components';

import styles from './styles';
import { localization } from '../../../constants';
import { TextVariant } from '../../../components/Text';

type ForgotPinProps = {
  onResetPin?: () => void;
};

const ForgotPin = ({ onResetPin }: ForgotPinProps) => (
  <View style={styles.container}>
    <Text style={styles.introText} variant={TextVariant.Heading2GreyRegular}>
      {localization.notAProblem}
    </Text>

    <TextInput
      //label={localization.myEmail}
      style={styles.emailInput}
      placeholder={localization.email}
      autoCapitalize="none"
      keyboardType="email-address"
    //value={email}
    //onChangeText={setEmail}
    />

    <Button title={localization.resetMyPassword} type="pink" onPress={onResetPin} />
  </View>
);

export default ForgotPin;
