import React from 'react';
import { View, Image, TextInput } from 'react-native';

import styles from './styles';
import { images } from '../../constants';

type SearchInputProps = {
  value?: string;
  onChangeText?: (value: string) => void;
};

const SearchInput = ({ value = '', onChangeText }: SearchInputProps) => (
  <View style={styles.container}>
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
      />
      <Image
        style={styles.searchIcon}
        source={images.search}
        resizeMode="contain"
      />
    </View>
  </View>
);

export default SearchInput;
