import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import Text, { TextVariant } from '../Text';

import { ScaledSheet } from '../../utils';
import { localization, images, dateFormats } from '../../constants';
import { DailyClassAttendance } from '../../constants/types';

import formatDate from 'date-fns/format';

const styles = ScaledSheet.create({
  container: {
    marginBottom: '18@s'
  },

  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  headerTitle: {
    textTransform: 'uppercase'
  },

  item: {
    flexDirection: 'row',
    marginTop: '14@s'
  },

  itemTitle: {
    flex: 1
  },

  itemValue: {
    flex: 1
  },

  itemStatus: {
    width: '16@s',
    height: undefined,
    aspectRatio: 1
  }
});

const getStatusIcon = (status: DailyClassAttendance['status']) => {
  switch (status) {
    case 'irregular':
      return images.exclamation;
    case 'rejected':
      return images.warningTriangle;
    case 'approved':
    default:
      return images.checkmark;
  }
};

const formatDay = (date: Date) => formatDate(date, dateFormats.dayDate);

type WeekAttendanceProps = {
  week: string;
  totalHours: number;
  data?: Array<DailyClassAttendance>;
  onDailyAttendancePress?: (item: DailyClassAttendance) => void;
};

const WeekAttendance = ({
  week,
  totalHours,
  data = [],
  onDailyAttendancePress = () => null
}: WeekAttendanceProps) => {
  const formatHours = (hours: number) =>
    `${hours} ${hours === 1 ? localization.hour : localization.hours}`;

  const renderHeader = () => (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle} variant={TextVariant.Heading4PinkBold}>
        {localization.weekOf(week)}
      </Text>
      <Text style={styles.headerTitle} variant={TextVariant.Heading4BlueBold}>
        {formatHours(totalHours)}
      </Text>
    </View>
  );

  const renderItem = (item: DailyClassAttendance) => {
    const day = formatDay(item.date);
    const handlePress = () => onDailyAttendancePress(item);

    return (
      <TouchableOpacity key={day} style={styles.item} onPress={handlePress}>
        <Text
          style={styles.itemTitle}
          variant={TextVariant.Heading4GreyDarkBold}
        >
          {day}
        </Text>
        <Text
          style={styles.itemValue}
          variant={TextVariant.Heading4GreyDarkRegular}
        >
          {formatHours(item.hours)}
        </Text>
        <Image source={getStatusIcon(item.status)} style={styles.itemStatus} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {renderHeader()}
      {data.map(renderItem)}
    </View>
  );
};

export default WeekAttendance;
