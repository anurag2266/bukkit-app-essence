import React, { useMemo, useCallback } from 'react';
import AttendanceApproval from './AttendanceApproval';
import { NavigationScreenConfigProps } from 'react-navigation';
import { createFetcher } from '../../../../modules/fetcher';
import AttendanceAPI from '../../../../models/Attendance';
import { connect } from 'react-redux';
import { mapStateToProps } from '../../../../utils';
import { AttendanceStatus, ErrorType } from '../../../../constants/types';
import { Alert } from 'react-native';

const StudentApprovalDetailsFetcher = createFetcher({
  fetch: token => new AttendanceAPI(token).getStudentApprovalDetails
});

type AttendanceApprovalContainerProps = {
  Auth: any;
} & NavigationScreenConfigProps;

const AttendanceApprovalContainer = ({
  navigation,
  Auth
}: AttendanceApprovalContainerProps) => {
  const attendanceApi = useMemo(() => new AttendanceAPI(Auth.authToken), [
    Auth
  ]);

  const params = useMemo(
    () => ({
      lessonId: navigation.getParam('lessonId'),
      date: navigation.getParam('date'),
      studentId: navigation.getParam('studentId')
    }),
    []
  );

  const handleBack = () => navigation.goBack();

  const handleConfirmApproval = useCallback(async () => {
    try {
      const payload = {
        status: AttendanceStatus.Approved,
        lessonId: navigation.getParam('lessonId'),
        date: navigation.getParam('date'),
        studentId: navigation.getParam('studentId')
      };
      const response = await attendanceApi.updateStudentAttendance(payload);

      if (response.success) {
        navigation.goBack();
      } else if (response.error.type === ErrorType.ValidationError) {
        Alert.alert(
          'Validation Error',
          response.error.details.map(({ message }) => message).join('\n')
        );
      } else {
        Alert.alert(
          'Something went wrong',
          'Please, check the form and try again'
        );
      }
    } catch (error) {
      Alert.alert('Failied to approve attendance', error.message);
    }
  }, [attendanceApi]);

  const handleSubmitRejection = useCallback(async (message: string) => {
    try {
      const payload = {
        status: AttendanceStatus.Rejected,
        lessonId: navigation.getParam('lessonId'),
        date: navigation.getParam('date'),
        studentId: navigation.getParam('studentId'),
        message
      };
      const response = await attendanceApi.updateStudentAttendance(payload);

      if (response.success) {
        navigation.goBack();
      } else if (response.error.type === ErrorType.ValidationError) {
        Alert.alert(
          'Validation Error',
          response.error.details.map(item => item.message).join('\n')
        );
      } else {
        Alert.alert(
          'Something went wrong',
          'Please, check the form and try again'
        );
      }
    } catch (error) {
      Alert.alert('Failied to reject attendance', error.message);
    }
  }, []);

  return (
    <StudentApprovalDetailsFetcher params={params}>
      {({ state: { data } }) => (
        <AttendanceApproval
          details={data}
          date={navigation.getParam('date') as string}
          onBack={handleBack}
          onConfirmApproval={handleConfirmApproval}
          onSubmitRejection={handleSubmitRejection}
        />
      )}
    </StudentApprovalDetailsFetcher>
  );
};

export default connect(mapStateToProps)(AttendanceApprovalContainer);
