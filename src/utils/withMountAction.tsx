import React, { ComponentType, useEffect } from 'react';

const withMountAction = (
  handleMount: () => void,
  Component: ComponentType
) => () => {
  useEffect(() => {
    handleMount();
  }, []);

  return <Component />;
};

export default withMountAction;
