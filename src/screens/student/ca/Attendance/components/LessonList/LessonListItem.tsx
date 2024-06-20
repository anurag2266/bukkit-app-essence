import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { ListItem, Text } from 'components';

import { ScaledSheet, scale } from 'utils';
import { images, dateFormats } from 'constants';
import colors from 'styles/colors';
import { TextVariant } from 'components/Text';
import { TouchableOpacity } from 'react-native-gesture-handler';
import formatDate from 'date-fns/format';

import { LessonsScheduleItem, LessonType } from 'constants/types';

const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: '30@s'
  },

  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  time: {
    backgroundColor: colors.white
  },

  timelineBorder: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '50%',
    height: '100%',
    borderRightWidth: StyleSheet.hairlineWidth
  },

  itemContainer: {
    flex: 1,
    paddingVertical: '15@s',
    paddingHorizontal: 0,
    marginLeft: '20@s'
  },

  classImage: {
    width: '30@s',
    height: undefined,
    aspectRatio: 1.07,
    tintColor: colors.greyDark
  },

  globeImage: {
    position: 'absolute',
    top: -scale(5),
    right: -scale(7),

    width: '20@s',
    height: undefined,
    aspectRatio: 1,
    tintColor: colors.blueLight
  },

  itemLeftContainer: {
    marginRight: '15@s',
    justifyContent: 'center'
  }
});

type LessonListItemProps = {
  data: LessonsScheduleItem;
  onPress?: () => void;
};

const LessonListItem = ({ data, onPress }: LessonListItemProps) => {
  const leftElementProps =
    data.type === LessonType.Online
      ? {
          leftElement: (
            <>
              <Image
                source={images.globe}
                style={styles.globeImage}
                resizeMode="contain"
              />
              <Image
                source={images.class}
                style={styles.classImage}
                resizeMode="stretch"
              />
            </>
          )
        }
      : {
          leftIcon: {
            source: images.class,
            style: styles.classImage,
            resizeMode: 'stretch'
          }
        };

  return (
    <TouchableOpacity
      style={styles.container}
      disabled={!data.active}
      onPress={onPress}
    >
      <View style={styles.timeContainer}>
        <View style={styles.timelineBorder} />
        <Text style={styles.time} variant={TextVariant.Heading4GreyDarkRegular}>
          {formatDate(new Date(data.startsAt), dateFormats.time)}
        </Text>
      </View>
      <ListItem
        title={data.name}
        subtitle={data.room}
        style={styles.itemContainer}
        leftElementContainerStyle={styles.itemLeftContainer}
        {...(data.active ? { rightIcon: { source: images.play } } : {})}
        {...leftElementProps}
      />
    </TouchableOpacity>
  );
};

export default LessonListItem;
