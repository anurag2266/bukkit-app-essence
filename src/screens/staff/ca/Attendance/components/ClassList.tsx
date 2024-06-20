import React from 'react';
import shortid from 'shortid';
import { FlatList } from 'react-native';
import ClassListItem from './ClassListItem';

import { Class } from '../../../../../constants/types';

type ClassListProps = {
  data: Array<Class>;
  onItemPress?: (item: Class) => void;
};

const ClassList = ({ data, onItemPress = () => null }: ClassListProps) => (
  <FlatList
    data={data}
    renderItem={({ item }) => (
      <ClassListItem {...item} onPress={() => onItemPress(item)} />
    )}
    keyExtractor={shortid.generate}
  />
);

export default ClassList;
