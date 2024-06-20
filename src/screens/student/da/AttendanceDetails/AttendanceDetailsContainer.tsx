import * as React from 'react';
import AttendanceDetails from '../../../../components/AttendanceDetails';

import { NavigationScreenProps } from 'react-navigation';
import { DailyClassAttendance } from '../../../../constants/types';

import formatDate from 'date-fns/format';
import { dateFormats, mockData } from '../../../../constants';

const AttendanceDetailsContainer = ({ navigation }: NavigationScreenProps) => {
  const attendance: DailyClassAttendance = navigation.getParam(
    'dailyAttendance'
  );

  const date = formatDate(attendance.date, dateFormats.dayDateMonth);

  const handleGoBack = () => navigation.goBack();

  return (
    <AttendanceDetails
      type="da"
      title={date}
      onBack={handleGoBack}
      events={mockData.studentAttendanceDetails.da}
      attendanceHours={8}
    />
  );
};

export default AttendanceDetailsContainer;
