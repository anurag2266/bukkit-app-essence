import React from 'react';
import { View, Image, TextInput, SectionList } from 'react-native';
import { Text } from '../../../../../../components';
import HistoryListItem from './HistoryListItem';

import styles from './styles';
import { images, dateFormats } from '../../../../../../constants';
import formatDate from 'date-fns/format';
import {
  DayLessonsDetails,
  LessonsScheduleItem
} from '../../../../../../constants/types';

type HistoryListProps = {
  data: DayLessonsDetails[];
  onItemPress?: (item: LessonsScheduleItem) => void;
  searchable?: boolean;
};

const HistoryList = ({
  data,
  onItemPress = () => null,
  searchable = false
}: HistoryListProps) => (
    <View style={styles.container}>
      {searchable && (
        <View style={styles.headerContainer}>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} />
            <Image
              style={styles.searchIcon}
              source={images.search}
              resizeMode="contain"
            />
          </View>
        </View>
      )}
      <SectionList
        sections={data}
        renderItem={({ item }) => (
          <HistoryListItem item={item} onPress={() => onItemPress(item)} />
        )}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>
            {formatDate(new Date(section.date), dateFormats.longDayDate)}
          </Text>
        )}
      />
    </View>
  );

export default HistoryList;
