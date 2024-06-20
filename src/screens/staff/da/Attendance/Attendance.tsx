import React, {useState} from 'react';
import { TabbedContainer, SummaryBox, TabGroup, Button } from '../../../../components';
import HotspotList from './components/HotspotList';
import ApprovalAlert from './components/ApprovalAlert';

import StudentList from '../../common/StudentList';
import StudentListItem from '../../common/SelectableStudentListItem';

import { localization } from '../../../../constants';
import { Hotspot, StudentLegacy } from '../../../../constants/types';

type AttendanceProps = {
  summaryData: React.ComponentProps<typeof SummaryBox>['data'];
  hotspots?: Array<Hotspot>;
  students?: Array<StudentLegacy>;
  onChooseHotspot?: (item: any) => void;
  onReject?: (student: any) => void;
  onApprove?: (student: any) => void;
};

const Attendance = ({
  summaryData,
  hotspots = [],
  students = [],
  onChooseHotspot = () => null,
  onReject = () => null,
  onApprove = () => null,
}: AttendanceProps) => {
  const [selectedStudentIndex, setSelectedStudentIndex] = useState(0);
  const [isAlertVisible, setAlertVisible] = useState(false);

  const showAlert = () => setAlertVisible(true);
  const hideAlert = () => setAlertVisible(false);

  const handleSelectStudent = (index: number) => {
    setSelectedStudentIndex(index);
    showAlert();
  };

  const tabs = [
    {
      title: localization.students,
      content: (
        <StudentList
          data={students}
          renderItem={({ item, index }) => (
            <StudentListItem
              {...item}
              isSelectable={item && item.status !== 'approved'}
              onPress={() => handleSelectStudent(index)}
            />
          )}
        />
      )
    },
    {
      title: localization.hotspots,
      content: <HotspotList data={hotspots} onItemPress={onChooseHotspot} />
    }
  ];
  const createClass: Array<React.ComponentProps<typeof Button>> = [
    {
      title: localization.createClass,
      type: 'pink',
      onPress: () => onChooseHotspot({id: -1, name: 'New Class'})
    }
  ];

  const handleApprove = (item: any) => {
    onApprove(item);
    hideAlert();
  }
  const handleReject = (item: any) => {
    onReject(item);
    hideAlert();
  }

  return (
    <>
      <ApprovalAlert
          visible={isAlertVisible}
          data={students[selectedStudentIndex]}
          onCancel={hideAlert}
          onApprove={handleApprove}
          onReject={handleReject}
        />      
    <TabbedContainer actionButtonOptions={createClass}>
        <SummaryBox data={summaryData} />
        <TabGroup tabs={tabs} />
      </TabbedContainer>
    </>
  );
};

export default Attendance;
