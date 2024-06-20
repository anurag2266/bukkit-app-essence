import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Text, TextInput, BubbleDialog } from '../../../components';

import styles from './styles';
import { localization } from '../../../constants';
import { TextVariant } from '../../../components/Text';

import { NavigationScreenProps } from 'react-navigation';

type EmailNotFoundProps = NavigationScreenProps & {
  onSubmit?: (email: string) => void;
  isError: boolean;
};

const EmailNotFound = ({
  navigation,
  onSubmit = () => null
}: EmailNotFoundProps) => {
  const [email, setEmail] = useState('');

  const isHelpVisible = navigation.getParam('isHelpVisible');
  const hideHelp = () => navigation.setParams({ isHelpVisible: false });

  return (
    <>
      <BubbleDialog
        visible={isHelpVisible}
        title={localization.attendance}
        onClose={hideHelp}
      >
        {localization.attendanceHelpInfo}
      </BubbleDialog>

      <View style={styles.container}>
        <View style={styles.content}>
          <Text
            style={styles.introText}
            variant={TextVariant.Heading2GreyRegular}
          >
            {localization.didWeGetYourEmail}
          </Text>

          <TextInput
            containerStyle={styles.input}
            label={localization.myEmail}
            placeholder={localization.sampleEmail}
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />

          <Text
            style={styles.introText}
            variant={TextVariant.Heading2GreyRegular}
          >
            {localization.editYourAddress}
          </Text>
        </View>

        <Button
          title={localization.tryAgain}
          type="pink"
          onPress={() => {
            onSubmit(email);
            setEmail('');
          }}
        />
      </View>
    </>
  );
};

export default EmailNotFound;
