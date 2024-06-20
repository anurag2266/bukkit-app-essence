import React, { useState } from 'react';
import { View, SectionList, Image } from 'react-native';
import Text, { TextVariant } from '../Text';
import SummaryBox from '../SummaryBox';
import SectionHeader from './SectionHeader';
import SectionItem from './SectionItem';
import Accordion from 'react-native-collapsible/Accordion';

import styles from './styles';
import { StudentFullRole, MonthlyClassAttendance, DailyClassAttendance } from '../../constants/types';
import { localization } from '../../constants';
import { ScrollView } from 'react-native-gesture-handler';

type AttendanceListProps = {
  summaryData: React.ComponentProps<typeof SummaryBox>['data'];
  data: Array<MonthlyClassAttendance>;
  studentType?: StudentFullRole;
  onDailyAttendancePress?: (item: DailyClassAttendance) => void;
};

const AttendanceList = ({
  summaryData,
  data,
  studentType,
  onDailyAttendancePress
}: AttendanceListProps) => {
  const [activeSections, setActiveSections] = useState<Array<number>>([]);

  const renderSectionHeader = (
    section: MonthlyClassAttendance,
    index: number,
    isActive: boolean
  ) => (
    <SectionHeader
      style={styles.sectionHeader}
      month={section.month}
      studentType={studentType}
      active={isActive}
    />
  );

  const renderSectionItem = ({
    data: weeklyAttendances
  }: MonthlyClassAttendance) => (
    <SectionItem
      data={weeklyAttendances}
      onDailyAttendancePress={onDailyAttendancePress}
    />
  );

  return (
    <View style={styles.container}>
      <SummaryBox data={summaryData} />
      {
        data.length > 0 && (
          <ScrollView style={styles.list}>
            <Accordion
              activeSections={activeSections}
              sections={data}
              renderContent={renderSectionItem}
              renderHeader={renderSectionHeader}
              onChange={setActiveSections}
              underlayColor="transparent"
            />
          </ScrollView>
        )
      }
      {
        data.length === 0 &&
          <View style={styles.noActivity}>
            <Text variant={TextVariant.Heading2GreyRegular}>{localization.noActivity}</Text>
          </View>
      }

    </View>
  );
};

export default AttendanceList;
