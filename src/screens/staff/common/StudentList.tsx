import React from 'react';
import shortid from 'shortid';
import { View, FlatList, TextInput, Image } from 'react-native';

import { StudentLegacy } from '../../../constants/types';
import colors from '../../../styles/colors';
import textStyles from '../../../styles/textStyles';

import { ScaledSheet } from '../../../utils';
import { TextVariant } from '../../../components/Text';
import { images } from '../../../constants';

const styles = ScaledSheet.create({
  container: {
    flex: 1
  },

  headerContainer: {
    backgroundColor: colors.greyLight,
    paddingHorizontal: '30@s',
    paddingVertical: '13@s'
  },

  inputContainer: {
    flexDirection: 'row',
    backgroundColor: colors.white
  },

  input: {
    flex: 1,
    ...textStyles[TextVariant.Heading4GreyDarkRegular],
    backgroundColor: colors.white,
    padding: '5@s'
  },

  searchIcon: {
    alignSelf: 'center',
    marginRight: '8@s',
    width: '19@s',
    height: undefined,
    aspectRatio: 1,
    tintColor: colors.greyLight
  }
});

type RenderItemParams = {
  item: StudentLegacy;
  index: number;
};

type StudentListProps = {
  data: Array<StudentLegacy>;
  renderItem: ({ item, index }: RenderItemParams) => React.ReactElement;
  searchable?: boolean;
};

const StudentList = ({
  data,
  renderItem,
  searchable = false
}: StudentListProps) => (
  <View style={styles.container}>
    {searchable && (
      <View style={styles.headerContainer}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} />
          <Image
            style={styles.searchIcon}
            source={images.search}
            resizeMode="contain"
          />
        </View>
      </View>
    )}

    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={shortid.generate}
    />
  </View>
);

export default StudentList;
