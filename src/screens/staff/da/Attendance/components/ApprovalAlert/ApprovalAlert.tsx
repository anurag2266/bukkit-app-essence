import React from 'react';
import { View } from 'react-native';
import moment from 'moment';
import { Alert, TextInput } from '../../../../../../components';
import AlertButton from '../../../../../../components/Alert/AlertButton';
import StudentProfile from './StudentProfile';
import ApprovalStatus from './ApprovalStatus';

import styles from './styles';
import { localization } from '../../../../../../constants';
import colors from '../../../../../../styles/colors';
import { StudentLegacy, Class } from '../../../../../../constants/types';

const getTimeDiff = (startTime: string, gradePeriod: number, endTime: string) => {
  const start = moment(startTime);
  const duration = moment.duration(start.diff(endTime));
  const minutes = duration.asMinutes();

  return Math.abs(minutes) <= Math.abs(gradePeriod) ? 0: minutes;
};

type AlertProps = React.ComponentProps<typeof Alert>;
type AlertButtonProps = React.ComponentProps<typeof AlertButton>;

type ApprovalAlertProps = AlertProps & {
  data: any;
  onCancel?: () => void;
  onReject?: (student: any) => void;
  onApprove?: (student: any) => void;
};

const ApprovalAlert = ({
  data,
  onCancel,
  onReject = () => null,
  onApprove = () => null,
  ...props
}: ApprovalAlertProps) => {
  const buttons: Array<AlertButtonProps> = [
    {
      title: localization.cancel,
      titleColor: colors.greyDark,
      onPress: onCancel
    },
    {
      title: localization.reject,
      titleColor: colors.greyDark,
      onPress: () => onReject(data)
    },
    {
      title: localization.approve,
      titleColor: colors.blueLight,
      onPress: () => onApprove(data)
    }
  ];
  let startsAt;
  let endsAt;
  let checkinDiff = 0;
  let checkoutDiff = 0;

  if (data) {
    startsAt = moment.utc(data.stars_at).local().format('HH:mm');
    endsAt   = moment.utc(data.ends_at).local().format('HH:mm');
    checkinDiff = getTimeDiff(data.stars_at, data.start_grace_period, data.checkin);
    checkoutDiff = getTimeDiff(data.ends_at, data.end_grace_period, data.checkout);
  }

  return (
    <Alert
      visible
      contentContainerStyle={styles.container}
      title={localization.attendanceApproval}
      buttons={buttons}
      {...props}
    >
        {
          data &&
          <StudentProfile student={data} />
        }
        {
          data &&
          <ApprovalStatus checkinValue={checkinDiff} checkoutValue={checkoutDiff} />
        }
        {
          data &&
          <View style={styles.form}>
            <TextInput label={localization.classTitle} value={data.name} />
            <TextInput
              containerStyle={styles.inputContainer}
              label={localization.instructor}
              value={data.description}
            />

            <View style={styles.multiInputRowContainer}>
              <TextInput
                containerStyle={[
                  styles.inputContainer,
                  styles.leftHalftInputContainer
                ]}
                label={localization.classStart}
                value={startsAt}
              />
              <TextInput
                containerStyle={[
                  styles.inputContainer,
                  styles.rightHalftInputContainer
                ]}
                label={localization.classEnd}
                value={endsAt}
              />
            </View>
          </View>
        }
    </Alert>
  );
};

export default ApprovalAlert;
