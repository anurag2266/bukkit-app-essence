import React, { useMemo } from 'react';
import ApprovalsByCourse from './ApprovalsByCourse';
import { NavigationScreenConfigProps } from 'react-navigation';
import { screens } from '../../../../constants';
import { createFetcher } from '../../../../modules/fetcher';
import AttendanceAPI from '../../../../models/Attendance';
import { StaffStudentAttendanceByCourseItem } from '../../../../constants/types';

const StaffStudentsAttendanceByCourseFetcher = createFetcher({
  fetch: token => new AttendanceAPI(token).getStaffStudentsAttendanceByCourse
});

const ApprovalsContainer = ({ navigation }: NavigationScreenConfigProps) => {
  const handleBack = () => navigation.goBack();
  const params = useMemo(
    () => ({
      courseId: navigation.getParam('courseId')
    }),
    [navigation]
  );

  const handleStudentPress = (item: StaffStudentAttendanceByCourseItem) =>
    navigation.navigate(screens.staff.ca.attendanceApproval, {
      lessonId: item.lesson.id,
      date: item.date,
      studentId: item.student.id
    });

  return (
    <StaffStudentsAttendanceByCourseFetcher params={params}>
      {({ state: { data } }) => (
        <ApprovalsByCourse
          onBack={handleBack}
          onStudentPress={handleStudentPress}
          data={data || []}
        />
      )}
    </StaffStudentsAttendanceByCourseFetcher>
  );
};

export default ApprovalsContainer;
