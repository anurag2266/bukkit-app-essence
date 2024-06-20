import React from 'react';
import { ScaledSheet } from '../../../../../utils';
import { Alert, ListItem } from '../../../../../components';
import AlertButton from '../../../../../components/Alert/AlertButton';

import { localization, dateFormats, images } from '../../../../../constants';
import colors from '../../../../../styles/colors';
import { TextFontFamily } from '../../../../../components/Text';

import formatDate from 'date-fns/format';

const styles = ScaledSheet.create({
  contentContainer: {},

  content: {
    paddingHorizontal: 0,
    paddingVertical: 0
  },

  icon: {
    marginRight: '10@s'
  },

  title: {
    fontFamily: TextFontFamily.Regular
  }
});

type ApproveAttendanceAlertProps = React.ComponentProps<typeof Alert> & {
  student: string;
  startTime: string;
  endTime: string;
  date: Date;

  onConfirm?: () => void;
  onCancel?: () => void;
};

const ApproveAttendanceAlert = ({
  student,
  startTime,
  endTime,
  date,
  onConfirm,
  onCancel,
  ...props
}: ApproveAttendanceAlertProps) => {
  const buttons: Array<React.ComponentProps<typeof AlertButton>> = [
    {
      title: localization.cancel,
      onPress: onCancel
    },
    {
      title: localization.confirm,
      titleColor: colors.blueLight,
      onPress: onConfirm
    }
  ];

  return (
    <Alert
      title={localization.approveAttendance}
      contentContainerStyle={styles.contentContainer}
      buttons={buttons}
      {...props}
    >
      <ListItem
        style={styles.content}
        leftIcon={{
          source: images.checkCircle
        }}
        leftElementContainerStyle={styles.icon}
        title={student}
        titleStyle={styles.title}
        subtitle={`${startTime}-${endTime}  ${formatDate(
          date,
          dateFormats.dateYear
        )}`}
      />
    </Alert>
  );
};

export default ApproveAttendanceAlert;
