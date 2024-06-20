import React, { useEffect } from 'react';
import Attendance from './Attendance';
import { connect } from 'react-redux';
import { screens } from 'constants';
import { NavigationScreenProps } from 'react-navigation';
import { LessonsScheduleItem } from 'constants/types';
import { AppState } from 'store';
import * as ACSLActions from 'store/attendance/ca/staff/lessons/actions';

const mapStateToProps = (state: AppState) => ({
  schedule: state.attendance.ca.staff.lessons.schedule.data,
  history: state.attendance.ca.staff.lessons.history.data,
  summary: state.attendance.ca.staff.lessons.summary.data
});

const mapDispatchToProps = {
  getSchedule: ACSLActions.getSchedule,
  getSummary: ACSLActions.getSummary,
  getHistory: ACSLActions.getHistory
};

type AttendanceContainerProps = NavigationScreenProps &
  ReturnType<typeof mapStateToProps> &
  {
    [key in keyof typeof mapDispatchToProps]: (
      ...args: Parameters<typeof mapDispatchToProps[key]>
    ) => void
  };

const AttendanceContainer = ({
  navigation,
  schedule,
  history,
  summary,
  getSchedule,
  getSummary,
  getHistory
}: AttendanceContainerProps) => {
  useEffect(() => {
    getSchedule();
    getSummary();
    getHistory();
  }, [getSchedule, getSummary, getHistory]);

  const handleChooseLesson = (lesson: LessonsScheduleItem) => {
    navigation.navigate(screens.staff.ca.lessonDetail, {
      lessonId: lesson.id
    });
  };

  const handleApprove = (item: any) => {};
  const handleReject = (item: any) => {};

  const handleApprovalsPress = () =>
    navigation.navigate(screens.staff.ca.approvals);

  const handleStudentPress = () =>
    navigation.navigate(screens.staff.ca.studentAttendance);

  return (
    <Attendance
      schedule={schedule}
      history={history}
      summary={summary}
      onChooseLesson={handleChooseLesson}
      navigation={navigation}
      onApprovalsPress={handleApprovalsPress}
      onStudentPress={handleStudentPress}
    />
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AttendanceContainer);
