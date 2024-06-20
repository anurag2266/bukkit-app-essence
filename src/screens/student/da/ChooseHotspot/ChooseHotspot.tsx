import React, { useState } from 'react';
import {
  ConfirmBeaconCheckInAlert,
  ChooseBeacon
} from '../../../../components';

import { localization } from '../../../../constants';
import { NavigationScreenProps } from 'react-navigation';
import { Beacon } from '../../../../constants/types';

type ChooseHotspotProps = NavigationScreenProps & {
  beacons?: Array<Beacon>;
  onChooseBeacon?: (beacon: Beacon) => void;
  onConfirmBeacon?: (beacon?: Beacon) => void;
};

const ChooseHotspot = ({
  beacons,
  onChooseBeacon,
  onConfirmBeacon,
  ...props
}: ChooseHotspotProps) => {
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
        title={localization.chooseHotspot}
        footerText={localization.cantSeeHotspot}
        beacons={beacons}
        onChooseBeacon={handleChooseBeacon}
        {...props}
      />
    </>
  );
};

export default ChooseHotspot;
