import React from 'react';
import Attendance from './Attendance';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../../../utils';

import { mockData, screens } from '../../../../constants';
import { NavigationScreenProps } from 'react-navigation';

interface AttendanceContainerProps extends NavigationScreenProps {
  searchFace: (campusId: number, path: string) => void;
  Beacons: any;
  listenBeacons: Function;
  Classes: any;
  getClasses: Function;
  getApprovalList: Function;
  ApprovalList: any;
  approve: Function;
  reject: Function;
}
const AttendanceContainer = ({
  reject,
  Beacons,
  Classes,
  approve,
  getClasses,
  navigation,
  ApprovalList,
  listenBeacons,
  getApprovalList
}: AttendanceContainerProps) => {
  if (!Beacons.loaded && !Beacons.loading) {
    listenBeacons();
  }

  if (!ApprovalList.loaded && !ApprovalList.loading) {
    getApprovalList();
  }

  if (!Classes.loaded && !Classes.loading && !Classes.error) {
    const beaconIds = Beacons.data.map((beacon: any) => beacon.id);
    getClasses(beaconIds);
  }

  const handleChooseClass = (item: any) => {
    navigation.navigate(screens.staff.da.configureHotspot, { class: item });
  };
  const handleApprove = (item: any) => {
    approve(item.id);
  };
  const handleReject = (item: any) => {
    reject(item.id);
  };

  return (
    <Attendance
      summaryData={mockData.staffAttendanceSummary.da}
      hotspots={Classes.data}
      students={ApprovalList.data}
      onChooseHotspot={handleChooseClass}
      onApprove={handleApprove}
      onReject={handleReject}
    />
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AttendanceContainer);
