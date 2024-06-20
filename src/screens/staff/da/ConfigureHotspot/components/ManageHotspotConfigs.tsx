import React, { useState } from 'react';
import ConfigureClassHotspot from './ConfigureClassHotspot';
import ManageHotspotConfig from './ManageHotspotConfig';
import NewHotspotConfig from './NewHotspotConfig';

import { Hotspot, HotspotConfig } from '../../../../../constants/types';

enum ManageHotspotConfigsState {
  Configure = 'CONFIGURE',
  Manage = 'MANAGE',
  New = 'NEW'
}

type ConfigureClassHotspotProps = React.ComponentProps<
  typeof ConfigureClassHotspot
>;

type ManageHotspotConfigProps = React.ComponentProps<
  typeof ManageHotspotConfig
>;

type ManageHotspotConfigsProps = {
  visible?: boolean;
  hotspots: Array<Hotspot>;
  configs: Array<HotspotConfig>;
  onCancel?: ConfigureClassHotspotProps['onCancel'];
  onSubmit?: ConfigureClassHotspotProps['onSubmit'];
  onDelete?: ManageHotspotConfigProps['onDelete'];
};

const ManageHotspotConfigs = ({
  visible = false,
  hotspots,
  configs,
  onCancel,
  onSubmit,
  onDelete
}: ManageHotspotConfigsProps) => {
  const [currentState, setCurrentState] = useState(
    ManageHotspotConfigsState.Configure
  );
  const [defaultConfigToManageIndex, setDefaultConfigToManageIndex] = useState(
    0
  );

  const reset = () => setCurrentState(ManageHotspotConfigsState.Configure);

  const handleDismiss = () => {
    reset();

    if (onCancel) {
      onCancel();
    }
  };

  const handleManageConfig: ConfigureClassHotspotProps['onManage'] = ({
    index
  }) => {
    setDefaultConfigToManageIndex(index);
    setCurrentState(ManageHotspotConfigsState.Manage);
  };

  const renderCurrentState = () => {
    switch (currentState) {
      case ManageHotspotConfigsState.Manage:
        return (
          <ManageHotspotConfig
            visible
            configs={configs}
            defaultSelectedConfigIndex={defaultConfigToManageIndex}
            onCancel={() =>
              setCurrentState(ManageHotspotConfigsState.Configure)
            }
            onNew={() => setCurrentState(ManageHotspotConfigsState.New)}
            onDelete={onDelete}
          />
        );

      case ManageHotspotConfigsState.New:
        return (
          <NewHotspotConfig
            visible
            onCancel={() => setCurrentState(ManageHotspotConfigsState.Manage)}
          />
        );

      case ManageHotspotConfigsState.Configure:
      default:
        return (
          <ConfigureClassHotspot
            visible
            hotspots={hotspots}
            configs={configs}
            onCancel={handleDismiss}
            onManage={handleManageConfig}
            onSubmit={onSubmit}
          />
        );
    }
  };

  return <>{visible && renderCurrentState()}</>;
};

export default ManageHotspotConfigs;
