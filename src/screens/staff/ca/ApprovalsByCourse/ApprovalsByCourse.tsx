import * as React from 'react';
import { View, SectionList, ListRenderItemInfo } from 'react-native';
import { Container, Text } from '../../../../components';
import StudentItem from './components/StudentItem';

import styles from './styles';
import { localization, dateFormats } from '../../../../constants';
import {
  StaffStudentAttendanceByCourse,
  StaffStudentAttendanceByCourseItem
} from '../../../../constants/types';
import formatDate from 'date-fns/format';

type ApprovalsProps = {
  data?: Array<StaffStudentAttendanceByCourse>;
  onBack?: () => void;
  onStudentPress: (item: StaffStudentAttendanceByCourseItem) => void;
};

const Approvals = ({ data = [], onBack, onStudentPress }: ApprovalsProps) => {
  const renderItem = ({
    item
  }: ListRenderItemInfo<StaffStudentAttendanceByCourseItem>) => {
    const inTime = formatDate(new Date(item.lesson.startsAt), dateFormats.time);
    const outTime = formatDate(
      new Date(item.lesson.startsAt),
      dateFormats.time
    );
    const name = [item.student.firstName, item.student.lastName].join(' ');
    return (
      <StudentItem
        inTime={inTime}
        outTime={outTime}
        name={name}
        date={new Date(item.date)}
        type={item.lesson.type}
        onPress={() => onStudentPress(item)}
      />
    );
  };
  return (
    <Container
      title={localization.approvalsByCourse}
      headerLeft={{
        icon: 'back',
        onPress: onBack
      }}
    >
      <SectionList
        contentContainerStyle={styles.list}
        sections={data}
        renderItem={renderItem}
        renderSectionHeader={({ section }) => (
          <Text style={styles.header}>{section.course.name}</Text>
        )}
        renderSectionFooter={() => <View style={styles.footer} />}
      />
    </Container>
  );
};

export default Approvals;
