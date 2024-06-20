import React from 'react';
import { View, FlatList } from 'react-native';
import Button from '../Button';
import Text, { TextVariant } from '../Text';
import Container from '../Container';
import BeaconItem from './BeaconItem';

import { images, localization } from '../../constants';
import { Beacon } from '../../constants/types';
import { NavigationScreenProps } from 'react-navigation';
import styles from './styles';

type ChooseBeaconProps = NavigationScreenProps & {
  title: string;
  beacons?: Array<Beacon>;
  footerText?: string;
  onRefresh?: () => void;
  onChooseBeacon?: (beacon: Beacon) => void;
};

const ChooseBeacon = ({
  title,
  beacons = [],
  footerText,
  onRefresh,
  onChooseBeacon = () => null,
  navigation
}: ChooseBeaconProps) => {
  const renderBeaconItem = ({ item }: { item: Beacon }) => {
    return <BeaconItem {...item} onPress={() => onChooseBeacon(item)} />
  };
  const actionButtonOptions: Array<React.ComponentProps<typeof Button>> = [
    {
      title: localization.refresh,
      type: 'pink',
      onPress: onRefresh
    }
  ];
  const isScrollEnabled = beacons.length > 4;
  let key = 0;
  return (
    <Container
      contentContainerStyle={styles.contentContainer}
      title={title}
      headerLeft={{
        icon: 'back',
        onPress: () => navigation.goBack()
      }}
      headerRight={{ icon: 'questionMark' }}
      actionImageSource={images.flash}
      actionButtonOptions={actionButtonOptions}
    >
      <View style={styles.listContainer}>
        <FlatList
          data={beacons}
          renderItem={renderBeaconItem}
          showsVerticalScrollIndicator={false}
          scrollEnabled={isScrollEnabled}
          keyExtractor={(item) =>  item.name + key++ }
        />
      </View>

      <Text variant={TextVariant.Heading2GreyRegular}>{footerText}</Text>
    </Container>
  );
};

export default ChooseBeacon;
