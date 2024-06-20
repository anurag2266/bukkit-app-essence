import * as React from 'react';
import { View, FlatList } from 'react-native';
import { SearchInput, ListItem } from '../../../../../../components';

import { ApprovalsStudent } from '../../../../../../constants/types';
import { images } from '../../../../../../constants';

type StudentListProps = {
  students?: ApprovalsStudent[];
  onItemPress?: (student: ApprovalsStudent) => void;
};

const StudentList = ({
  students = [],
  onItemPress = () => null
}: StudentListProps) => {
  const renderItem = ({ item }: { item: ApprovalsStudent }) => (
    <ListItem
      leftIcon={{
        source: images.exclamation
      }}
      title={`${item.firstName} ${item.lastName}`}
      subtitle={item.campus}
      onPress={() => onItemPress(item)}
    />
  );

  return (
    <View>
      <SearchInput />
      <FlatList
        data={students}
        renderItem={renderItem}
        keyExtractor={i => String(i.id)}
      />
    </View>
  );
};

export default StudentList;
