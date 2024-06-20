import * as React from 'react';
import { View, FlatList } from 'react-native';
import { Button, SearchInput } from '../../../../../../components';
import StudentItem from './StudentItem';
import formatDate from 'date-fns/format';
import styles from './styles';
import { StudentAttendanceListItemDetails } from '../../../../../../constants/types';
import { localization, dateFormats } from '../../../../../../constants';

type StudentListProps = {
  students: StudentAttendanceListItemDetails[];
  type?: 'all' | 'present' | 'absent';
  onEndLesson?: () => void;
  onSendReminder?: () => void;
};

const StudentList = ({
  students = [],
  type = 'all',
  onEndLesson,
  onSendReminder
}: StudentListProps) => (
  <View style={styles.container}>
    <SearchInput />
    <FlatList
      data={students}
      contentContainerStyle={styles.list}
      renderItem={({ item }) => {
        const inTime = item.inTime
          ? formatDate(new Date(item.inTime), dateFormats.time)
          : '';
        const outTime = item.outTime
          ? formatDate(new Date(item.outTime), dateFormats.time)
          : '';
        return (
          <StudentItem
            name={`${item.firstName} ${item.lastName}`}
            verified={item.verified}
            type={item.lessonType}
            inTime={inTime}
            outTime={outTime}
          />
        );
      }}
      keyExtractor={i => String(i.id)}
    />
    {type === 'all' && (
      <Button
        style={styles.button}
        type="dark-red"
        title={localization.endThisLesson}
        onPress={onEndLesson}
      />
    )}
    {type === 'absent' && (
      <Button
        style={styles.button}
        type="pink"
        title={localization.sendReminder}
        onPress={onSendReminder}
      />
    )}
  </View>
);

export default StudentList;
