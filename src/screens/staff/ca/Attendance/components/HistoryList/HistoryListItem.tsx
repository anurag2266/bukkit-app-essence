import React from 'react';
import { ListItem, Text } from '../../../../../../components';
import { ScaledSheet, scale } from '../../../../../../utils';
import {
  LessonsScheduleItem,
  LessonType
} from '../../../../../../constants/types';
import { images, dateFormats } from '../../../../../../constants';
import colors from '../../../../../../styles/colors';
import { TextVariant } from '../../../../../../components/Text';
import { Image } from 'react-native';
import formatDate from 'date-fns/format';

const styles = ScaledSheet.create({
  container: {
    paddingVertical: '15@s'
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

  leftContainer: {
    marginRight: '15@s',
    justifyContent: 'center'
  },

  rightContainer: {
    height: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end'
  }
});

type HistoryListItemProps = {
  item: LessonsScheduleItem;
  onPress?: () => void;
};

const format = (date: string) => formatDate(new Date(date), dateFormats.time);

const HistoryListItem = ({ item, onPress }: HistoryListItemProps) => {
  const leftElementProps =
    item.type === LessonType.Online
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
    <ListItem
      title={item.name}
      subtitle={item.room}
      style={styles.container}
      leftElementContainerStyle={styles.leftContainer}
      rightElement={
        <Text variant={TextVariant.Heading4GreyDarkRegular}>
          {`${format(item.startsAt)} - ${format(item.endsAt)}`}
        </Text>
      }
      rightElementContainerStyle={styles.rightContainer}
      onPress={onPress}
      {...leftElementProps}
    />
  );
};

export default HistoryListItem;
