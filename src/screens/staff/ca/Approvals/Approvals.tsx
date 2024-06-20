import React from 'react';
import { Container, TabGroup } from '../../../../components';
import StudentList from './components/StudentList';
import CourseList from './components/CourseList';
import styles from './styles';
import { localization } from '../../../../constants';
import { Course, ApprovalsStudent } from '../../../../constants/types';

type ApprovalsProps = {
  courses: Course[];
  students: ApprovalsStudent[];

  onStudentPress?: (student: ApprovalsStudent) => void;
  onCoursePress?: (course: Course) => void;
  onBack?: () => void;
};

const Approvals = ({
  courses,
  students,
  onStudentPress,
  onCoursePress,
  onBack
}: ApprovalsProps) => {
  const tabs = [
    {
      title: localization.students,
      content: <StudentList students={students} onItemPress={onStudentPress} />
    },
    {
      title: localization.courses,
      content: <CourseList courses={courses} onItemPress={onCoursePress} />
    }
  ];

  return (
    <Container
      title={localization.approvals}
      titleContainerStyle={styles.headerTitle}
      headerLeft={{
        icon: 'back',
        onPress: onBack
      }}
      contentContainerStyle={styles.contentContainer}
      
    >
      <TabGroup tabs={tabs} tabStyle={styles.tab} />
    </Container>
  );
};

export default Approvals;
