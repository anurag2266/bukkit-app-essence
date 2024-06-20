import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import ChooseClass from './ChooseClass';
import { NavigationScreenProps } from 'react-navigation';
import { screens, dateFormats } from 'constants';
import * as Actions from 'actions';
import { AppState } from 'store';
import { LessonDetails } from 'constants/types';
import formatDate from 'date-fns/format';

const mapStateToProps = (state: AppState) => ({
  classes: state.Classes,
  faceRecognition: state.FaceRecognition,
  lessons: state.attendance.ca.beacons.lessons.data
});

const mapDispatchToProps = {
  checkin: Actions.checkin
};

type ChooseClassContainerProps = NavigationScreenProps &
  ReturnType<typeof mapStateToProps> &
  {
    [key in keyof typeof mapDispatchToProps]: (
      ...args: Parameters<typeof mapDispatchToProps[key]>
    ) => void
  };

const noop = () => {};

const ChooseClassContainer = ({
  classes,
  faceRecognition,
  lessons,
  navigation,
  checkin
}: ChooseClassContainerProps) => {
  const onConfirmBeacon = (lesson: any) => {
    checkin(lesson.id, faceRecognition.faceToken);
  };

  if ('checkin' in classes.attendance) {
    navigation.navigate(screens.student.ca.attendance);
  }

  const beacons = useMemo(
    () =>
      lessons.map((lesson: LessonDetails) => ({
        id: lesson.id,
        name: lesson.course.name,
        title: [lesson.startsAt, lesson.endsAt]
          .map(date => formatDate(new Date(date), dateFormats.time))
          .join(' — ')
      })),
    [lessons]
  );

  return (
    <ChooseClass
      beacons={beacons}
      // @ts-ignore — todo: delete
      onRefresh={noop}
      onConfirmBeacon={onConfirmBeacon}
      navigation={navigation}
    />
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChooseClassContainer);
