import React, { useState } from 'react';
import shortid from 'shortid';
import { FlatList } from 'react-native';
import Alert from '../../../../../../components/Alert';
import AlertButton from '../../../../../../components/Alert/AlertButton';
import ListItem from '../../../../../../components/ListItem';
import TouchableImage from '../../../../../../components/TouchableImage';
import DeleteConfigAlert from './DeleteConfigAlert';

import styles from './styles';
import { localization, images } from '../../../../../../constants';
import colors from '../../../../../../styles/colors';
import { HotspotConfig } from '../../../../../../constants/types';
import HotspotConfigForm from '../HotspotConfigForm';

type ConfigItem = {
  item: HotspotConfig;
  index: number;
};

type ManageHotspotConfigProps = React.ComponentProps<typeof Alert> & {
  configs: Array<HotspotConfig>;
  defaultSelectedConfigIndex?: number;
  onCancel?: () => void;
  onNew?: () => void;
  onSubmit?: (config: HotspotConfig) => void;
  onDelete?: (config: HotspotConfig) => void;
};

const ManageHotspotConfig = ({
  configs,
  defaultSelectedConfigIndex = 0,
  onCancel,
  onNew,
  onSubmit = () => null,
  onDelete = () => null,
  ...props
}: ManageHotspotConfigProps) => {
  const [selectedConfigIndex, setSelectedConfigIndex] = useState(
    defaultSelectedConfigIndex
  );
  const [isDeleteAlertVisible, setDeleteAlertVisible] = useState(false);
  const [toBeDeletedConfigIndex, setToBeDeletedConfigIndex] = useState(0);

  const hideDeleteAlert = () => setDeleteAlertVisible(false);
  const showDeleteAlert = () => setDeleteAlertVisible(true);

  const handleSubmit = () => {
    const config = configs[selectedConfigIndex];
    onSubmit(config);
  };

  const handleDelete = (config: HotspotConfig) => {
    onDelete(config);
    hideDeleteAlert();
  };

  const askDeleteConfirmation = (index: number) => {
    setToBeDeletedConfigIndex(index);
    showDeleteAlert();
  };

  const buttons: Array<React.ComponentProps<typeof AlertButton>> = [
    {
      title: localization.cancel,
      titleColor: colors.greyDark,
      onPress: onCancel
    },
    {
      title: localization.new,
      titleColor: colors.greyDark,
      onPress: onNew
    },
    {
      title: localization.use,
      titleColor: colors.blueLight,
      onPress: handleSubmit
    }
  ];

  const renderConfigItem = ({ item, index }: ConfigItem) => (
    <ListItem
      style={index === selectedConfigIndex && styles.highlightedListItem}
      leftIcon={{
        source: images.teacher,
        style: styles.icon,
        resizeMode: 'stretch'
      }}
      leftElementContainerStyle={styles.iconContainer}
      rightElement={
        <TouchableImage
          source={images.trash}
          imageStyle={styles.trashImage}
          onPress={() => askDeleteConfirmation(index)}
        />
      }
      title={item.title}
      subtitle={`${item.classStart} - ${item.classEnd}`}
      onPress={() => setSelectedConfigIndex(index)}
    />
  );

  return (
    <>
      {isDeleteAlertVisible ? (
        <DeleteConfigAlert
          visible
          config={configs[toBeDeletedConfigIndex]}
          onCancel={hideDeleteAlert}
          onSubmit={handleDelete}
        />
      ) : (
        <Alert
          contentContainerStyle={styles.container}
          title={localization.selectHotspot}
          buttons={buttons}
          {...props}
        >
          <FlatList
            style={configs.length >= 3 && styles.configList}
            data={configs}
            extraData={selectedConfigIndex}
            renderItem={renderConfigItem}
            scrollEnabled={configs.length > 3}
            keyExtractor={shortid.generate}
          />

          <HotspotConfigForm
            containerStyle={styles.form}
            placeholder={configs[defaultSelectedConfigIndex]}
          />
        </Alert>
      )}
    </>
  );
};

export default ManageHotspotConfig;
