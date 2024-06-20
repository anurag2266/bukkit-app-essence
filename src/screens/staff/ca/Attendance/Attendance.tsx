import React, { useState } from 'react';
import {
  TabbedContainer,
  TabGroup,
  Button,
  ConfirmFingerprintAlert
} from 'components';
import StudentList from 'screens/staff/common/StudentList';
import StudentListItem from 'screens/staff/common/SelectableStudentListItem';
import Summary from './components/Summary';
import HistoryList from './components/HistoryList';
import LessonList from './components/LessonList/LessonList';
import { localization, screens } from 'constants';
import { NavigationScreenConfigProps } from 'react-navigation';
import {
  LessonsScheduleItem,
  StaffLessonsAttendanceSummary,
  DayLessonsDetails
} from 'constants/types';
import { StaffStudentsTodayAttendanceFetcher } from 'common/fetchers';

type AttendanceProps = {
  summary: StaffLessonsAttendanceSummary | null;
  history: DayLessonsDetails[];
  schedule: LessonsScheduleItem[];
  navigation: NavigationScreenConfigProps['navigation'];
  onChooseLesson: (item: LessonsScheduleItem) => void;
  onStudentPress?: () => void;
  onApprovalsPress?: () => void;
};

const Attendance = ({
  schedule,
  history,
  summary,
  navigation,
  onChooseLesson,
  onStudentPress,
  onApprovalsPress
}: AttendanceProps) => {
  const [isFingerprintAlertVisible, setFingerprintAlertVisible] = useState(
    false
  );

  const showFingerprintAlert = () => setFingerprintAlertVisible(true);
  const hideFingerprintAlert = () => setFingerprintAlertVisible(false);

  const actionButtonOptions: Array<React.ComponentProps<typeof Button>> = [
    {
      title: localization.createLesson,
      type: 'pink',
      onPress: showFingerprintAlert
    }
  ];

  const tabs = [
    {
      title: localization.lessons,
      content: <LessonList data={schedule} onItemPress={onChooseLesson} />
    },
    {
      title: localization.students,
      content: (
        <StaffStudentsTodayAttendanceFetcher>
          {({ state: { data } }) => (
            <StudentList
              data={data || []}
              renderItem={({ item }) => (
                <StudentListItem
                  key={item.id}
                  {...item}
                  onPress={onStudentPress}
                />
              )}
              searchable
            />
          )}
        </StaffStudentsTodayAttendanceFetcher>
      )
    },
    {
      title: localization.history,
      content: <HistoryList data={history} searchable />
    }
  ];

  const handleFingerprintApproved = () => {
    hideFingerprintAlert();
    navigation.navigate(screens.staff.ca.newLesson);
  };

  return (
    <>
      <ConfirmFingerprintAlert
        visible={isFingerprintAlertVisible}
        onCancel={hideFingerprintAlert}
        onOkay={handleFingerprintApproved}
      />

      <TabbedContainer actionButtonOptions={actionButtonOptions}>
        <Summary summary={summary} onApprovalsPress={onApprovalsPress} />

        <TabGroup tabs={tabs} />
      </TabbedContainer>
    </>
  );
};

export default Attendance;
