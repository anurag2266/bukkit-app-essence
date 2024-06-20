import * as React from 'react';
import { View } from 'react-native';
import SummaryItem from '../../../../../../components/SummaryItem';

import styles from './styles';
import { images, localization } from '../../../../../../constants';

type Lesson = {
  name: string;
  time: string;
};

type SummaryProps = {
  attendaceRating?: number;
  upcomingLesson?: Lesson;
};

const Summary = ({ attendaceRating = 0, upcomingLesson }: SummaryProps) => (
  <View style={styles.container}>
    <SummaryItem
      style={styles.item}
      icon={images.barChart}
      title={localization.performance}
      subtitle={localization.myAttendanceRating(attendaceRating)}
    />
    <SummaryItem
      icon={images.clock}
      title={localization.upcoming}
      subtitle={
        upcomingLesson && `${upcomingLesson.name}\n${upcomingLesson.time}`
      }
    />
  </View>
);

export default Summary;
