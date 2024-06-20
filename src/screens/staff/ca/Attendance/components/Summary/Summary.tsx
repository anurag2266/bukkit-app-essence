import * as React from 'react';
import { View } from 'react-native';
import SummaryItem from '../../../../../../components/SummaryItem';

import styles from './styles';
import { images, localization } from '../../../../../../constants';
import { StaffLessonsAttendanceSummary } from '../../../../../../constants/types';

type SummaryProps = {
  summary: StaffLessonsAttendanceSummary | null;
  onApprovalsPress?: () => void;
};

const Summary = ({ summary, onApprovalsPress }: SummaryProps) => (
  <View style={styles.container}>
    <View style={styles.row}>
      <SummaryItem
        style={styles.item}
        icon={images.barChart}
        title={localization.performance}
        subtitle={
          summary
            ? localization.myAttendanceRating(summary.attendanceRating)
            : undefined
        }
      />
      <SummaryItem
        icon={images.checkmarkSquare}
        title={localization.approvals}
        subtitle={localization.outstandingApprovals}
        badge={summary ? summary.approvals : undefined}
        onPress={onApprovalsPress}
      />
    </View>

    <View style={[styles.row, styles.lastRow]}>
      <SummaryItem
        style={styles.item}
        icon={images.clock}
        title={localization.upcoming}
        subtitle={
          summary && summary.upcomingLesson
            ? `${summary.upcomingLesson.name}\n${summary.upcomingLesson.time}`
            : undefined
        }
      />
      <SummaryItem
        icon={images.history}
        title={localization.previous}
        subtitle={
          summary && summary.previousLesson
            ? `${summary.previousLesson.name}\n${summary.previousLesson.time}`
            : undefined
        }
      />
    </View>
  </View>
);

export default Summary;
