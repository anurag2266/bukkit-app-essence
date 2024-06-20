import * as React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

import { item as styles } from './styles';
import { images } from '../../../../../../constants';
import { Text } from '../../../../../../components';
import { LessonType } from '../../../../../../constants/types';

const getIcons = (type?: LessonType, verified = false) => {
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

type StudentItemProps = {
  name: string;
  type?: LessonType;
  verified?: boolean;
  inTime: string;
  outTime: string;
};

const StudentItem = ({
  name,
  type,
  verified = false,
  inTime,
  outTime
}: StudentItemProps) => {
  const icons = getIcons(type, verified);

  return (
    <TouchableOpacity style={styles.container}>
      <Image
        source={icons.left}
        style={[styles.icon, icons.left === images.globe2 && styles.globeIcon]}
        resizeMode="contain"
      />
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>

        <View style={styles.timeContainer}>
          <Text style={styles.time}>{inTime}</Text>
          <Text style={styles.time}>{outTime}</Text>
        </View>
      </View>
      <Image source={icons.right} style={styles.icon} resizeMode="contain" />
    </TouchableOpacity>
  );
};

export default StudentItem;
