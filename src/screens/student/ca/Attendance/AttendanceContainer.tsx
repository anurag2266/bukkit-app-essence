import React, { useEffect, useState, useCallback } from 'react';
import Attendance from './Attendance';
import { connect } from 'react-redux';
import { screens, mockData } from 'constants';
import { NavigationScreenProps } from 'react-navigation';
import { DailyClassAttendance } from 'constants/types';
import { AppState } from 'store';
import * as Actions from 'actions';
import * as ACSLActions from 'store/attendance/ca/student/lessons/actions';

const mapStateToProps = (state: AppState) => ({
  schedule: state.attendance.ca.student.lessons.schedule.data,
  FaceRecognition: state.FaceRecognition,
  Attendance: state.Attendance
});

const mapDispatchToProps = {
  searchFace: Actions.searchFace,
  getAttendance: Actions.getAttendance,

  getSchedule: ACSLActions.getSchedule
};

type HomeAttendanceCAContainerProps = NavigationScreenProps &
  ReturnType<typeof mapStateToProps> &
  {
    [key in keyof typeof mapDispatchToProps]: (
      ...args: Parameters<typeof mapDispatchToProps[key]>
    ) => void
  };

const HomeAttendanceCAContainer = (props: HomeAttendanceCAContainerProps) => {
  const {
    schedule,
    navigation,
    searchFace,
    FaceRecognition,
    Attendance: AttendanceData,
    getAttendance,

    getSchedule
  } = props;

  useEffect(() => {
    getSchedule();
  }, [getSchedule]);

  const [isFaceIDVisible, setFaceIDVisible] = useState(false);
  const showFaceID = () => setFaceIDVisible(true);
  const hideFaceID = () => setFaceIDVisible(false);

  const handleFaceIDOpen = useCallback(() => {
    if (
      !FaceRecognition.loading &&
      FaceRecognition.loaded &&
      FaceRecognition.faceToken.trim().length > 0
    ) {
      navigation.navigate(screens.student.ca.chooseClass);
    } else {
      showFaceID();
    }
  }, [FaceRecognition]);

  useEffect(() => {
    if (
      isFaceIDVisible &&
      !FaceRecognition.loading &&
      FaceRecognition.loaded &&
      FaceRecognition.faceToken.trim().length > 0
    ) {
      hideFaceID();
    }
  }, [FaceRecognition, isFaceIDVisible]);

  useEffect(() => {
    if (
      !AttendanceData.loaded &&
      !AttendanceData.loading &&
      !AttendanceData.error
    ) {
      getAttendance();
    }
  }, [AttendanceData, getAttendance]);

  useEffect(() => {
    if (FaceRecognition.loaded && FaceRecognition.faceToken.trim().length > 0) {
      navigation.navigate(screens.student.ca.chooseClass);
    }
  }, [FaceRecognition, navigation]);

  const handleCapture = (file: any) => {
    searchFace(file.uri);
  };

  const handleDailyAttendacePress = (item: DailyClassAttendance) =>
    navigation.navigate(screens.student.ca.attendanceDetails, {
      dailyAttendance: item
    });

  return (
    <Attendance
      summaryData={mockData.studentAttendanceSummary.ca}
      attendanceData={mockData.studentAttendances.ca}
      schedule={schedule}
      attendedLessons={[
        {
          course: 'Salon Management',
          attendanceType: 'online',
          verified: false,
          inTime: '09:00am',
          outTime: '10:30am',
          hours: 1.5
        },
        {
          course: 'Cosmetology 101',
          attendanceType: 'online',
          verified: false,
          inTime: '09:00am',
          outTime: '10:30am',
          hours: 1.5
        }
      ]}
      onCapture={handleCapture}
      isFaceIDVisible={isFaceIDVisible}
      onFaceIDOpen={handleFaceIDOpen}
      onFaceIDClose={hideFaceID}
      onDailyAttendancePress={handleDailyAttendacePress}
    />
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeAttendanceCAContainer);
