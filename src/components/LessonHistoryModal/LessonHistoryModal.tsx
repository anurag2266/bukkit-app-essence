import * as React from 'react';
import { View, FlatList } from 'react-native';
import Button from '../Button';
import Text, { TextVariant } from '../Text';
import Modal from 'react-native-modal';

import styles from './styles';
import { localization, dateFormats } from '../../constants';

import formatDate from 'date-fns/format';

const formatAttendedTime = (minutes: number) => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;

  const formattedMinutes = `${mins}m`;

  if (hours < 1) {
    return formattedMinutes;
  }

  return `${hours}h${formattedMinutes}`;
};

type LessonHistoryModalProps = {
  visible?: boolean;
  data?: Array<{
    date: Date;
    in: string;
    out: string;
    minutesAttended: number;
  }>;
  lesson: string;
  programHours: number;
  onDismiss?: () => void;
};

const LessonHistoryModal = ({
  visible = false,
  data = [],
  lesson,
  programHours,
  onDismiss
}: LessonHistoryModalProps) => {
  const renderListHeader = () => (
    <View style={styles.listRow}>
      <Text style={[styles.columnHeader, styles.dateColumn]}>
        {localization.date}
      </Text>
      <Text style={[styles.columnHeader, styles.inColumn]}>
        {localization.in}
      </Text>
      <Text style={[styles.columnHeader, styles.outColumn]}>
        {localization.out}
      </Text>
      <Text style={[styles.columnHeader, styles.attendedColumn]}>
        {localization.attended}
      </Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <View style={styles.listRow}>
      <Text style={[styles.columnValue, styles.dateColumn]}>
        {formatDate(item.date, dateFormats.numberDate)}
      </Text>
      <Text style={[styles.columnValue, styles.inColumn]}>{item.in}</Text>
      <Text style={[styles.columnValue, styles.outColumn]}>{item.out}</Text>
      <Text style={[styles.columnValue, styles.attendedColumn]}>
        {formatAttendedTime(item.minutesAttended)}
      </Text>
    </View>
  );

  return (
    <Modal style={styles.modal} isVisible={visible} onBackdropPress={onDismiss}>
      <View style={styles.container}>
        <Text style={styles.lesson} variant={TextVariant.Heading1BlueRegular}>
          {lesson}
        </Text>
        <Text style={styles.hours} variant={TextVariant.Heading4GreyMediumBold}>
          {localization.programHours(programHours)}
        </Text>

        <FlatList
          style={styles.list}
          data={data}
          ListHeaderComponent={renderListHeader}
          renderItem={renderItem}
        />

        <Button
          title={localization.ok.toLowerCase()}
          type="pink"
          onPress={onDismiss}
        />
      </View>
    </Modal>
  );
};

export default LessonHistoryModal;
