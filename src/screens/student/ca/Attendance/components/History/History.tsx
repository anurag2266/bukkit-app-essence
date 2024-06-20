import * as React from 'react';
import { View, ScrollView, FlatList } from 'react-native';
import { Text } from '../../../../../../components';
import { Calendar } from 'react-native-calendars';

import styles from './styles';
import { localization } from '../../../../../../constants';
import { TextVariant } from '../../../../../../components/Text';
import LessonItem from './LessonItem';

type HistoryProps = {
  lessons?: Array<any>;
  hours?: number;
  onLessonPress?: () => void;
};

const History = ({ lessons = [], hours = 0, onLessonPress }: HistoryProps) => (
  <ScrollView style={styles.container} contentContainerStyle={styles.content}>
    <Calendar style={styles.calendar} />

    <View style={styles.hoursContainer}>
      <Text
        variant={TextVariant.Heading4GreyDarkBold}
        showUnderline
        underlinePosition="center"
        underlineHeight={3}
      >
        {`${hours} ${localization.hours.toUpperCase()}`}
      </Text>
    </View>

    <FlatList
      data={lessons}
      renderItem={({ item }) => (
        <LessonItem
          course={item.course}
          inTime={item.inTime}
          outTime={item.outTime}
          hours={item.hours}
          attendanceType={item.attendanceType}
          verified={item.verified}
          onPress={onLessonPress}
        />
      )}
    />
  </ScrollView>
);

export default History;
