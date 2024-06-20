import React from 'react';
import { Image } from 'react-native';
import ListItem from '../../../../../../components/ListItem';

import { ScaledSheet } from '../../../../../../utils';
import { StudentLegacy } from '../../../../../../constants/types';
import colors from '../../../../../../styles/colors';

const styles = ScaledSheet.create({
  container: {
    alignItems: 'flex-start',
    paddingHorizontal: '30@s',
    paddingVertical: 0,
    marginBottom: '23@s'
  },

  photoContainer: {
    width: '106@s',
    height: undefined,
    aspectRatio: 0.98,
    marginRight: '40@s'
  },

  campus: {
    color: colors.greyMedium
  },

  image: {
    flex: 1,
    width: 50,
    height: 50,
    resizeMode: 'cover',
  }
});

type StudentProfileProps = {
  student: StudentLegacy;
};

const StudentProfile = ({ student }: StudentProfileProps) => (
  <ListItem
    title={`${student.first_name} ${student.last_name}`}
    subtitle={student.campus}
    subtitleStyle={styles.campus}
    style={styles.container}
    leftElementContainerStyle={styles.photoContainer}
    leftElement={
      <Image
        source={{uri: student.photo}}
        resizeMode='cover'
        style={styles.image}/>
    }/>
);

export default StudentProfile;
