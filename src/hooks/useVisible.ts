import { useState } from 'react';

const useVisible = () => {
  const [isVisible, setVisible] = useState(false);

  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  return { isVisible, show, hide };
};

export default useVisible;
