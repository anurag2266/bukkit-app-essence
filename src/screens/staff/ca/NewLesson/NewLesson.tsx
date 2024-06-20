import React, { useCallback, useMemo } from 'react';
import { ScrollView, View } from 'react-native';
import {
  Container,
  Text,
  Button,
  TouchableImage,
  TextInput,
  TimePicker,
  Select,
  Switch
} from 'components';
import { localization, images } from 'constants';
import { Form, Field } from 'react-final-form';
import styles from './styles';
import LessonTypeItem from './components/LessonTypeItem';
import {
  Course,
  Option,
  OnlineVerificationFrequency as OVF,
  LessonType,
  Weekday,
  BeaconDetails
} from 'constants/types';
import { toUTCTime } from 'utils/datetime';

type LessonTypeDetails = {
  type: LessonType;
  name: string;
  location?: string;
  beaconId?: number;
  iconType: 'device' | 'online' | 'beacon';
};

const TIME_PICKER_PROPS = {
  minuteInterval: 15
};

const WEEKDAY_OPTIONS = [
  {
    value: Weekday.Monday,
    label: localization.daysHashTable.monday
  },
  {
    value: Weekday.Tuesday,
    label: localization.daysHashTable.tuesday
  },
  {
    value: Weekday.Wednesday,
    label: localization.daysHashTable.wednesday
  },
  {
    value: Weekday.Thursday,
    label: localization.daysHashTable.thursday
  },
  {
    value: Weekday.Friday,
    label: localization.daysHashTable.friday
  },
  {
    value: Weekday.Saturday,
    label: localization.daysHashTable.saturday
  },
  {
    value: Weekday.Sunday,
    label: localization.daysHashTable.sunday
  }
];

const OVF_OPTIONS: Option[] = [
  {
    value: OVF.Manual,
    label: localization.manual
  },
  {
    value: OVF.Random,
    label: localization.random
  },
  {
    value: OVF.Interval15Mins,
    label: localization.interval15Mins
  },
  {
    value: OVF.Interval30Mins,
    label: localization.interval30Mins
  },
  {
    value: OVF.Interval45Mins,
    label: localization.interval45Mins
  },
  {
    value: OVF.Interval60Mins,
    label: localization.interval60Mins
  }
];

const createCourseOptions = (courses: Course[]) =>
  courses.map(({ id: value, name: label }) => ({ value, label }));

enum FormField {
  Type = 'type',
  BeaconId = 'beacon_id',
  CourseId = 'course_id',
  MeetingUrl = 'meeting_url',
  StreamKey = 'stream_key',
  DayOfWeek = 'day_of_week',
  IsRecurring = 'is_recurring',
  StartsAt = 'starts_at',
  EndsAt = 'ends_at',
  StartGracePeriod = 'start_grace_period',
  EndGracePeriod = 'end_grace_period',
  OnlineVerificationFrequency = 'online_verification_frequency'
}

const INITIAL_VALUES = {
  [FormField.Type]: LessonType.Beacon,
  [FormField.BeaconId]: null,
  [FormField.CourseId]: null,
  [FormField.MeetingUrl]: '',
  [FormField.StreamKey]: null,
  [FormField.DayOfWeek]: null,
  [FormField.IsRecurring]: true,
  [FormField.StartsAt]: null,
  [FormField.EndsAt]: null,
  [FormField.StartGracePeriod]: null,
  [FormField.EndGracePeriod]: null,
  [FormField.OnlineVerificationFrequency]: null
};

type FormValues = { [key in FormField]: number | string | null | boolean };

type NewLessonProps = {
  beacons: Array<BeaconDetails>;
  courses: Array<Course>;
  personalBeaconId: number | null;
  onCreate: (lesson: any) => void;
  onRefresh?: () => void;
  onBack?: () => void;
};

const createPayload = (values: FormValues) => {
  const {
    [FormField.StartsAt]: startsAt,
    [FormField.EndsAt]: endsAt,
    ...rest
  } = values;

  return {
    ...INITIAL_VALUES,
    ...rest,
    [FormField.StartsAt]: startsAt ? toUTCTime(startsAt as string) : null,
    [FormField.EndsAt]: endsAt ? toUTCTime(endsAt as string) : null
  };
};

const NewLesson = ({
  beacons = [],
  courses,
  personalBeaconId,
  onRefresh,
  onBack,
  onCreate
}: NewLessonProps) => {
  const coursesOptions = React.useMemo(() => createCourseOptions(courses), [
    courses
  ]);

  const handleFormSubmit = useCallback(async (values: FormValues) => {
    const payload = createPayload(values);

    await onCreate(payload);
  }, []);

  const lessonTypeOptions = useMemo(
    () =>
      [
        {
          name: 'My Device',
          location: 'Current Location',
          type: LessonType.Beacon,
          beaconId: personalBeaconId,
          iconType: 'device'
        },
        {
          name: 'Online only',
          location: 'No on-site students',
          type: LessonType.Online,
          iconType: 'online'
        },
        ...beacons.map(beacon => ({
          name: beacon.name,
          location: beacon.location,
          type: LessonType.Beacon,
          iconType: 'beacon'
        }))
      ] as LessonTypeDetails[],
    [beacons, personalBeaconId]
  );

  const initialValues = useMemo(
    () => ({
      ...INITIAL_VALUES,
      [FormField.BeaconId]: personalBeaconId
    }),
    [personalBeaconId]
  );

  return (
    <Container
      contentContainerStyle={styles.container}
      title={localization.newLesson}
      headerLeft={{
        icon: 'back',
        onPress: onBack
      }}
    >
      <Form onSubmit={handleFormSubmit} initialValues={initialValues}>
        {({ handleSubmit, form: { change }, values }) => {
          const course = courses.find(c => c.id === values[FormField.CourseId]);
          const meetingUrlOptions = course
            ? course.streamCredentials.map(({ url }) => ({
                value: url,
                label: url
              }))
            : [];
          return (
            <ScrollView style={styles.content}>
              <View style={styles.lessonTypeHeader}>
                <Text style={styles.headerTitle}>
                  {localization.chooseLessonType}
                </Text>
                <TouchableImage
                  source={images.refresh}
                  style={styles.refresh}
                  onPress={onRefresh}
                />
              </View>

              <Field name={FormField.Type}>
                {({ input: { value, onChange } }) => (
                  <View style={styles.lessonTypeList}>
                    {lessonTypeOptions.map(option => {
                      const handlePress = () => {
                        const nextBeaconId = option.beaconId
                          ? option.beaconId
                          : null;
                        change(FormField.BeaconId, nextBeaconId);

                        onChange(option.type);
                      };

                      const isSelected =
                        option.type === LessonType.Beacon
                          ? values[FormField.BeaconId] === option.beaconId
                          : option.type === value;

                      const key = [option.type, option.beaconId].join('-');

                      return (
                        <LessonTypeItem
                          key={key}
                          name={option.name}
                          location={option.location}
                          type={option.iconType}
                          selected={isSelected}
                          onPress={handlePress}
                        />
                      );
                    })}
                  </View>
                )}
              </Field>

              <Text style={styles.headerTitle}>
                {localization.configureLesson}
              </Text>

              <Field name={FormField.CourseId}>
                {({ input: { value, onChange } }) => {
                  const handleChange = (nextValue: string | number) => {
                    change(FormField.MeetingUrl, '');
                    change(FormField.StreamKey, null);
                    onChange(nextValue);
                  };

                  return (
                    <Select
                      containerStyle={styles.input}
                      label={localization.selectCourse}
                      placeholder={localization.pleaseSelect}
                      value={value}
                      onChange={handleChange}
                      options={coursesOptions}
                    />
                  );
                }}
              </Field>

              <Field name={FormField.MeetingUrl}>
                {({ input: { value, onChange } }) => {
                  const handleChange = (meetingUrl: string | number) => {
                    const credentials = course
                      ? course.streamCredentials.find(c => c.url === meetingUrl)
                      : null;

                    if (credentials) {
                      change(FormField.StreamKey, credentials.key);
                    }

                    onChange(meetingUrl);
                  };

                  return (
                    <Select
                      containerStyle={styles.input}
                      label={localization.onlineVideoUrl}
                      placeholder={localization.pleaseSelect}
                      value={value}
                      onChange={handleChange}
                      options={meetingUrlOptions}
                      disabled={!course}
                    />
                  );
                }}
              </Field>

              <View style={styles.timeContainer}>
                <View style={styles.beginContainer}>
                  <Field name={FormField.DayOfWeek}>
                    {({ input: { value, onChange } }) => (
                      <Select
                        containerStyle={[styles.daySelect, styles.input]}
                        label={localization.selectDay}
                        placeholder={localization.pleaseSelect}
                        value={value}
                        onChange={onChange}
                        options={WEEKDAY_OPTIONS}
                      />
                    )}
                  </Field>
                  <Field name={FormField.StartsAt}>
                    {({ input: { value, onChange } }) => (
                      <TimePicker
                        style={styles.timeInput}
                        containerStyle={styles.input}
                        label={localization.classBegins}
                        placeholder={localization.classBeginsPlaceholder}
                        // @ts-ignore
                        PickerProps={TIME_PICKER_PROPS}
                        value={value}
                        onChangeText={onChange}
                      />
                    )}
                  </Field>
                  <Field name={FormField.StartGracePeriod}>
                    {({ input: { value, onChange } }) => (
                      <TextInput
                        value={value}
                        onChangeText={onChange}
                        style={styles.timeInput}
                        containerStyle={styles.input}
                        label={localization.beginGracePeriod}
                        placeholder={localization.tenMinutes}
                        keyboardType="numeric"
                      />
                    )}
                  </Field>
                </View>
                <View>
                  <Field name={FormField.IsRecurring}>
                    {({ input: { value, onChange } }) => (
                      <Switch
                        style={styles.input}
                        labelPosition="top"
                        value={value}
                        onChange={onChange}
                        label={localization.recurring}
                      />
                    )}
                  </Field>
                  <Field name={FormField.EndsAt}>
                    {({ input: { value, onChange } }) => (
                      <TimePicker
                        style={styles.timeInput}
                        containerStyle={styles.input}
                        label={localization.classEnds}
                        placeholder={localization.classEndsPlaceholder}
                        // @ts-ignore
                        PickerProps={TIME_PICKER_PROPS}
                        value={value}
                        onChangeText={onChange}
                      />
                    )}
                  </Field>
                  <Field name={FormField.EndGracePeriod}>
                    {({ input: { value, onChange } }) => (
                      <TextInput
                        value={value}
                        onChangeText={onChange}
                        style={styles.timeInput}
                        containerStyle={styles.input}
                        label={localization.endGracePeriod}
                        placeholder={localization.tenMinutes}
                        keyboardType="numeric"
                      />
                    )}
                  </Field>
                </View>
              </View>

              <Field name={FormField.OnlineVerificationFrequency}>
                {({ input: { value, onChange } }) => (
                  <Select
                    value={value}
                    onChange={onChange}
                    options={OVF_OPTIONS}
                    containerStyle={styles.input}
                    label={localization.onlineVerificationFreq}
                    placeholder={localization.pleaseSelect}
                  />
                )}
              </Field>

              <Button
                style={styles.button}
                type="pink"
                title={localization.createLesson}
                onPress={handleSubmit}
              />
            </ScrollView>
          );
        }}
      </Form>
    </Container>
  );
};

export default NewLesson;
