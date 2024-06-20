import React from 'react';
import { TouchableImage } from '../../../../../components';
import StudentListItem from '../../../common/StudentListItem';

import { ScaledSheet } from '../../../../../utils';
import colors from '../../../../../styles/colors';
import { images } from '../../../../../constants';

const styles = ScaledSheet.create({
  trashImage: {
    width: '23@s',
    height: undefined,
    aspectRatio: 1,
    tintColor: colors.redAlert
  }
});

type StudentListItemProps = React.ComponentProps<typeof StudentListItem>;

type RemovableStudentListItemProps = StudentListItemProps & {
  onDelete?: (item: any) => void;
};

const RemovableStudentListItem = ({
  onDelete,
  ...props
}: RemovableStudentListItemProps) => (
  <StudentListItem
    {...props}
    rightElement={
      <TouchableImage
        source={images.trash}
        imageStyle={styles.trashImage}
        onPress={() => onDelete && onDelete(props)}
      />
    }
  />
);

export default RemovableStudentListItem;
