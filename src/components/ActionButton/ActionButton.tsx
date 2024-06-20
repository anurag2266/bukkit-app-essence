import React, { useState } from 'react';
import { View, ImageBackground, StyleProp, ImageStyle } from 'react-native';
import Button from '../Button';
import TouchableImage from '../TouchableImage';

import styles from './styles';
import colors from '../../styles/colors';
import { images } from '../../constants';

type ActionButtonOption = React.ComponentProps<typeof Button>;

type ActionButtonProps = React.ComponentProps<typeof TouchableImage> & {
  options?: Array<ActionButtonOption>;
  optionsContainerBackdropColor?: string;
  imageStyle?: StyleProp<ImageStyle>;
  onPress?: () => void;
};

const ActionButton = ({
  style,
  options = [],
  activeOpacity = 0.8,
  optionsContainerBackdropColor = colors.black60,
  onPress,
  imageStyle = styles.buttonImage,
  ...props
}: ActionButtonProps) => {
  const [isOptionsVisible, setOptionVisible] = useState(false);
  const showOptions = isOptionsVisible && options && options.length >= 1;

  const hideOptions = () => setOptionVisible(false);

  const handlePress = () => {
    if (options.length >= 1) {
      setOptionVisible(!isOptionsVisible);
    }

    if (onPress) {
      onPress();
    }
  };

  const handleOptionPress = (onOptionPress?: () => void) => () => {
    hideOptions();

    if (onOptionPress) {
      onOptionPress();
    }
  };

  const renderOption = (option: ActionButtonOption, index: number) => (
    <Button
      key={option.title}
      style={index >= 1 && styles.notFirstOption}
      {...option}
      onPress={handleOptionPress(option.onPress)}
    />
  );

  const overlayStyle = [
    styles.overlay,
    { backgroundColor: optionsContainerBackdropColor },
    !isOptionsVisible && styles.overlayTransparent
  ];

  return (
    <View
      style={overlayStyle}
      pointerEvents={isOptionsVisible ? 'auto' : 'box-none'}
    >
      <View style={styles.container}>
        {showOptions && (
          <ImageBackground
            source={images.triangle}
            style={styles.optionsContainer}
            resizeMode="contain"
          >
            {options && options.map(renderOption)}
          </ImageBackground>
        )}

        <TouchableImage
          style={[styles.button, style]}
          activeOpacity={activeOpacity}
          imageStyle={imageStyle}
          onPress={handlePress}
          {...props}
        />
      </View>
    </View>
  );
};

export default ActionButton;
