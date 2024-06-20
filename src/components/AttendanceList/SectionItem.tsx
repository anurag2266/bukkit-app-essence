import React from 'react';
import { View } from 'react-native';
import { ScaledSheet } from '../../utils';
import { WeeklyClassAttendance, DailyClassAttendance } from '../../constants/types';
import WeekAttendance from './WeekAttendance';

const styles = ScaledSheet.create({
  container: {
    paddingTop: '18@s',
    paddingHorizontal: '30@s'
  }
});

type SectionItemProps = {
  data?: Array<WeeklyClassAttendance>;
  onDailyAttendancePress?: (item: DailyClassAttendance) => void;
};

const SectionItem = ({
  data = [],
  onDailyAttendancePress
}: SectionItemProps) => (
  <View style={styles.container}>
    {data.map(item => (
      <WeekAttendance
        key={item.week}
        week={item.week}
        totalHours={item.totalHours}
        data={item.data}
        onDailyAttendancePress={onDailyAttendancePress}
      />
    ))}
  </View>
);

export default SectionItem;
