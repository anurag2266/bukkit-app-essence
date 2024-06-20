import React, { useMemo, useCallback } from 'react';
import { View, ScrollView, FlatList } from 'react-native';
import { Text } from '../../../../../../components';
import { Calendar } from 'react-native-calendars';
import styles from './styles';
import { localization, dateFormats } from '../../../../../../constants';
import { TextVariant } from '../../../../../../components/Text';
import LessonItem from './LessonItem';
import { LessonAttendanceHistoryItem } from '../../../../../../constants/types';
import formatDate from 'date-fns/format';

const TODAY = new Date();

type HistoryProps = {
  lessons: LessonAttendanceHistoryItem[];
  hours?: number;
  onPress?: () => void;
  date?: string;
  onDateChange?: (date: string) => void;
};

const History = ({
  lessons = [],
  hours = 0,
  date = formatDate(TODAY, dateFormats.yearMonthDay),
  onDateChange
}: HistoryProps) => {
  const markedDates = useMemo(
    () => ({
      [date]: { selected: true }
    }),
    [date]
  );

  const handleDayPress = useCallback(
    ({ dateString }) => {
      if (onDateChange) {
        onDateChange(dateString);
      }
    },
    [onDateChange]
  );

  return (
    <ScrollView style={styles.container}>
      <Calendar
        style={styles.calendar}
        maxDate={TODAY}
        markedDates={markedDates}
        onDayPress={handleDayPress}
      />

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
            course={item.course.name}
            inTime={formatDate(new Date(item.startsAt), dateFormats.time)}
            outTime={formatDate(new Date(item.endsAt), dateFormats.time)}
            hours={0}
            type={item.type}
            verified={item.verified}
          />
        )}
      />
    </ScrollView>
  );
};

export default History;
