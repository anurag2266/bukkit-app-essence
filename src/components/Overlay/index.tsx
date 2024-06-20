import React from 'react';
import { Modal, ModalProps, View, ViewStyle, StyleProp } from 'react-native';

import colors from '../../styles/colors';

type OverlayProps = ModalProps & {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  visible?: boolean;
  backdropColor?: string;
};

const Overlay = ({
  children,
  style,
  visible = false,
  backdropColor = colors.black60,
  ...props
}: OverlayProps) => {
  const contenttyle = { flex: 1, backgroundColor: backdropColor };
  return (
    <Modal transparent visible={visible} {...props}>
      <View style={[contenttyle, style]}>{children}</View>
    </Modal>
  );
};

export default Overlay;
