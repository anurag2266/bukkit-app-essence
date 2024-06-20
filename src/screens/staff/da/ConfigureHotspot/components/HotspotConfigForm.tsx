import React from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';
import { TextInput } from '../../../../../components';

import { localization } from '../../../../../constants';
import { HotspotConfig } from '../../../../../constants/types';

import { ScaledSheet } from '../../../../../utils';
import { widthPercentage } from '../../../../../utils/scaleUtil';

const styles = ScaledSheet.create({
  container: {
    marginTop: '41@s',
    marginBottom: '180@s'
  },

  multiInputRowContainer: {
    flexDirection: 'row'
  },

  inputContainer: {
    marginTop: '27@s'
  },

  leftHalftInputContainer: {
    flex: 1,
    marginRight: '10@s'
  },

  rightHalftInputContainer: {
    flex: 1,
    marginLeft: '10@s'
  },

  halftInput: {
    width: widthPercentage(20)
  }
});

type HotspotConfigFormProps = {
  containerStyle?: StyleProp<ViewStyle>;
  placeholder?: HotspotConfig;
};

const HotspotConfigForm = ({
  containerStyle,
  placeholder
}: HotspotConfigFormProps) => (
  <View style={containerStyle}>
    <TextInput
      label={localization.hotspotName}
      placeholder={placeholder && placeholder.title}
    />
    <TextInput
      containerStyle={styles.inputContainer}
      label={localization.instructor}
      placeholder={placeholder && placeholder.instructor}
    />

    <View style={styles.multiInputRowContainer}>
      <TextInput
        containerStyle={[styles.inputContainer, styles.leftHalftInputContainer]}
        style={styles.halftInput}
        label={localization.dayStart}
        placeholder={placeholder && placeholder.classStart}
      />
      <TextInput
        containerStyle={[
          styles.inputContainer,
          styles.rightHalftInputContainer
        ]}
        style={styles.halftInput}
        label={localization.dayEnd}
        placeholder={placeholder && placeholder.classEnd}
      />
    </View>

    <View style={styles.multiInputRowContainer}>
      <TextInput
        containerStyle={[styles.inputContainer, styles.leftHalftInputContainer]}
        style={styles.halftInput}
        label={localization.gracePeriodStart}
        placeholder={placeholder && placeholder.gracePeriodStart}
      />
      <TextInput
        containerStyle={[
          styles.inputContainer,
          styles.rightHalftInputContainer
        ]}
        style={styles.halftInput}
        label={localization.gracePeriodEnd}
        placeholder={placeholder && placeholder.gracePeriodEnd}
      />
    </View>
  </View>
);

export default HotspotConfigForm;
