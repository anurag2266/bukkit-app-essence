import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../../../utils';
import ChooseHotspot from './ChooseHotspot';

import { NavigationScreenProps } from 'react-navigation';
import { mockData, screens } from '../../../../constants';

type ChooseHotspotContainerProps = NavigationScreenProps & {
  getClasses: Function;
  checkin: Function;
  Classes: any;
  Beacons: any;
  FaceRecognition: any;
};

const ChooseHotspotContainer = (props: ChooseHotspotContainerProps) => {
  const onRefresh = () => {
    const beaconIds = props.Beacons.data.map((beacon: any) => beacon.id);
    props.getClasses(1, beaconIds);
  };

  const onConfirmBeacon = (beacon: any) => {
    props.checkin(
      beacon.college_id,
      beacon.id,
      props.FaceRecognition.faceToken
    );
  };

  if ('checkin' in props.Classes.attendance) {
    props.navigation.navigate(screens.student.da.attendance);
  }

  if (!props.Classes.loaded && !props.Classes.loading && !props.Classes.error) {
    const beaconIds = props.Beacons.data.map((beacon: any) => beacon.id);
    props.getClasses(1, beaconIds);
  }
  return (
    <ChooseHotspot
      beacons={props.Classes.data}
      onRefresh={onRefresh}
      onConfirmBeacon={onConfirmBeacon}
      {...props}
    />
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChooseHotspotContainer);
