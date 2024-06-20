import React from 'react';
import shortid from 'shortid';
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  GestureResponderEvent
} from 'react-native';
import Text, { TextVariant } from '../Text';

import styles from './styles';
import { images } from '../../constants';
import colors from '../../styles/colors';

type SideButtonIcon = 'back' | 'close' | 'questionMark';

type SpeechBubbleTitleBarProps = {
  title: string;
  leftIcon?: SideButtonIcon;
  leftIconColor?: string;
  onLeftIconPress?: (event: GestureResponderEvent) => void;
  rightIcon?: SideButtonIcon;
  rightIconColor?: string;
  onRightIconPress?: (event: GestureResponderEvent) => void;
};

const SpeechBubbleTitleBar = ({
  title,
  leftIcon,
  leftIconColor = colors.white,
  onLeftIconPress,
  rightIcon,
  rightIconColor = colors.white,
  onRightIconPress
}: SpeechBubbleTitleBarProps) => {
  const titleContents = title.split('\n');
  const leftButtonImageStyle = [
    styles.sideButtonImage,
    { tintColor: leftIconColor }
  ];
  const rightButtonImageStyle = [
    styles.sideButtonImage,
    { tintColor: rightIconColor }
  ];

  return (
    <ImageBackground
      source={images.speechBubble}
      style={styles.container}
      imageStyle={styles.bgImage}
      resizeMode="stretch"
    >
      <View>
        <TouchableOpacity
          style={[styles.sideButton, styles.sideButtonLeft]}
          onPress={onLeftIconPress}
        >
          <Image
            source={leftIcon && images[leftIcon]}
            style={leftButtonImageStyle}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.middle}>
        {titleContents.map((content, index) => (
          <Text
            key={shortid.generate()}
            variant={TextVariant.TitleMainWhite}
            showUnderline={index < 1}
            underlineStyle={styles.titleUnderline}
          >
            {content}
          </Text>
        ))}
      </View>

      {rightIcon && (
        <View>
          <TouchableOpacity
            style={[styles.sideButton, styles.sideButtonRight]}
            onPress={onRightIconPress}
          >
            <Image
              source={images[rightIcon]}
              style={rightButtonImageStyle}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      )}
    </ImageBackground>
  );
};

export default SpeechBubbleTitleBar;
