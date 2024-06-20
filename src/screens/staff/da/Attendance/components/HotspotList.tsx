import React from 'react';
import shortid from 'shortid';
import { FlatList } from 'react-native';
import HotspotListItem from './HotspotListItem';

import { Hotspot } from '../../../../../constants/types';

type HotspotListProps = {
  data: Array<Hotspot>;
  onItemPress?: (item: Hotspot) => void;
};

const HotspotList = ({ data, onItemPress = () => null }: HotspotListProps) => (
  <FlatList
    data={data}
    renderItem={({ item }) => (
      <HotspotListItem {...item} onPress={() => onItemPress(item)} />
    )}
    keyExtractor={shortid.generate}
  />
);

export default HotspotList;
