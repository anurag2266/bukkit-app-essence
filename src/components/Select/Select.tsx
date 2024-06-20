import React, { useMemo } from 'react';
import { Option } from '../../constants/types';
import PickerSelect from 'react-native-picker-select';
import { Image, ViewStyle, StyleProp, View } from 'react-native';
import TextInput from '../TextInput';
import { localization, images } from '../../constants';
import styles from './styles';

type Value = string | number;

export type SelectProps = {
  options: Array<Option>;
  value: Value | null;
  onChange: (nextValue: Value) => void;
  label?: string;
  placeholder?: string;
  containerStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
};

const createPlaceholder = (label = localization.selectAnItemPlaceholder) => ({
  value: null,
  label
});

const Select = ({
  value,
  onChange,
  options,
  label,
  placeholder,
  containerStyle,
  disabled = false
}: SelectProps) => {
  const pickerPlaceholder = useMemo(() => createPlaceholder(placeholder), [
    placeholder
  ]);

  const selectedOptionLabel = useMemo(() => {
    const selectedOption = options.find(o => o.value === value);
    return selectedOption ? selectedOption.label : '';
  }, [options, value]);

  return (
    <PickerSelect
      onValueChange={onChange}
      items={options}
      value={value}
      placeholder={pickerPlaceholder}
      disabled={disabled}
    >
      <View style={containerStyle}>
        <TextInput
          label={label}
          placeholder={placeholder}
          editable={false}
          value={selectedOptionLabel}
        />
        <Image
          source={images.downArrow}
          style={styles.dropdownArrow}
          resizeMode="contain"
        />
      </View>
    </PickerSelect>
  );
};

export default Select;
