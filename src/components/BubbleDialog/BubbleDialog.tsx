import React from 'react';
import { View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import Overlay from '../Overlay';
import Text, { TextVariant } from '../Text';

import styles from './styles';
import { images } from '../../constants';

type BubbleDialogProps = React.ComponentProps<typeof Overlay> & {
  title?: string;
  onClose?: () => void;
};

const BubbleDialog = ({
  children,
  title = '',
  onClose,
  ...props
}: BubbleDialogProps) => {
  const body =
    typeof children === 'string' ? (
      <Text variant={TextVariant.Heading2White} style={styles.body}>
        {children}
      </Text>
    ) : (
      <View style={styles.body}>{children}</View>
    );

  return (
    <Overlay {...props}>
      <ImageBackground
        source={images.bigBubble}
        style={styles.container}
        imageStyle={styles.bgImage}
        resizeMode="stretch"
      >
        <View style={styles.content}>
          <Text variant={TextVariant.Heading1White}>{title}</Text>
          {body}
        </View>

        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Image
            source={images.close}
            style={styles.closeImage}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </ImageBackground>
    </Overlay>
  );
};

export default BubbleDialog;
