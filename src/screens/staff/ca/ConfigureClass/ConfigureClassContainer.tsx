import React from 'react';
import { connect } from 'react-redux';
import {
  mapStateToProps,
  mapDispatchToProps
} from '../../../../utils';

import ConfigureClass from './ConfigureClass';

import { NavigationScreenProps } from 'react-navigation';
import { mockData } from '../../../../constants';


interface Props extends NavigationScreenProps {
  replaceClass: Function;
  getUsersByClass: Function;
  ClassUsers: any;
  Snapshots: any;
  getSnapshotByClassId: Function;
  deleteSnapshotByClassId: Function;
  updateSnapshotByClassId: Function;
  deleteSingleSnapshotStudent: Function;
}

const ConfigureClassContainer = (props: Props) => {
  const {
    getSnapshotByClassId,
    deleteSnapshotByClassId,
    updateSnapshotByClassId,
    deleteSingleSnapshotStudent,
    getUsersByClass,
    replaceClass,
    ClassUsers,
    navigation,
    Snapshots,
  } = props;
  const clss = navigation.getParam('class');
  if (!ClassUsers.loaded && !ClassUsers.loading) {
    getUsersByClass(clss.id);
  }

  if (!Snapshots.loaded && !Snapshots.loading) {
    getSnapshotByClassId(clss.id);
  }

  const handleConfigureHostpot = (data: any) => {
    replaceClass(data);
  }

  const handleStartClassNow = () => {
  }
  const handleDeleteSnapshot = () => {
    deleteSnapshotByClassId(clss.id)
  }
  const handleDeleteSingleSnapshot = (item: any) => {
    deleteSingleSnapshotStudent(clss.id, item.id)
  }
  const handleUpdateSnapshot = () => {
    updateSnapshotByClassId(clss.id)
  }

  return (
    <ConfigureClass
      onStartClassNow={handleStartClassNow}
      onDeleteSnapshot={handleDeleteSnapshot}
      onDeleteSingleSnapshot={handleDeleteSingleSnapshot}
      onUpdateSnapshot={handleUpdateSnapshot}
      confirmedStudents={ClassUsers.data}
      snapshottedStudents={Snapshots.data}
      hotspots={mockData.staffHotspots}
      hotspotConfigs={mockData.hotspotConfigurations}
      selectedHotspot={navigation.getParam('class')}
      onConfigureHostpot={handleConfigureHostpot}
      {...props}
    />
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ConfigureClassContainer);
