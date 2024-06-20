import React from 'react';
import Attendance from './Attendance';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from 'utils';
import { FaceRecognitionState } from 'reducers';
import { screens, mockData } from 'constants';
import { NavigationScreenProps } from 'react-navigation';
import { DailyClassAttendance } from 'constants/types';

interface HomeAttendanceCAContainerProps extends NavigationScreenProps {
  searchFace: (path: string) => void;
  FaceRecognition: FaceRecognitionState;
  Beacons: any;
  Attendance: any;
  listenBeacons: Function;
  getAttendance: Function;
}

const HomeAttendanceCAContainer = (props: HomeAttendanceCAContainerProps) => {
  const {
    navigation,
    searchFace,
    FaceRecognition,
    Beacons,
    Attendance: AttendanceData,
    listenBeacons,
    getAttendance
  } = props;

  if (
    !AttendanceData.loaded &&
    !AttendanceData.loading &&
    !AttendanceData.error
  ) {
    getAttendance();
  }

  if (FaceRecognition.loaded && FaceRecognition.faceToken.trim().length > 0) {
    navigation.navigate(screens.student.da.chooseHotspot);
  }

  if (!Beacons.loaded && !Beacons.loading) {
    listenBeacons();
  }
  const handleCapture = (file: any) => {
    searchFace(file.uri);
  };
  const summaryData =
    'summary' in AttendanceData.data ? AttendanceData.data.summary : [];
  const attendanceData =
    'details' in AttendanceData.data ? AttendanceData.data.details : [];

  const handleDailyAttendacePress = (item: DailyClassAttendance) =>
    navigation.navigate(screens.student.da.attendanceDetails, {
      dailyAttendance: item
    });

  return (
    <Attendance
      summaryData={summaryData}
      attendanceData={mockData.studentAttendances.ca}
      onCapture={handleCapture}
      FaceRecognition={FaceRecognition}
      onDailyAttendancePress={handleDailyAttendacePress}
    />
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeAttendanceCAContainer);
