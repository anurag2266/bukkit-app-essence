import React from 'react';
import { FlatButton } from '../../../components';
import StudentListItem from './StudentListItem';

import { ScaledSheet } from '../../../utils';
import { StudentLegacy, Status } from '../../../constants/types';
import { localization } from '../../../constants';

const styles = ScaledSheet.create({
  button: {
    width: '68@s',
    height: '30@s'
  }
});

type StudentListItemProps = React.ComponentProps<typeof StudentListItem>;

type SelectableStudentListItemProps = StudentListItemProps & {
  isSelectable?: boolean;
};

const getButtonType = (status: Status) => {
  switch (status) {
    case 'rejected':
      return 'red';
    case 'irregular':
      return 'orange';
    case 'approved':
    default:
      return 'pink';
  }
};

const SelectableStudentListItem = ({
  first_name,
  last_name,
  campus,
  status,
  isSelectable = false,
  onPress
}: SelectableStudentListItemProps) => {
  const rightElement = isSelectable ? (
    <FlatButton
      style={styles.button}
      title={localization.select}
      type={getButtonType(status)}
      onPress={onPress}
    />
  ) : (
    undefined
  );

  return (
    <StudentListItem
      first_name={first_name}
      last_name={last_name}
      campus={campus}
      status={status}
      rightElement={rightElement}
      onPress={rightElement ? undefined : onPress}
    />
  );
};

export default SelectableStudentListItem;
