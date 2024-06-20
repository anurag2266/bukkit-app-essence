import React, { useState } from 'react';
import { ConfirmBeaconCheckInAlert, ChooseBeacon } from 'components';

import { localization } from 'constants';
import { NavigationScreenProps } from 'react-navigation';
import { Beacon } from 'constants/types';

type ChooseClassProps = NavigationScreenProps & {
  beacons?: Array<Beacon>;
  onChooseBeacon?: (beacon: Beacon) => void;
  onConfirmBeacon?: (beacon?: Beacon) => void;
};

const ChooseClass = ({
  beacons,
  onChooseBeacon,
  onConfirmBeacon,
  ...props
}: ChooseClassProps) => {
  const [selectedBeacon, setSelectedBeacon] = useState<Beacon | undefined>(
    undefined
  );

  const isAlertVisible = !!selectedBeacon;
  const hideAlert = () => setSelectedBeacon(undefined);

  const handleChooseBeacon = (beacon: Beacon) => {
    setSelectedBeacon(beacon);

    if (onChooseBeacon) {
      onChooseBeacon(beacon);
    }
  };

  const handleConfirmBeacon = (beacon?: Beacon) => {
    if (onConfirmBeacon) {
      onConfirmBeacon(beacon);
    }

    hideAlert();
  };

  return (
    <>
      <ConfirmBeaconCheckInAlert
        visible={isAlertVisible}
        beacon={selectedBeacon}
        onCancel={hideAlert}
        onConfirm={handleConfirmBeacon}
      />
      <ChooseBeacon
        title={localization.chooseClass}
        footerText={localization.cantSeeLesson}
        beacons={beacons}
        onChooseBeacon={handleChooseBeacon}
        {...props}
      />
    </>
  );
};

export default ChooseClass;
