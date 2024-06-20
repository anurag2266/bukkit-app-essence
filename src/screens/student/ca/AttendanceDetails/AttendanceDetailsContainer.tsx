import * as React from 'react';
import AttendanceDetails from '../../../../components/AttendanceDetails';
import LessonHistoryModal from '../../../../components/LessonHistoryModal';

import { NavigationScreenProps } from 'react-navigation';
import { DailyClassAttendance } from '../../../../constants/types';

import formatDate from 'date-fns/format';
import { dateFormats, mockData } from '../../../../constants';

const AttendanceDetailsContainer = ({ navigation }: NavigationScreenProps) => {
  const [isModalVisible, setModalVisible] = React.useState(false);
  const attendance: DailyClassAttendance = navigation.getParam(
    'dailyAttendance'
  );

  const date = formatDate(attendance.date, dateFormats.dayDateMonth);

  const handleGoBack = () => navigation.goBack();

  const handleLessonPress = (lesson: any) => setModalVisible(true);

  // hybrid
  // return (
  //   <AttendanceDetails
  //     type="hybrid"
  //     title={date}
  //     onBack={handleGoBack}
  //     lessons={mockData.studentAttendanceDetails.ca}
  //     lessonHours={8}
  //     onLessonPress={handleLessonPress}
  //     events={mockData.studentAttendanceDetails.da}
  //     attendanceHours={8}
  //   />
  // );

  return (
    <>
      <LessonHistoryModal
        visible={isModalVisible}
        lesson="Beauty Therapy"
        programHours={25.5}
        data={[
          {
            date: new Date(),
            in: '09:10am',
            out: '10:30am',
            minutesAttended: 80
          },
          {
            date: new Date(),
            in: '09:10am',
            out: '10:30am',
            minutesAttended: 80
          },
          {
            date: new Date(),
            in: '09:10am',
            out: '10:30am',
            minutesAttended: 80
          },
          {
            date: new Date(),
            in: '09:10am',
            out: '10:30am',
            minutesAttended: 80
          },
          {
            date: new Date(),
            in: '09:10am',
            out: '10:30am',
            minutesAttended: 80
          }
        ]}
        onDismiss={() => setModalVisible(false)}
      />
      <AttendanceDetails
        type="ca"
        title={date}
        onBack={handleGoBack}
        lessons={mockData.studentAttendanceDetails.ca}
        lessonHours={8}
        onLessonPress={handleLessonPress}
      />
    </>
  );
};

export default AttendanceDetailsContainer;
