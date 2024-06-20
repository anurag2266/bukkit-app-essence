import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  mapStateToProps,
  mapDispatchToProps
} from '../../../../utils';
import {
  FaceRecognitionState
} from '../../../../reducers';

import {
  TabbedContainer,
  Button,
  AttendanceList,
  SummaryBox,
  FaceIDCapture
} from '../../../../components';
import { localization } from '../../../../constants';
import {
  MonthlyClassAttendance,
  StudentFullRole,
  DailyClassAttendance
} from '../../../../constants/types';

type AttendanceProps = {
  summaryData: React.ComponentProps<typeof SummaryBox>['data'];
  attendanceData: Array<MonthlyClassAttendance>;
  onCapture: (file: any) => void;
  FaceRecognition: FaceRecognitionState;
  Classes:any;
  checkout: Function;
  onDailyAttendancePress?: (item: DailyClassAttendance) => void;
};

const Attendance = ({
  summaryData,
  attendanceData,
  onCapture,
  FaceRecognition,
  Classes,
  checkout,
  onDailyAttendancePress
}: AttendanceProps) => {
  const [isFaceIDVisible, setFaceIDVisible] = useState(false);

  const showFaceID = () => setFaceIDVisible(true);
  const hideFaceID = () => setFaceIDVisible(false);

  const checkoutHandler = () => {
    checkout(Classes.attendance.id);
  };

  if (
    isFaceIDVisible &&
    !FaceRecognition.loading &&
    FaceRecognition.loaded &&
    FaceRecognition.faceToken.trim().length > 0
  ) {
    hideFaceID();
  }

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
      onPress: showFaceID
    }
  ];

  return (
    <TabbedContainer actionButtonOptions={'checkin' in Classes.attendance ? checkoutButton : checkinButton}>
      <FaceIDCapture
        visible={isFaceIDVisible}
        onCapture={onCapture}
        onClose={hideFaceID}
      />
      <AttendanceList
        summaryData={summaryData}
        data={attendanceData}
        studentType={StudentFullRole.DA}
        onDailyAttendancePress={onDailyAttendancePress}
      />
    </TabbedContainer>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Attendance);
