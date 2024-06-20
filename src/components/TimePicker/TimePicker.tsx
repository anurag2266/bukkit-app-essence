import React, { useMemo, useRef, useCallback } from 'react';
import {
  ViewStyle,
  StyleProp,
  TextInput as BaseInput,
  TextInputProps as BaseInputProps,
  TextStyle,
  TouchableOpacity,
  View
} from 'react-native';
import Text, { TextVariant } from '../Text';
import RN24hTimePicker, {
  TimePickerProps as RN24hTimePickerProps
} from 'react-native-24h-timepicker';
import styles from './styles';
import colors from '../../styles/colors';
import { parseTime } from '../../utils/datetime';

export type TimePickerProps = BaseInputProps & {
  containerStyle?: StyleProp<ViewStyle>;
  underlineColor?: string;
  label?: string;
  labelTextVariant?: TextVariant;
  labelStyle?: StyleProp<TextStyle>;
  onChange?: (nextValue: string) => void;
  PickerProps?: RN24hTimePickerProps;
};

const TextInput = ({
  containerStyle,
  style,
  underlineColor = colors.greenLight,
  value = '',
  label = ' ',
  labelTextVariant = TextVariant.Heading4GreyDarkRegular,
  labelStyle,
  placeholderTextColor = colors.greyMedium,
  onChangeText,
  PickerProps = {},
  ...props
}: TimePickerProps) => {
  const rn24hTimePickerRef = useRef<RN24hTimePicker | null>(null);

  const customInputStyle = { borderColor: underlineColor };
  const openTimePicker = useCallback(() => {
    if (rn24hTimePickerRef.current) {
      rn24hTimePickerRef.current.open();
    }
  }, [rn24hTimePickerRef]);

  const closeTimePicker = useCallback(() => {
    if (rn24hTimePickerRef.current) {
      rn24hTimePickerRef.current.close();
    }
  }, [rn24hTimePickerRef]);

  const onConfirm = useCallback(
    (hours: number, minute: number) => {
      const nextValue = `${hours}:${minute}`;
      if (onChangeText) {
        onChangeText(nextValue);
      }

      closeTimePicker();
    },
    [onChangeText, closeTimePicker]
  );

  const selectedTime = useMemo(() => {
    const { hourInterval = 1, minuteInterval = 1 } = PickerProps;
    let parsedTime = null;
    if (value) {
      parsedTime = parseTime(value);
    } else {
      const currentDate = new Date();
      parsedTime = {
        hours: currentDate.getHours(),
        minutes: currentDate.getMinutes()
      };
    }
    const hours = Math.ceil(parsedTime.hours / hourInterval) * hourInterval;
    const minutes =
      Math.ceil(parsedTime.minutes / minuteInterval) * minuteInterval;

    return {
      hours: String(hours),
      minutes: minutes < 10 ? `0${minutes}` : String(minutes)
    };
  }, [value]);

  return (
    <View style={containerStyle}>
      <Text variant={labelTextVariant} style={labelStyle}>
        {label}
      </Text>
      <BaseInput
        style={[styles.input, customInputStyle, style]}
        placeholderTextColor={placeholderTextColor}
        {...props}
        editable={false}
        value={value}
      />
      <RN24hTimePicker
        selectedHour={selectedTime.hours}
        selectedMinute={selectedTime.minutes}
        {...PickerProps}
        ref={rn24hTimePickerRef}
        onCancel={closeTimePicker}
        // @ts-ignore see: https://github.com/nysamnang/react-native-24h-timepicker/pull/4
        onConfirm={onConfirm}
      />
      <TouchableOpacity style={styles.wrapper} onPress={openTimePicker} />
    </View>
  );
};

export default TextInput;
