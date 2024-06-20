import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from 'utils';

import {
  TabbedContainer,
  Button,
  SummaryBox,
  FaceIDCapture,
  TabGroup
} from 'components';

import { localization } from 'constants';
import {
  MonthlyClassAttendance,
  DailyClassAttendance,
  LessonsScheduleItem
} from 'constants/types';
import Summary from './components/Summary';
import LessonList from './components/LessonList/LessonList';
import History from './components/History';
import AttendanceHistoryAlert from './components/AttendanceHistoryAlert';
import useVisible from 'hooks/useVisible';

type AttendanceProps = {
  schedule: LessonsScheduleItem[];
  isFaceIDVisible: boolean;

  summaryData: React.ComponentProps<typeof SummaryBox>['data'];
  attendanceData: Array<MonthlyClassAttendance>;
  attendedLessons?: Array<any>;
  onCapture: (file: any) => void;
  Classes: any;
  checkout: Function;
  onDailyAttendancePress?: (item: DailyClassAttendance) => void;

  onFaceIDOpen: () => void;
  onFaceIDClose: () => void;
};

const Attendance = ({
  schedule,
  attendedLessons = [],
  isFaceIDVisible,
  onFaceIDOpen,
  onFaceIDClose,
  onCapture,
  Classes,
  checkout
}: AttendanceProps) => {
  const attendanceHistoryAlert = useVisible();

  const checkoutHandler = () => {
    checkout(Classes.attendance.id);
  };

  const checkoutButton: Array<React.ComponentProps<typeof Button>> = [
    {
      title: localization.checkout,
      type: 'pink',
      onPress: checkoutHandler
    }
  ];

  const checkinButton: Array<React.ComponentProps<typeof Button>> = [
    {
      title: localization.checkIn,
      type: 'pink',
      onPress: onFaceIDOpen
    }
  ];

  const tabs = [
    {
      title: localization.today,
      content: <LessonList data={schedule} />
    },
    {
      title: localization.history,
      content: (
        <History
          lessons={attendedLessons}
          onLessonPress={attendanceHistoryAlert.show}
        />
      )
    }
  ];

  return (
    <TabbedContainer
      actionButtonOptions={
        'checkin' in Classes.attendance ? checkoutButton : checkinButton
      }
    >
      <FaceIDCapture
        loading={false}
        visible={isFaceIDVisible}
        onCapture={onCapture}
        onClose={onFaceIDClose}
      />
      <AttendanceHistoryAlert
        visible={attendanceHistoryAlert.isVisible}
        student={{
          firstName: 'Martin',
          lastName: 'Launderette'
        }}
        attendanceType="online"
        course="Cosmetology 101"
        date={new Date()}
        verificationEvents={[
          {
            time: '08:00am',
            status: 'verified-automatically'
          },
          {
            time: '09:00am',
            status: 'unverified'
          },
          {
            time: '10:00am',
            status: 'verified-manually'
          }
        ]}
        onOk={attendanceHistoryAlert.hide}
      />

      <Summary
        attendaceRating={0.945}
        upcomingLesson={{
          name: 'Beauty Therapy',
          time: '10:00am'
        }}
      />
      <TabGroup tabs={tabs} />
    </TabbedContainer>
  );
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Attendance);
