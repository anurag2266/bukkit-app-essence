import React, { useCallback, useEffect, useMemo } from 'react';
import Approvals from './Approvals';

import { screens } from '../../../../constants';
import { Course, ApprovalsStudent } from 'constants/types';
import { NavigationScreenConfigProps } from 'react-navigation';
import { AppState } from 'store';
import * as ACCActions from 'store/attendance/ca/courses/actions';
import * as ACSAActions from 'store/attendance/ca/staff/approvals/actions';
import { connect } from 'react-redux';

const COURSES_ALL_OPTIONS: Course = {
  id: 0,
  name: 'All Courses',
  streamCredentials: []
};

const mapStateToProps = (state: AppState) => ({
  courses: state.attendance.ca.courses.data,
  students: state.attendance.ca.staff.approvals.students.data
});

const mapDispatchToProps = {
  getCourses: ACCActions.getCourses,
  getStudents: ACSAActions.getStudents
};

export type ApprovalsContainerProps = NavigationScreenConfigProps &
  ReturnType<typeof mapStateToProps> &
  {
    [key in keyof typeof mapDispatchToProps]: (
      ...args: Parameters<typeof mapDispatchToProps[key]>
    ) => void
  };

const ApprovalsContainer = ({
  navigation,
  courses,
  students,
  getCourses,
  getStudents
}: ApprovalsContainerProps) => {
  useEffect(() => {
    getCourses();
    getStudents();
  }, [getCourses, getStudents]);

  const handleCoursePress = (course: Course) =>
    navigation.navigate(screens.staff.ca.approvalsByCourse, {
      // id = 0 for all courses
      courseId: course.id || undefined
    });

  const handleStudentPress = useCallback(
    (student: ApprovalsStudent) => {
      navigation.navigate(screens.staff.ca.studentAttendance, {
        studentId: student.id
      });
    },
    [navigation]
  );

  const handleBack = () => navigation.goBack();

  const resultCourses = useMemo(() => [COURSES_ALL_OPTIONS, ...courses], [
    courses
  ]);

  return (
    <Approvals
      students={students}
      courses={resultCourses}
      onCoursePress={handleCoursePress}
      onBack={handleBack}
      onStudentPress={handleStudentPress}
    />
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ApprovalsContainer);
