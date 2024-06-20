import * as React from 'react';
import { ListItem } from 'components';
import { images } from 'constants';
import { ScaledSheet } from 'utils';
import colors from 'styles/colors';

const styles = ScaledSheet.create({
  container: {
    paddingHorizontal: 0,
    paddingVertical: '15@s'
  },

  leftContainer: {
    marginRight: '25@s'
  },

  icon: {
    width: '30@s',
    height: undefined,
    aspectRatio: 1,
    tintColor: colors.greyMedium
  },

  radioButotn: {
    width: '24@s',
    height: undefined,
    aspectRatio: 1
  }
});

const getIcon = (type: LessonTypeIcon) => {
  switch (type) {
    case 'online':
      return images.globe2;
    case 'device':
      return images.device;
    case 'beacon':
    default:
      return images.beacon;
  }
};

type LessonTypeItemProps = {
  name: string;
  location?: string;
  selected?: boolean;
  type: 'device' | 'online' | 'beacon';
  onPress?: () => void;
};

const LessonTypeItem = ({
  name,
  location,
  selected = false,
  type = 'beacon',
  onPress
}: LessonTypeItemProps) => (
  <ListItem
    style={styles.container}
    leftElementContainerStyle={styles.leftContainer}
    leftIcon={{
      source: getIcon(type),
      resizeMode: 'contain',
      style: styles.icon
    }}
    rightIcon={{
      source: selected ? images.radioButtonOn : images.radioButtonOff,
      resizeMode: 'contain',
      style: styles.radioButotn
    }}
    title={name}
    subtitle={location}
    onPress={onPress}
  />
);

export default LessonTypeItem;
