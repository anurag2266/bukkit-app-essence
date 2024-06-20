import React, { useState } from 'react';
import shortid from 'shortid';
import { View, FlatList } from 'react-native';
import Alert from '../../../../../../components/Alert';
import AlertButton from '../../../../../../components/Alert/AlertButton';
import ListItem from '../../../../../../components/ListItem';
import Text, { TextVariant } from '../../../../../../components/Text';

import styles from './styles';
import { localization, images } from '../../../../../../constants';
import colors from '../../../../../../styles/colors';
import { Hotspot, HotspotConfig } from '../../../../../../constants/types';

type HotspotItem = {
  item: Hotspot;
  index: number;
};

type ConfigItem = {
  item: HotspotConfig;
  index: number;
};

type OnSubmitParams = {
  hotspot: Hotspot;
  config: HotspotConfig;
};

type OnManageParams = {
  config: HotspotConfig;
  index: number;
};

type ConfigureClassHotspotProps = React.ComponentProps<typeof Alert> & {
  hotspots: Array<Hotspot>;
  configs: Array<HotspotConfig>;
  onSubmit?: ({ hotspot, config }: OnSubmitParams) => void;
  onManage?: ({ config, index }: OnManageParams) => void;
  onCancel?: () => void;
};

const myDevice = {
  name: localization.myDevice,
  description: localization.currentLocation
};

const ConfigureClassHotspot = ({
  hotspots,
  configs,
  onSubmit = () => null,
  onManage = () => null,
  onCancel,
  ...props
}: ConfigureClassHotspotProps) => {
  const [selectedHotspotIndex, setSelectedHotspotIndex] = useState(0);
  const [selectedConfigIndex, setSelectedConfigIndex] = useState(0);

  const handleSubmit = () => {
    const hotspot = hotspots[selectedHotspotIndex];
    const config = configs[selectedConfigIndex];

    onSubmit({ hotspot, config });
  };

  const buttons: Array<React.ComponentProps<typeof AlertButton>> = [
    {
      title: localization.cancel,
      titleColor: colors.greyDark,
      onPress: onCancel
    },
    {
      title: localization.manage,
      titleColor: colors.greyDark,
      onPress: () =>
        onManage({
          config: configs[selectedConfigIndex],
          index: selectedConfigIndex
        })
    },
    {
      title: localization.ok,
      titleColor: colors.blueLight,
      onPress: handleSubmit
    }
  ];

  const renderHotspotItem = ({ item, index }: HotspotItem) => (
    <ListItem
      style={index === selectedHotspotIndex && styles.highlightedListItem}
      leftIcon={{
        source: index === 0 ? images.device : images.beacon,
        style: styles.icon,
        resizeMode: 'contain'
      }}
      leftElementContainerStyle={styles.iconContainer}
      title={item.name}
      subtitle={item.description}
      onPress={() => setSelectedHotspotIndex(index)}
    />
  );

  const renderConfigItem = ({ item, index }: ConfigItem) => (
    <ListItem
      style={index === selectedConfigIndex && styles.highlightedListItem}
      leftIcon={{
        source: images.teacher,
        style: styles.icon,
        resizeMode: 'stretch'
      }}
      leftElementContainerStyle={styles.iconContainer}
      title={item.title}
      subtitle={`${item.classStart} - ${item.classEnd}`}
      onPress={() => setSelectedConfigIndex(index)}
    />
  );

  return (
    <Alert
      contentContainerStyle={styles.container}
      title={localization.selectHotspot}
      buttons={buttons}
      {...props}
    >
      <FlatList
        style={hotspots.length >= 1 && styles.hotspotList}
        data={[myDevice, ...hotspots]}
        extraData={selectedHotspotIndex}
        renderItem={renderHotspotItem}
        scrollEnabled={hotspots.length > 1}
        keyExtractor={shortid.generate}
      />

      <View style={styles.configListContainer}>
        <Text
          style={styles.configListTitle}
          variant={TextVariant.Heading1GreyDarkRegular}
        >
          {localization.chooseConfiguration}
        </Text>

        <FlatList
          style={configs.length >= 3 && styles.configList}
          data={configs}
          extraData={selectedConfigIndex}
          renderItem={renderConfigItem}
          scrollEnabled={configs.length > 3}
          keyExtractor={shortid.generate}
        />
      </View>
    </Alert>
  );
};

export default ConfigureClassHotspot;
