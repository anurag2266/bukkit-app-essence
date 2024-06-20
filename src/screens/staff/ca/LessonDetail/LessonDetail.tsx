import React, { useMemo } from 'react';
import { View } from 'react-native';
import {
  Container,
  Text,
  TextInput,
  TabGroup,
  Button
} from '../../../../components';
import { localization, dateFormats } from '../../../../constants';
import StudentList from './components/StudentList';
import styles from './styles';
import {
  LessonDetails,
  StudentAttendanceListItemDetails
} from '../../../../constants/types';
import formatDate from 'date-fns/format';

type LessonDetailProps = {
  lesson: LessonDetails | null;
  students: StudentAttendanceListItemDetails[];
  isOnlineAttendanceChecking?: boolean;
  onEndLesson?: () => void;
  onSendReminder?: () => void;
  onBack?: () => void;
  onOnlineAttendanceCheck: () => void;
};

const LessonDetail = ({
  lesson,
  students,
  isOnlineAttendanceChecking = false,
  onEndLesson,
  onSendReminder,
  onBack,
  onOnlineAttendanceCheck
}: LessonDetailProps) => {
  const presentStudents = useMemo(() => students.filter(s => s.verified), [
    students
  ]);

  const absentStudents = useMemo(() => students.filter(s => !s.verified), [
    students
  ]);

  const tabs = [
    {
      title: localization.all,
      content: <StudentList students={students} onEndLesson={onEndLesson} />
    },
    {
      title: localization.present,
      content: <StudentList students={presentStudents || []} type="present" />
    },
    {
      title: localization.absent,
      content: (
        <StudentList
          students={absentStudents}
          type="absent"
          onSendReminder={onSendReminder}
        />
      )
    }
  ];

  return (
    <Container
      contentContainerStyle={styles.container}
      title={lesson ? lesson.course.name : ''}
      headerLeft={{
        icon: 'back',
        onPress: onBack
      }}
    >
      <View style={styles.detailsContainer}>
        {!!lesson && (
          <>
            <Text style={styles.headerTitle}>
              {formatDate(new Date(lesson.startsAt), dateFormats.dateTime)}
            </Text>

            <TextInput
              containerStyle={styles.input}
              label={localization.onlineVideoUrl}
              value={lesson.onlineVideoUrl}
              editable={false}
            />

            <View style={styles.timeContainer}>
              <View style={styles.beginContainer}>
                <TextInput
                  style={styles.timeInput}
                  containerStyle={styles.input}
                  label={localization.classBegins}
                  value={formatDate(
                    new Date(lesson.startsAt),
                    dateFormats.time
                  )}
                  editable={false}
                />
                <TextInput
                  style={styles.timeInput}
                  containerStyle={styles.input}
                  label={localization.beginGracePeriod}
                  value={`${localization.minutes(lesson.startGracePeriod)}`}
                  editable={false}
                />
              </View>
              <View>
                <TextInput
                  style={styles.timeInput}
                  containerStyle={styles.input}
                  label={localization.classEnds}
                  value={formatDate(new Date(lesson.endsAt), dateFormats.time)}
                  editable={false}
                />
                <TextInput
                  style={styles.timeInput}
                  containerStyle={styles.input}
                  label={localization.endGracePeriod}
                  value={`${localization.minutes(lesson.endGracePeriod)}`}
                  editable={false}
                />
              </View>
            </View>
          </>
        )}
        <Button
          style={styles.checkOnlineAttendanceButton}
          type="green"
          title={localization.checkOnlineAttendance}
          onPress={onOnlineAttendanceCheck}
          disabled={isOnlineAttendanceChecking}
        />
      </View>

      <TabGroup tabs={tabs} />
    </Container>
  );
};

export default LessonDetail;
