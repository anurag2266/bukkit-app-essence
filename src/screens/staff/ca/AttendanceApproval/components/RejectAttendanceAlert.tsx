import React, { useState } from 'react';
import { Image, TextInput } from 'react-native';
import { ScaledSheet, scale } from '../../../../../utils';
import { Alert, Text } from '../../../../../components';
import AlertButton from '../../../../../components/Alert/AlertButton';

import { localization, dateFormats, images } from '../../../../../constants';
import colors from '../../../../../styles/colors';
import textStyles from '../../../../../styles/textStyles';
import { TextVariant } from '../../../../../components/Text';

import formatDate from 'date-fns/format';
import { LessonType, UserShortDetails } from '../../../../../constants/types';

const styles = ScaledSheet.create({
  contentContainer: {
    alignItems: 'center'
  },

  avatar: {
    width: '106@s',
    height: undefined,
    aspectRatio: 1
  },

  name: {
    ...textStyles[TextVariant.Heading4GreyDarkRegular],
    textAlign: 'center',
    marginVertical: '10@s'
  },

  attendanceType: {
    width: '30@s',
    height: undefined,
    aspectRatio: 1,
    tintColor: colors.blueLight
  },

  course: {
    ...textStyles[TextVariant.Heading4GreyDarkBold],
    fontSize: scale(13),
    textAlign: 'center',
    textTransform: 'uppercase',
    marginVertical: '5@s'
  },

  date: {
    ...textStyles[TextVariant.Heading4GreyDarkRegular],
    textAlign: 'center',
    marginVertical: '5@s'
  },

  title: {
    textAlign: 'center'
  },

  input: {
    width: '100%',
    height: '85@s',

    ...textStyles[TextVariant.Heading4GreyDarkRegular],
    fontSize: scale(10),

    borderWidth: 1,
    marginTop: '15@s',
    paddingHorizontal: '10@s',
    paddingVertical: '10@s'
  }
});

const getAttendanceTypeIcon = (type?: LessonType) => {
  if (type) {
    return type === LessonType.Online ? images.globe2 : images.schoolCircle;
  }

  return images.questionCircle;
};

type RejectAttendanceAlertProps = React.ComponentProps<typeof Alert> & {
  student: UserShortDetails;
  type: LessonType;
  course: string;
  date: Date;

  onSubmit: (message: string) => void;
  onCancel: () => void;
};

const RejectAttendanceAlert = ({
  student,
  type,
  course,
  date,
  onSubmit,
  onCancel,
  ...props
}: RejectAttendanceAlertProps) => {
  const [message, setMessage] = useState('');
  const buttons: Array<React.ComponentProps<typeof AlertButton>> = [
    {
      title: localization.cancel,
      onPress: onCancel
    },
    {
      title: localization.submit,
      titleColor: colors.blueLight,
      onPress: () => onSubmit(message)
    }
  ];

  return (
    <Alert
      title={localization.reasonRejectAttendance}
      titleStyle={styles.title}
      contentContainerStyle={styles.contentContainer}
      buttons={buttons}
      avoidKeyboard
      {...props}
    >
      <Image
        style={styles.avatar}
        source={{
          uri: student.photo || 'https://api.adorable.io/avatars/285/edular.png'
        }}
        resizeMode="cover"
      />

      <Text style={styles.name}>
        {`${student.firstName} ${student.lastName}`}
      </Text>

      <Image
        style={styles.attendanceType}
        source={getAttendanceTypeIcon(type)}
        resizeMode="contain"
      />

      <Text style={styles.course}>{course}</Text>
      <Text style={styles.date}>{formatDate(date, dateFormats.dateYear)}</Text>

      <TextInput
        value={message}
        onChangeText={setMessage}
        style={styles.input}
        multiline
        placeholder={localization.enterReasonRejecting}
      />
    </Alert>
  );
};

export default RejectAttendanceAlert;
