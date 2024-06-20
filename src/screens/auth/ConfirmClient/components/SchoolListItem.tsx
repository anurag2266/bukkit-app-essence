import React from 'react';
import { ImageSourcePropType } from 'react-native';
import ListItem from '../../../../components/ListItem';

import { ScaledSheet } from '../../../../utils';

type SchoolListItemProps = {
  name?: string;
  location?: string;
  image?: string;
  onPress?: () => void;
};

const styles = ScaledSheet.create({
  container: {
    paddingHorizontal: 0,
    paddingVertical: 0
  },

  logoContainer: {
    width: '73@s',
    height: undefined,
    aspectRatio: 1.07,
    marginRight: '22@s'
  },

  logo: {
    flex: 1,
    height: undefined,
    width: undefined
  }
});

const SchoolListItem = ({
  name,
  location,
  image,
  onPress
}: SchoolListItemProps) => {
  const leftIcon = image && {
    leftIcon: {
      source: {uri: image},
      style: styles.logo
    }
  };

  return (
    <ListItem
      style={styles.container}
      title={name}
      subtitle={location}
      leftElementContainerStyle={styles.logoContainer}
      onPress={onPress}
      {...leftIcon}
    />
  );
};

export default SchoolListItem;
