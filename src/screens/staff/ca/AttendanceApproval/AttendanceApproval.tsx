import React, { useCallback } from 'react';
import { View, Image, FlatList, ListRenderItemInfo } from 'react-native';
import { Container, Text, Button } from '../../../../components';
import styles from './styles';
import { localization, images, dateFormats } from '../../../../constants';
import formatDate from 'date-fns/format';
import VerificationEventItem from './components/VerificationEventItem';
import ApproveAttendanceAlert from './components/ApproveAttendanceAlert';
import useVisible from '../../../../hooks/useVisible';
import RejectAttendanceAlert from './components/RejectAttendanceAlert';
import {
  StudentAttendanceApprovalDetails,
  StudentAttendanceApprovalItem,
  LessonType
} from '../../../../constants/types';

const getAttendanceTypeIcon = (type?: LessonType) => {
  if (type) {
    return type === LessonType.Online ? images.globe2 : images.schoolCircle;
  }

  return images.questionCircle;
};

type AttendanceApprovalProps = {
  details: StudentAttendanceApprovalDetails | null;
  date: string;
  onBack?: () => void;
  onConfirmApproval: () => void;
  onSubmitRejection: (rejectionReason: string) => void;
};

const AttendanceApproval = ({
  details,
  date,
  onBack,
  onConfirmApproval,
  onSubmitRejection
}: AttendanceApprovalProps) => {
  const approveAlert = useVisible();
  const rejectAlert = useVisible();

  const handleConfirmApproval = () => {
    approveAlert.hide();
    onConfirmApproval();
  };

  const handleSubmitRejection = (message: string) => {
    rejectAlert.hide();
    onSubmitRejection(message);
  };

  const renderVerificationEvent = useCallback((
    info: ListRenderItemInfo<StudentAttendanceApprovalItem>
  ) => {
    const { item, index } = info;
    return (
      <VerificationEventItem
        time={formatDate(new Date(item.createdAt), dateFormats.time)}
        status={item.status}
        firstItem={index === 0}
      />
    );
  }, []);

  if (!details) {
    return null;
  }

  const { student, attendance, lesson } = details;

  const studentName = `${student.firstName} ${student.lastName}`;
  const startTime = attendance[0] ? attendance[0].createdAt : lesson.startsAt;
  const endTime = attendance[attendance.length - 1]
    ? attendance[attendance.length - 1].createdAt
    : lesson.endsAt;

  return (
    <Container
      contentContainerStyle={styles.container}
      title={localization.attendanceApproval}
      headerLeft={{
        icon: 'back',
        onPress: onBack
      }}
    >
      <ApproveAttendanceAlert
        student={studentName}
        startTime={formatDate(new Date(startTime), dateFormats.time)}
        endTime={formatDate(new Date(endTime), dateFormats.time)}
        date={new Date(date)}
        visible={approveAlert.isVisible}
        onCancel={approveAlert.hide}
        onConfirm={handleConfirmApproval}
      />

      <RejectAttendanceAlert
        student={student}
        type={lesson.type}
        course={lesson.courseName}
        date={new Date(date)}
        visible={rejectAlert.isVisible}
        onCancel={rejectAlert.hide}
        onSubmit={handleSubmitRejection}
      />

      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{
            uri:
              details?.student.photo || undefined
          }}
          resizeMode="cover"
        />

        <Text style={styles.name}>{studentName}</Text>

        <Image
          style={styles.attendanceType}
          source={getAttendanceTypeIcon(lesson.type)}
          resizeMode="contain"
        />

        <Text style={styles.course}>{lesson.courseName}</Text>
        <Text style={styles.date}>
          {formatDate(new Date(date), dateFormats.dateYear)}
        </Text>
      </View>

      <FlatList
        style={styles.verificationEvents}
        data={attendance}
        renderItem={renderVerificationEvent}
      />

      <View>
        <Button
          type="green"
          title={localization.approve.toUpperCase()}
          onPress={approveAlert.show}
        />
        <Button
          style={styles.rejectButton}
          type="dark-red"
          title={localization.reject.toUpperCase()}
          onPress={rejectAlert.show}
        />
      </View>
    </Container>
  );
};

export default AttendanceApproval;
