import React from 'react';
import { View, Image, FlatList } from 'react-native';
import { Alert, Text, Button } from '../../../../../../components';
import VerificationEventItem from './VerificationEventItem';

import styles from './styles';
import { localization, dateFormats, images } from '../../../../../../constants';

import formatDate from 'date-fns/format';

const getAttendanceTypeIcon = (attendanceType?: AttendanceType) => {
  if (attendanceType) {
    return attendanceType === 'on-site' ? images.schoolCircle : images.globe2;
  }

  return images.questionCircle;
};

type AttendanceType = 'online' | 'on-site';

type AttendanceHistoryAlertProps = React.ComponentProps<typeof Alert> & {
  student: any;
  attendanceType: AttendanceType;
  course: string;
  date: Date;
  verificationEvents?: Array<any>;

  onOk?: () => void;
};

const AttendanceHistoryAlert = ({
  student,
  attendanceType,
  course,
  date,
  verificationEvents = [],
  onOk,
  ...props
}: AttendanceHistoryAlertProps) => {
  const renderVerificationEvent = ({ item, index }) => (
    <VerificationEventItem
      time={item.time}
      status={item.status}
      firstItem={index === 0}
    />
  );

  return (
    <Alert
      title={localization.attendance}
      titleStyle={styles.title}
      containerStyle={styles.container}
      {...props}
    >
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{
            uri:
              student.photo || 'https://api.adorable.io/avatars/285/edular.png'
          }}
          resizeMode="cover"
        />

        <Text style={styles.name}>
          {`${student.first_name} ${student.last_name}`}
        </Text>

        <Image
          style={styles.attendanceType}
          source={getAttendanceTypeIcon(attendanceType)}
          resizeMode="contain"
        />

        <Text style={styles.course}>{course}</Text>
        <Text style={styles.date}>
          {formatDate(date, dateFormats.dateYear)}
        </Text>
      </View>

      <FlatList
        style={styles.verificationEvents}
        data={verificationEvents}
        renderItem={renderVerificationEvent}
      />

      <Button
        type="pink"
        style={styles.button}
        title={localization.ok}
        titleStyle={styles.buttonTitle}
        onPress={onOk}
      />
    </Alert>
  );
};

export default AttendanceHistoryAlert;
