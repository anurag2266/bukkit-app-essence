/* eslint-disable import/order */
import React, { useState } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import Alert from '../Alert';
import Text from '../Text';
import TextInput from '../TextInput';
import moment from 'moment-timezone';
import TimeZone from 'react-native-timezone';

import { localization, images } from '../../constants';
import colors from '../../styles/colors';
import styles from './styles';
import { TimePicker } from 'components';

type device = {
  name: string;
  description: string;
};

const hourMinutesToUTCDate = async (input: string) => {
  const zone = await TimeZone.getTimeZone();
  const dateFormat = 'YYYY-MM-DD';
  const dateTimeFormat = `${dateFormat} HH:mm:ss`;
  const today = moment();
  const todayString = today.format(dateFormat);
  const m = moment.tz(`${todayString} ${input}`, dateTimeFormat, zone);

  // convert it to utc
  m.utc();

  return m.format(dateTimeFormat);
};

type ConfigureHotspotAlertProps = React.ComponentProps<typeof Alert> & {
  onCancelPress: () => void;
  onOkPress: (data: any) => void;
  device: device;
  hotspot: device;
  type: 'CA' | 'DA';
};

export default ({
  onCancelPress,
  onOkPress,
  device,
  hotspot,
  type,
  ...props
}: ConfigureHotspotAlertProps) => {
  const [isHotspotSelected, setHotspotSelected] = useState(true);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [classStart, setClassStart] = useState('');
  const [classEnd, setClassEnd] = useState('');
  const [startGraceperiod, setStartGraceperiod] = useState('');
  const [endGraceperiod, setEndGraceperiod] = useState('');

  const selectHotspot = () => setHotspotSelected(true);
  const selectDevice = () => setHotspotSelected(false);

  console.log('@@@@@@@@@@@@@ ConfigureHotspotAlert', isHotspotSelected);
  const onConfirm = async () => {
    const data = {
      device_type: isHotspotSelected ? 'physical' : 'virtual',
      name,
      description,
      classStart: await hourMinutesToUTCDate(classStart),
      classEnd: await hourMinutesToUTCDate(classEnd),
      startGraceperiod: startGraceperiod || 0,
      endGraceperiod: endGraceperiod || 0
    };
    console.log('@@@@@@@@@@@@@ onConfirm', data);
    onOkPress(data);
  };

  const buttons = [
    {
      title: localization.cancel,
      color: colors.greyDark,
      onPress: onCancelPress
    },
    {
      title: localization.ok,
      color: colors.blueLight,
      onPress: onConfirm
    }
  ];

  return (
    <Alert
      title={localization.configureHotspot}
      titleStyle={styles.title}
      contentContainerStyle={styles.contentContainer}
      buttons={buttons}
      {...props}
    >
      <TouchableOpacity onPress={selectDevice}>
        <View
          style={[
            styles.headerItem,
            !isHotspotSelected ? styles.selectedHotspot : null
          ]}
        >
          <View style={styles.headerImageContainer}>
            <Image
              source={images.device}
              style={styles.headerImage}
              resizeMode="contain"
            />
          </View>
          <View style={styles.headerDetails}>
            <Text style={styles.headerTitle}>{device.name}</Text>
            <Text>{device.description}</Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={selectHotspot}>
        <View
          style={[
            styles.headerItem,
            isHotspotSelected ? styles.selectedHotspot : null
          ]}
        >
          <View style={styles.headerImageContainer}>
            <Image
              source={images.beacon}
              style={styles.headerImage}
              resizeMode="stretch"
            />
          </View>
          <View style={styles.headerDetails}>
            <Text style={styles.headerTitle}>{hotspot.name}</Text>
            <Text>{hotspot.description}</Text>
          </View>
        </View>
      </TouchableOpacity>

      <View style={styles.inputsContainer}>
        <TextInput
          value={name}
          onChangeText={setName}
          label={type === 'CA' ? localization.title : localization.hotspotName}
          placeholder="Cosmetology 101"
        />
        <TextInput
          value={description}
          onChangeText={setDescription}
          containerStyle={styles.inputRow}
          label={
            type === 'CA' ? localization.instructor : localization.location
          }
          placeholder="Mr. Richard Wilson"
        />

        <View style={[styles.inputRow, styles.multiInputRow]}>
          <TimePicker
            value={classStart}
            onChangeText={setClassStart}
            containerStyle={styles.leftHalfInputContainer}
            style={styles.halfInput}
            label={
              type === 'CA' ? localization.classStart : localization.dayStart
            }
            placeholder="9:30"
          />
          <TimePicker
            value={classEnd}
            onChangeText={setClassEnd}
            containerStyle={styles.rightHalfInputContainer}
            style={styles.halfInput}
            label={type === 'CA' ? localization.classEnd : localization.dayEnd}
            placeholder="10:30"
          />
        </View>

        <View style={[styles.inputRow, styles.multiInputRow]}>
          <TextInput
            value={startGraceperiod}
            onChangeText={setStartGraceperiod}
            containerStyle={styles.leftHalfInputContainer}
            style={styles.halfInput}
            keyboardType="numeric"
            label={localization.gracePeriodStart}
            placeholder="10 minutes"
            returnKeyLabel="next"
          />
          <TextInput
            value={endGraceperiod}
            onChangeText={setEndGraceperiod}
            containerStyle={styles.rightHalfInputContainer}
            style={styles.halfInput}
            keyboardType="numeric"
            label={localization.gracePeriodEnd}
            placeholder="10 minutes"
            returnKeyLabel="next"
          />
        </View>
      </View>
    </Alert>
  );
};
