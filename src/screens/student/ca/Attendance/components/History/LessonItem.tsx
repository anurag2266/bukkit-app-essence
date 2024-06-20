import * as React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

import { lessonItem as styles } from './styles';
import { images, dateFormats, localization } from '../../../../../../constants';
import { Text } from '../../../../../../components';

import formatDate from 'date-fns/format';

type AttendanceType = 'online' | 'on-site';

const getIcons = (attendanceType?: AttendanceType, verified = false) => {
  if (attendanceType) {
    return {
      left: attendanceType === 'on-site' ? images.schoolCircle : images.globe2,
      right: verified ? images.checkCircle : images.exclamationCircle
    };
  }

  return {
    left: images.questionCircle,
    right: images.crossCircle
  };
};

type LessonItemProps = {
  course: string;
  attendanceType?: AttendanceType;
  verified?: boolean;

  inTime: string;
  outTime: string;
  hours?: number;
  onPress?: () => void;
};

const LessonItem = ({
  course,
  attendanceType,
  verified = false,
  inTime,
  outTime,
  hours = 0,
  onPress
}: LessonItemProps) => {
  const icons = getIcons(attendanceType, verified);

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.course}>{course}</Text>

      <View style={styles.bottomContainer}>
        <Image
          source={icons.left}
          style={[
            styles.icon,
            icons.left === images.globe2 && styles.globeIcon
          ]}
          resizeMode="contain"
        />
        <View style={styles.content}>
          <Text style={styles.hours}>{`${hours} ${localization.hours}`}</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.time}>{inTime}</Text>
            <Text style={styles.time}>{outTime}</Text>
          </View>
        </View>
        <Image source={icons.right} style={styles.icon} resizeMode="contain" />
      </View>
    </TouchableOpacity>
  );
};

export default LessonItem;
