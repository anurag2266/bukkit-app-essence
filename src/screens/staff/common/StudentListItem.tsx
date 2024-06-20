import React from 'react';
import { ListItem } from '../../../components';

import { ScaledSheet } from '../../../utils';
import { StudentLegacy, Status } from '../../../constants/types';
import { images } from '../../../constants';

const styles = ScaledSheet.create({
  studentImage: {
    width: '30@s',
    height: undefined,
    aspectRatio: 1.07
  }
});

type StudentListItemProps = StudentLegacy & {
  rightElement?: React.ReactElement;
  onPress?: () => void;
};

const getStatusImage = (status: Status) => {
  switch (status) {
    case 'approved':
      return images.checkCircle;
    case 'rejected':
      return images.warningTriangle;
    case 'irregular':
    default:
      return images.exclamationCircle;
  }
};

const StudentListItem = ({
  first_name,
  last_name,
  campus,
  status,
  rightElement,
  onPress
}: StudentListItemProps) => (
  <ListItem
    title={`${first_name} ${last_name}`}
    subtitle={campus}
    leftIcon={{
      source: getStatusImage(status)
    }}
    rightElement={rightElement}
    onPress={onPress}
  />
);

export default StudentListItem;
