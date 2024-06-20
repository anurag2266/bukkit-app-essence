import React, { useMemo, useState, useCallback } from 'react';
import { View, Image, SectionList, ListRenderItemInfo } from 'react-native';
import { Container, Text, TabGroup } from '../../../../components';
import StudentItem from './components/StudentItem';
import History from './components/History';
import styles from './styles';
import { localization, dateFormats } from '../../../../constants';
import { createFetcher } from '../../../../modules/fetcher';
import AttendanceAPI from '../../../../models/Attendance';
import formatDate from 'date-fns/format';
import { LessonAttendanceDetails } from '../../../../constants/types';

const UserShortDetailsFetcher = createFetcher({
  fetch: token => new AttendanceAPI(token).getUserShortDetails
});

const StudentLessonsAttendanceHistoryFetcher = createFetcher({
  fetch: token => new AttendanceAPI(token).getStudentLessonsAttendanceHistroy
});

const StudentOutstandingLessonsFetcher = createFetcher({
  fetch: token => new AttendanceAPI(token).getStudentOutstandingLessons
});

const StudentAttendanceSummaryFetcher = createFetcher({
  fetch: token => new AttendanceAPI(token).getStudentAttendanceSummary
});

type StudentAttendanceProps = {
  studentId: number;
  onBack?: () => void;
  onAttendanceItemPress?: (item: LessonAttendanceDetails) => void;
};

const StudentAttendance = ({
  onBack,
  onAttendanceItemPress,
  studentId
}: StudentAttendanceProps) => {
  const [selectedDate, setSelectedDate] = useState<string>(
    formatDate(new Date(), dateFormats.yearMonthDay)
  );

  const handleItemPress = useCallback(
    (item: LessonAttendanceDetails) => {
      if (onAttendanceItemPress) {
        onAttendanceItemPress(item);
      }
    },
    [onAttendanceItemPress]
  );

  const renderItem = (info: ListRenderItemInfo<LessonAttendanceDetails>) => {
    const { item } = info;

    return (
      <StudentItem
        key={item.id}
        inTime={formatDate(new Date(item.startsAt), dateFormats.time)}
        outTime={formatDate(new Date(item.endsAt), dateFormats.time)}
        date={new Date(item.date)}
        type={item.type}
        onPress={() => handleItemPress(item)}
      />
    );
  };

  const tabs = [
    {
      title: localization.outstanding,
      content: (
        <StudentOutstandingLessonsFetcher params={{ studentId }}>
          {({ state: { data } }) => (
            <SectionList
              contentContainerStyle={styles.list}
              sections={data || []}
              renderItem={renderItem}
              renderSectionHeader={({ section }) => (
                <Text style={styles.header}>{section.course.name}</Text>
              )}
              renderSectionFooter={() => <View style={styles.footer} />}
            />
          )}
        </StudentOutstandingLessonsFetcher>
      )
    },
    {
      title: localization.history,
      content: (
        <StudentLessonsAttendanceHistoryFetcher
          params={{ studentId, date: selectedDate }}
        >
          {({ state: { data } }) => (
            <History
              lessons={data || []}
              date={selectedDate}
              onDateChange={setSelectedDate}
            />
          )}
        </StudentLessonsAttendanceHistoryFetcher>
      )
    }
  ];

  return (
    <Container
      title={localization.studentAttendance}
      headerLeft={{
        icon: 'back',
        onPress: onBack
      }}
    >
      <UserShortDetailsFetcher params={{ userId: studentId }}>
        {({ state: { data: student } }) => (
          <View style={styles.profile}>
            <Image
              source={{ uri: student ? student.photo : undefined }}
              style={styles.avatar}
              resizeMode="cover"
            />

            <View style={styles.profileInfoContainer}>
              <StudentAttendanceSummaryFetcher params={{ studentId }}>
                {({ state: { data: summary } }) => {
                  const hours = summary ? Math.floor(summary.attendedHours) : 0;
                  const rate = summary
                    ? Math.floor(
                      (summary.attendedHours / summary.totalHours) * 100
                    )
                    : 0;

                  return (
                    <View style={styles.profileInfoHeader}>
                      <View style={styles.hoursContainer}>
                        <Text style={styles.profileInfoHeaderLabel}>
                          {localization.hours}
                        </Text>
                        <Text style={styles.profileInfoHeaderValue}>
                          {hours}
                        </Text>
                      </View>

                      <View>
                        <Text style={styles.profileInfoHeaderLabel}>
                          {localization.rate}
                        </Text>
                        <Text style={styles.profileInfoHeaderValue}>
                          {`${rate}%`}
                        </Text>
                      </View>
                    </View>
                  );
                }}
              </StudentAttendanceSummaryFetcher>

              <View>
                <Text style={styles.name}>
                  {student ? `${student.firstName} ${student.lastName}` : ''}
                </Text>
                <Text style={styles.campus}>
                  {student ? student.campus : ''}
                </Text>
              </View>
            </View>
          </View>
        )}
      </UserShortDetailsFetcher>
      <TabGroup tabs={tabs} />
    </Container>
  );
};

export default StudentAttendance;
