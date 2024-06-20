import * as React from 'react';
import { View, SectionList } from 'react-native';
import Text, { TextVariant } from '../Text';
import Container from '../Container';
import SectionItem from './SectionItem';
import SectionHeader from './SectionHeader';

import styles from './styles';
import { localization } from '../../constants';

type AttendanceDetailsProps = {
  type: 'ca' | 'da' | 'hybrid';
  title: string;
  onBack?: () => void;
  onLessonPress?: (data: any) => void;

  lessons?: Array<{ lesson: string; inTime: string; outTime: string }>;
  lessonHours?: number;

  events?: Array<{ event: string; with: string; time: string }>;
  attendanceHours?: number;
};

const AttendanceDetails = ({
  type,
  title,
  onBack,
  onLessonPress,
  lessons = [],
  lessonHours = 0,
  events = [],
  attendanceHours = 0
}: AttendanceDetailsProps) => {
  const caSection = {
    footer: localization.lessonHours(lessonHours),
    columns: [localization.lesson, localization.in, localization.out],
    data: lessons.map(i => [i.lesson, i.inTime, i.outTime]),
    onItemPress: onLessonPress
  };

  const daSection = {
    footer: localization.attendanceHours(attendanceHours),
    columns: [localization.event, localization.with, localization.time],
    data: events.map(i => [i.event, i.with, i.time])
  };

  let sections;

  if (type === 'ca') {
    sections = [caSection];
  } else if (type === 'da') {
    sections = [daSection];
  } else {
    sections = [caSection, daSection];
  }

  return (
    <Container
      contentContainerStyle={styles.container}
      title={title}
      headerLeft={{
        icon: 'back',
        onPress: onBack
      }}
    >
      <SectionList
        sections={sections}
        renderItem={({ item, section }) => (
          <SectionItem data={item} onPress={section.onItemPress} />
        )}
        renderSectionHeader={({ section: { columns } }) => (
          <SectionHeader data={columns} />
        )}
        renderSectionFooter={({ section: { footer } }) => (
          <Text style={styles.footer} variant={TextVariant.Heading4BlueBold}>
            {footer}
          </Text>
        )}
      />
    </Container>
  );
};

export default AttendanceDetails;
