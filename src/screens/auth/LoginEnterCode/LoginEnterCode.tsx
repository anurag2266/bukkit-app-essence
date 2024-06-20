import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text, Link, PasscodeInput, Container } from '../../../components';
import { StatusBar, Image } from "react-native";
import styles from './styles';
import { localization } from '../../../constants';
import { TextVariant } from '../../../components/Text';
import mainStyles from '../../../styles/mainStyle';
import { SafeAreaView } from 'react-native';
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field';
import { NavigationScreenProps } from 'react-navigation';

type LoginEnterCodeProps = {
  onFulfillPasscode?: (passcode: string) => void;
};
const CELL_COUNT = 6;


const LoginEnterCode = ({ navigation }: NavigationScreenProps) => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <Container
      contentContainerStyle={styles.container}
      title={localization.verificationHeaing}
      titleContainerStyle={{ height: 50, backgroundColor: 'transparent', alignItems: 'center', marginTop: 20 }}
      headerLeft={{
        icon: 'back',
        onPress: () => navigation.goBack()

        //onPress: () => navigation.goBack()
      }}
      navigation={navigation}
    >
      <StatusBar translucent backgroundColor="white" barStyle="dark-content" />
      <View style={[mainStyles.paddingLR20, { display: "flex", marginTop: 30, justifyContent: "center", alignItems: "center" }]}>
        <Text style={[styles.varification]}>{localization.varificationText}</Text>
        <View style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
          <Text style={[styles.phoneNum]}>{localization.phoneNum}. </Text>
          <Text style={[styles.wrongNum]}>{localization.wrong}</Text>
        </View>
      
      <View style={{ display: "flex", alignItems: "center", width: "100%" }}>
        <SafeAreaView style={styles.root}>
          <CodeField
            ref={ref}
            {...props}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({ index, symbol, isFocused }) => (
              <View
                onLayout={getCellOnLayoutHandler(index)}
                key={index}
                style={[styles.cellRoot, isFocused && styles.focusCell]}>
                <Text style={styles.cellText}>
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              </View>
            )}
          />
        </SafeAreaView>
        <View style={[styles.digitContainer]}>
          <Text style={[styles.digitText]}>{localization.digit}</Text>
        </View>
        <TouchableOpacity style={[styles.resendSmsContainer]}>
          <Text style={[styles.resend]}>{localization.resendText}</Text>
        </TouchableOpacity>
      </View>
      </View>
      <TouchableOpacity style={[styles.continue]}>
        <Text style={[styles.continueText]}>{localization.done}</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default LoginEnterCode;
