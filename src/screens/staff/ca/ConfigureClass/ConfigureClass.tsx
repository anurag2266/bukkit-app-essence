import React, { useState } from 'react';
import {
  Container,
  PasscodeInputAlert,
  TabGroup,
  Button,
  BottomNavBar,
  ConfigureHotspotAlert,
} from '../../../../components';
import {
  BeaconStatus,
  RemovableStudentListItem as SnapshottedStudentListItem,
  ManageHotspotConfigs,
} from './components';
import StudentList from '../../common/StudentList';
import StudentListItem from '../../common/SelectableStudentListItem';

import { localization, images } from '../../../../constants';
import { NavigationScreenProps } from 'react-navigation';
import { StudentLegacy, Hotspot, HotspotConfig } from '../../../../constants/types';

type ConfigureClassProps = NavigationScreenProps & {
  confirmedStudents?: Array<StudentLegacy>;
  snapshottedStudents?: Array<StudentLegacy>;
  hotspots?: Array<Hotspot>;
  hotspotConfigs?: Array<HotspotConfig>;
  selectedHotspot: any,
  onConfigureHostpot?: any,
  onStartClassNow: () => void,
  onDeleteSnapshot: () => void,
  onDeleteSingleSnapshot: (item: any) => void,
  onUpdateSnapshot: () => void,
};

const ConfigureClass = ({
  navigation,
  confirmedStudents = [],
  snapshottedStudents = [],
  hotspots = [],
  hotspotConfigs = [],
  selectedHotspot,
  onConfigureHostpot,
  onStartClassNow,
  onDeleteSnapshot,
  onDeleteSingleSnapshot,
  onUpdateSnapshot,
}: ConfigureClassProps) => {
  const [isPinAlertVisible, setPinAlertVisible] = useState(false);
  const [isManageConfigVisible, setManageConfigVisible] = useState(false);
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const showPinAlert = () => setPinAlertVisible(true);
  const hidePinAlert = () => setPinAlertVisible(false);

  const showManageConfig = () => setManageConfigVisible(true);
  const hideManageConfig = () => setManageConfigVisible(false);

  const tabs = [
    {
      title: localization.confirmedToday,
      content: (
        <StudentList
          data={confirmedStudents}
          renderItem={({ item }) => <StudentListItem {...item} />}
        />
      )
    },
    {
      title: localization.classSnapshot,
      content: (
        <StudentList
          data={snapshottedStudents}
          renderItem={({ item }) => <SnapshottedStudentListItem onDelete={onDeleteSingleSnapshot} {...item} />}
        />
      )
    }
  ];

  const actionButtonOptions: Array<
    Array<React.ComponentProps<typeof Button>>
  > = [
    [
      {
        title: localization.startClassNow,
        type: 'pink',
        onPress: onStartClassNow
      }
    ],
    [
      {
        title: localization.deleteSnapshot,
        type: 'red',
        onPress: onDeleteSnapshot,
      },
      {
        title: localization.updateSnapshot,
        type: 'pink',
        onPress: onUpdateSnapshot,
      }
    ]
  ];

  const currentClass: Hotspot = navigation.getParam('class');

  const handlePinSubmit = (passcode: string) => {
    hidePinAlert();
    showManageConfig();
  };
  const handleConfigureHostpot = (data: any) => {
    data.currentHotspot = selectedHotspot;
    data.type = 'CA';
    onConfigureHostpot && onConfigureHostpot(data);
    hideManageConfig();
  };

  return (
    <>
      <PasscodeInputAlert
        visible={isPinAlertVisible}
        onCancel={hidePinAlert}
        onSubmit={handlePinSubmit}
      />

      <ConfigureHotspotAlert
        visible={isManageConfigVisible}
        onOkPress={handleConfigureHostpot}
        onCancelPress={hideManageConfig}
        hotspot={selectedHotspot}
        type='CA'
        device={{ name: 'my device', description: 'Current Location' }}
      />

      <Container
        title={currentClass.name}
        headerLeft={{ icon: 'back', onPress: () => navigation.goBack() }}
        headerRight={{ icon: 'questionMark' }}
        actionImageSource={images.flash}
        actionButtonOptions={actionButtonOptions[currentTabIndex]}
        BottomBarComponent={BottomNavBar}
      >
        <BeaconStatus onConfigure={showPinAlert} status={selectedHotspot.status} />
        <TabGroup tabs={tabs} onTabChange={setCurrentTabIndex} />
      </Container>
    </>
  );
};

export default ConfigureClass;
