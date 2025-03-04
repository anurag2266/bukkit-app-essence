import React from 'react';
import { View } from 'react-native';
import { Text, PasscodeInput } from '../../../components';

import styles from './styles';
import { localization } from '../../../constants';
import { TextVariant } from '../../../components/Text';

type CreatePasscodeProps = {
  onFulfillPasscode?: (passcode: string) => void;
};

const CreatePasscode = ({ onFulfillPasscode }: CreatePasscodeProps) => (
  <View style={styles.container}>
    <Text style={styles.introText} variant={TextVariant.Heading2GreyRegular}>
      {localization.thinkOfPin}
    </Text>

    <PasscodeInput onFulfill={onFulfillPasscode} />
  </View>
);

export default CreatePasscode;
