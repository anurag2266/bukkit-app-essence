import * as React from 'react';
import { View, FlatList } from 'react-native';
import { SearchInput, ListItem } from '../../../../../../components';

import { Course } from '../../../../../../constants/types';
import { images } from '../../../../../../constants';
import { ScaledSheet } from '../../../../../../utils';

const styles = ScaledSheet.create({
  leftIcon: {
    marginRight: '20@s'
  },

  subtitle: {
    height: 0
  }
});

type CourseListProps = {
  courses?: Array<Course>;
  onItemPress?: (course: Course) => void;
};

const CourseList = ({
  courses = [],
  onItemPress = () => null
}: CourseListProps) => {
  const renderItem = ({ item }: { item: Course }) => (
    <ListItem
      leftIcon={{
        source: images.book
      }}
      leftElementContainerStyle={styles.leftIcon}
      title={item.name}
      subtitleStyle={styles.subtitle}
      onPress={() => onItemPress(item)}
    />
  );

  return (
    <View>
      <SearchInput />
      <FlatList
        data={courses}
        renderItem={renderItem}
        keyExtractor={i => String(i.id)}
      />
    </View>
  );
};

export default CourseList;
