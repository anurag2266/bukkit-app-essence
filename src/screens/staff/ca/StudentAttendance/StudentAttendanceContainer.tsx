import React from 'react';
import StudentAttendance from './StudentAttendance';
import { NavigationScreenConfigProps } from 'react-navigation';
import { screens } from '../../../../constants';
import { LessonAttendanceDetails } from '../../../../constants/types';

const StudentAttendanceContainer = ({
  navigation
}: NavigationScreenConfigProps) => {
  const studentId = navigation.getParam('studentId');

  const handleBack = () => navigation.goBack();

  const handleAttendanceItemPress = (item: LessonAttendanceDetails) => {
    navigation.navigate(screens.staff.ca.attendanceApproval, {
      lessonId: item.id,
      studentId,
      date: item.date
    });
  };

  return (
    <StudentAttendance
      studentId={studentId}
      onBack={handleBack}
      onAttendanceItemPress={handleAttendanceItemPress}
    />
  );
};

export default StudentAttendanceContainer;
