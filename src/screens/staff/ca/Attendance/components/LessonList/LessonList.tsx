import React from 'react';
import { FlatList } from 'react-native';
import Text from 'components/Text';
import LessonListItem from './LessonListItem';

import styles from './styles';
import { dateFormats } from 'constants';
import formatDate from 'date-fns/format';
import { LessonsScheduleItem } from 'constants/types';

type LessonListProps = {
  data: LessonsScheduleItem[];
  onItemPress?: (item: any) => void;
};

const LessonList = ({ data, onItemPress = () => null }: LessonListProps) => (
  <FlatList
    data={data}
    renderItem={({ item }) => (
      <LessonListItem data={item} onPress={() => onItemPress(item)} />
    )}
    ListHeaderComponent={
      <Text style={styles.header}>
        {formatDate(new Date(), dateFormats.longDayDate)}
      </Text>
    }
  />
);

export default LessonList;
