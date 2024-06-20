import React, { useState, useRef } from 'react';
import shortid from 'shortid';
import { View, ViewStyle, StyleProp, TextInput } from 'react-native';
import PasscodeDigit from './PasscodeDigit';

import styles from './styles';
import { scale } from '../../utils';

type PasscodeInputProps = {
  style?: StyleProp<ViewStyle>;
  length?: number;
  spaceWidth?: number;
  keyboardType?: string;
  onChangeValue?: (passcode: string) => void;
  onFulfill?: (passcode: string) => void;
};

const PasscodeInput = ({
  style,
  length = 4,
  spaceWidth = 12,
  keyboardType = 'number-pad',
  onChangeValue,
  onFulfill
}: PasscodeInputProps) => {
  const ref: any = useRef();
  const [value, setValue] = useState('');

  const focusInput = () => {
    if (ref && ref.current) {
      ref.current.focus();
    }
  };

  const handleChangeValue = (passcode: string) => {
    setValue(passcode);

    if (onChangeValue) {
      onChangeValue(passcode);
    }

    if (passcode.length >= length && onFulfill) {
      onFulfill(passcode);
      setValue('');
    }
  };

  const digits = new Array(length).fill(0);
  const renderDigit = (digit: number, index: number) => {
    const isFilled = index < value.length;
    const isLast = index >= length - 1;

    const digitStyle = { marginRight: isLast ? 0 : scale(spaceWidth) };

    return (
      <PasscodeDigit
        style={digitStyle}
        key={shortid.generate()}
        filled={isFilled}
      />
    );
  };

  return (
    <View style={style} onTouchStart={focusInput}>
      <View style={styles.digitsContainer}>{digits.map(renderDigit)}</View>

      <TextInput
        style={styles.input}
        ref={ref}
        maxLength={length}
        keyboardType={keyboardType}
        value={value}
        onChangeText={handleChangeValue}
        caretHidden
        autoFocus
      />
    </View>
  );
};

export default PasscodeInput;
