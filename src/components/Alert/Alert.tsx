import React from 'react';
import shortid from 'shortid';
import {
  View,
  ViewStyle,
  StyleProp,
  TextStyle,
  KeyboardAvoidingView
} from 'react-native';
import Text, { TextVariant } from '../Text';
import Overlay from '../Overlay';
import AlertButton from './AlertButton';

import styles from './styles';

type AlertButtonProps = React.ComponentProps<typeof AlertButton>;

type AlertProps = React.ComponentProps<typeof Overlay> & {
  containerStyle?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
  title?: string;
  titleStyle?: StyleProp<TextStyle>;
  buttons?: Array<AlertButtonProps>;
  buttonsContainerStyle?: StyleProp<ViewStyle>;
  avoidKeyboard?: boolean;
};

const Alert = ({
  children,
  containerStyle,
  contentContainerStyle,
  title,
  titleStyle,
  buttons = [],
  buttonsContainerStyle,
  avoidKeyboard = false,
  ...props
}: AlertProps) => {
  const getButtonStyle = (index: number) => {
    let style;

    if (buttons.length > 1) {
      if (index === 0) {
        style = styles.firstButton;
      } else if (index === buttons.length - 1) {
        style = styles.lastButton;
      }
    }

    return style;
  };

  const renderButton = (button: AlertButtonProps, index: number) => {
    const style = getButtonStyle(index);
    return <AlertButton style={style} key={shortid.generate()} {...button} />;
  };

  const renderButtons = () => (
    <View style={[styles.buttonsContainer, buttonsContainerStyle]}>
      {buttons.map(renderButton)}
    </View>
  );

  const content = (
    <View style={[styles.container, containerStyle]}>
      <Text
        style={[styles.title, titleStyle]}
        variant={TextVariant.Heading1GreyDarkRegular}
      >
        {title}
      </Text>

      <View style={[styles.contentContainer, contentContainerStyle]}>
        {children}
      </View>

      {buttons.length >= 1 && renderButtons()}
    </View>
  );

  return (
    <Overlay style={styles.modal} {...props}>
      {avoidKeyboard ? (
        <KeyboardAvoidingView behavior="position">
          {content}
        </KeyboardAvoidingView>
      ) : (
        content
      )}
    </Overlay>
  );
};

export default Alert;
