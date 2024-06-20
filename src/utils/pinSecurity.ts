import AsyncStorage from '@react-native-community/async-storage';

const KEY = '@PIN_CODE';

const storePinCode = (pinCode: string) => AsyncStorage.setItem(KEY, pinCode);

const getPinCode = () => AsyncStorage.getItem(KEY);

const resetPinCode = () => AsyncStorage.removeItem(KEY);

const isPinCodeMatch = async (pinCode: string) => {
  try {
    const storedPin = await getPinCode();
    return pinCode == storedPin;
  } catch (e) {
    console.error('[ERROR] pinSecurity::isPinCodeMatch - ', e);
    throw e;
  }
};

export { storePinCode, getPinCode, resetPinCode, isPinCodeMatch };
