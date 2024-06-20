import React from 'react';
import { Alert, ListItem } from '../../../../../../components';
import AlertButton from '../../../../../../components/Alert/AlertButton';
import { TextVariant } from '../../../../../../components/Text';

import { ScaledSheet } from '../../../../../../utils';
import { localization, images } from '../../../../../../constants';
import { HotspotConfig } from '../../../../../../constants/types';
import colors from '../../../../../../styles/colors';
import textStyles from '../../../../../../styles/textStyles';

const styles = ScaledSheet.create({
  container: {
    paddingHorizontal: 0,
    paddingVertical: 0
  },

  title: {
    ...textStyles[TextVariant.Heading4GreyDarkRegular],
    textTransform: 'none'
  },

  leftContainer: {
    marginRight: '14@s'
  },

  teacherImage: {
    width: '30@s',
    height: undefined,
    aspectRatio: 1.07
  }
});

type DeleteConfigAlertProps = React.ComponentProps<typeof Alert> & {
  config: HotspotConfig;
  onCancel?: () => void;
  onSubmit?: (config: HotspotConfig) => void;
};

const DeleteConfigAlert = ({
  config,
  onCancel,
  onSubmit,
  ...props
}: DeleteConfigAlertProps) => {
  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit(config);
    }
  };

  const buttons: Array<React.ComponentProps<typeof AlertButton>> = [
    {
      title: localization.cancel,
      titleColor: colors.greyDark,
      onPress: onCancel
    },
    {
      title: localization.ok,
      titleColor: colors.blueLight,
      onPress: handleSubmit
    }
  ];

  return (
    <Alert title={localization.confirmCheckIn} buttons={buttons} {...props}>
      <ListItem
        style={styles.container}
        title={config.title}
        titleStyle={styles.title}
        leftIcon={{ source: images.teacher, style: styles.teacherImage }}
        leftElementContainerStyle={styles.leftContainer}
      />
    </Alert>
  );
};

export default DeleteConfigAlert;
