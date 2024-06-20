import * as React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { lessonItem as styles } from './styles';
import { images, localization } from '../../../../../../constants';
import { Text } from '../../../../../../components';
import { LessonType } from '../../../../../../constants/types';

const getIcons = (type: LessonType, verified = false) => {
  if (type) {
    return {
      left: type === LessonType.Online ? images.globe2 : images.schoolCircle,
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
  type: LessonType;
  verified?: boolean;

  inTime: string;
  outTime: string;
  hours?: number;
  onPress?: () => void;
};

const LessonItem = ({
  course,
  type,
  verified = false,
  inTime,
  outTime,
  hours = 0,
  onPress
}: LessonItemProps) => {
  const icons = getIcons(type, verified);

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
