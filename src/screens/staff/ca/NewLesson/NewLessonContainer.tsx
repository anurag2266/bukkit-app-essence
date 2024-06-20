import React, { useEffect, useCallback, useState } from 'react';
import NewLesson from './NewLesson';
import { NavigationScreenConfigProps } from 'react-navigation';
import { ErrorType } from 'constants/types';
import { connect } from 'react-redux';
import { Alert } from 'react-native';
import { AppState } from 'store';
import * as ACCActions from 'store/attendance/ca/courses/actions';
import * as ACSLctions from 'store/attendance/ca/staff/lessons/actions';

const mapStateToProps = (state: AppState) => ({
  courses: state.attendance.ca.courses.data,
  lesson: state.attendance.ca.staff.lessons.createLesson,
  personalBeacon: state.attendance.ca.staff.beacons.personal.data
});

const mapDispatchToProps = {
  getCourses: ACCActions.getCourses,
  createLesson: ACSLctions.createLesson,
  createLessonReset: ACSLctions.createLessonReset
};

export type NewLessonContainerProps = NavigationScreenConfigProps &
  ReturnType<typeof mapStateToProps> &
  {
    [key in keyof typeof mapDispatchToProps]: (
      ...args: Parameters<typeof mapDispatchToProps[key]>
    ) => void
  };

const NewLessonContainer = ({
  navigation,
  courses,
  lesson,
  personalBeacon,
  getCourses,
  createLesson,
  createLessonReset
}: NewLessonContainerProps) => {
  useEffect(() => {
    getCourses();
  }, []);
  const [beacons] = useState([]);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleCreate = useCallback(
    payload => {
      createLesson(payload);
    },
    [navigation]
  );
  useEffect(() => {
    if (lesson.isCreated) {
      navigation.goBack();
    }
  }, [lesson.isCreated]);

  useEffect(() => {
    if (lesson.error) {
      if (lesson.error.type === ErrorType.ValidationError) {
        Alert.alert(
          'Validation Error',
          lesson.error.details.map(({ message }: any) => message).join('\n')
        );
      } else {
        Alert.alert(
          'Something went wrong',
          'Please, check the form and try again'
        );
      }
    }
  }, [lesson.error]);

  useEffect(() => createLessonReset, []);

  return (
    <NewLesson
      beacons={beacons}
      courses={courses}
      personalBeaconId={personalBeacon ? personalBeacon.id : null}
      onBack={handleGoBack}
      onCreate={handleCreate}
    />
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewLessonContainer);
