import React, { useCallback, useEffect } from 'react';
import LessonDetail from './LessonDetail';
import { NavigationScreenConfigProps } from 'react-navigation';
import { connect } from 'react-redux';
import { Alert } from 'react-native';
import { AppState } from 'store';
import * as Actions from 'store/attendance/ca/staff/lessons/actions';

const mapStateToProps = (state: AppState) => ({
  lesson: state.attendance.ca.staff.lessons.currentLesson.details.data,
  students: state.attendance.ca.staff.lessons.currentLesson.students.data,
  isStopped: state.attendance.ca.staff.lessons.currentLesson.details.isStopped,
  isReminderSent: state.attendance.ca.staff.lessons.currentLesson.details.isReminderSent,
  onlineAttendance: state.attendance.ca.staff.lessons.currentLesson.onlineAttendance,
});

const mapDispatchToProps = {
  getCurrentLessonDetails: Actions.getCurrentLessonDetails,
  getCurrentLessonStudents: Actions.getCurrentLessonStudents,
  resetCurrentLesson: Actions.resetCurrentLesson,
  stopCurrentLesson: Actions.stopCurrentLesson,
  sendStudentsReminder: Actions.sendStudentsReminder,
  checkOnlineAttendance: Actions.checkOnlineAttendance,
};

type LessonDetailContainerProps = NavigationScreenConfigProps &
  ReturnType<typeof mapStateToProps> &
  {
    [key in keyof typeof mapDispatchToProps]: (
      ...args: Parameters<typeof mapDispatchToProps[key]>
    ) => void
  };

const LessonDetailContainer = ({
  navigation,
  lesson,
  students,
  isStopped,
  isReminderSent,
  onlineAttendance,
  getCurrentLessonDetails,
  getCurrentLessonStudents,
  resetCurrentLesson,
  stopCurrentLesson,
  sendStudentsReminder,
  checkOnlineAttendance
}: LessonDetailContainerProps) => {
  const lessonId = navigation.getParam('lessonId');

  useEffect(() => {
    getCurrentLessonDetails(lessonId);
    getCurrentLessonStudents(lessonId);
  }, [lessonId]);

  useEffect(() => resetCurrentLesson, []);

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  useEffect(() => {
    if (isStopped){
      navigation.goBack();
    }
  }, [isStopped]);

  useEffect(() => {
    if (isReminderSent){
      Alert.alert('Success', 'Reminders successfully sent');
    }
  }, [isReminderSent]);

  useEffect(() => {
    if (onlineAttendance.isLoaded){

      Alert.alert(
        'Online attendance successfully checked',
        [
          `Verified students: ${onlineAttendance.data.verified}`,
          `Absent students: ${onlineAttendance.data.absent}`
        ].join('\n')
      );
    }
  }, [onlineAttendance.isLoaded])

  useEffect(() => {
    if (onlineAttendance.error){
      const message = onlineAttendance.error.details
        ? onlineAttendance.error.details.message
        : onlineAttendance.error.message;

      Alert.alert('Failed to check online attendance', message);
    }
  }, [onlineAttendance.error])

  const handleLessonStop = useCallback(() => {
    stopCurrentLesson(lessonId);
  }, [stopCurrentLesson, lessonId]);

  const handleSendReminder = useCallback(async () => {
    sendStudentsReminder(lessonId);
  }, [sendStudentsReminder, lessonId]);

  const handleLessonOnlineAttendanceCheck = useCallback( () => {
    checkOnlineAttendance(lessonId);
  }, [checkOnlineAttendance,lessonId]);

  return (
    <LessonDetail
      lesson={lesson}
      students={students}
      onBack={handleGoBack}
      onEndLesson={handleLessonStop}
      onSendReminder={handleSendReminder}
      onOnlineAttendanceCheck={handleLessonOnlineAttendanceCheck}
      isOnlineAttendanceChecking={onlineAttendance.isLoading}
    />
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LessonDetailContainer);
