import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Text, TextInput } from '../../../components';

import styles from './styles';
import { localization } from '../../../constants';
import { TextVariant } from '../../../components/Text';

type RequestLoginCodeProps = {
  onSendCode?: (mobileNumber: string) => void;
};

const RequestLoginCode = ({
  onSendCode = () => null
}: RequestLoginCodeProps) => {
  const [countryCode, setCountryCode] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  const handleSendCode = () => onSendCode(`${countryCode}${mobileNumber}`);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text
          style={styles.introText}
          variant={TextVariant.Heading2GreyRegular}
        >
          {localization.needToVerify}
        </Text>

        <View style={styles.inputsContainer}>
          <TextInput
            containerStyle={styles.countryCodeInput}
            label={localization.country}
            placeholder={localization.phoneCountryCode}
            keyboardType="number-pad"
            value={countryCode}
            onChangeText={setCountryCode}
          />

          <TextInput
            containerStyle={styles.mobileNumberInput}
            placeholder={localization.enterMobileNumber}
            keyboardType="number-pad"
            value={mobileNumber}
            onChangeText={setMobileNumber}
          />
        </View>
      </View>

      <Button
        title={localization.sendMyCode}
        type="pink"
        onPress={handleSendCode}
      />
    </View>
  );
};

export default RequestLoginCode;
