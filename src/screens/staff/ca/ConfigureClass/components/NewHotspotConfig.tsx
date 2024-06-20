import React from 'react';
import Alert from '../../../../../components/Alert';
import AlertButton from '../../../../../components/Alert/AlertButton';

import { ScaledSheet } from '../../../../../utils';
import { localization, mockData } from '../../../../../constants';
import colors from '../../../../../styles/colors';
import { HotspotConfig } from '../../../../../constants/types';
import HotspotConfigForm from './HotspotConfigForm';

const styles = ScaledSheet.create({
  container: {
    marginTop: '41@s',
    marginBottom: '180@s'
  }
});

const placeholder = mockData.hotspotConfigurations[0];

type NewHotspotConfigProps = React.ComponentProps<typeof Alert> & {
  onCancel?: () => void;
  onSubmit?: (config: HotspotConfig) => void;
};

const NewHotspotConfig = ({
  onCancel,
  onSubmit = () => null,
  ...props
}: NewHotspotConfigProps) => {
  const buttons: Array<React.ComponentProps<typeof AlertButton>> = [
    {
      title: localization.cancel,
      titleColor: colors.greyDark,
      onPress: onCancel
    },
    {
      title: localization.save,
      titleColor: colors.blueLight,
      onPress: onSubmit
    }
  ];

  return (
    <Alert
      contentContainerStyle={styles.container}
      title={localization.newConfig}
      buttons={buttons}
      {...props}
    >
      <HotspotConfigForm placeholder={placeholder} />
    </Alert>
  );
};

export default NewHotspotConfig;
