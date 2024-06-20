import React from 'react';
import { View, StyleProp, ViewStyle, ImageSourcePropType, TextStyle } from 'react-native';
import Button from '../Button';
import ActionButton from '../ActionButton';
import TitleBar from '../TitleBar';
import BottomBar from '../BottomBar';
import BottomNavBar from '../BottomNavBar';

import { ScaledSheet } from '../../utils';
import { NavigationScreenProps } from 'react-navigation';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    paddingBottom: '60@s'
  },

  containerHalfBottomPadding: {
    flex: 1,
    paddingBottom: '30@s'
  },

  content: {
    flex: 1
  }
});

type TitleBarProps = React.ComponentProps<typeof TitleBar>;

type ContainerProps = NavigationScreenProps & {
  children?: React.ReactNode;
  title: string;
  titleContainerStyle?: StyleProp<ViewStyle>;
  titleTextStyle?:  StyleProp<TextStyle>;
  headerLeft?: TitleBarProps['left'];
  headerRight?: TitleBarProps['right'];
  style?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
  actionImageSource?: ImageSourcePropType;
  actionButtonOptions?: Array<React.ComponentProps<typeof Button>>;
  onActionButtonPress?: () => void;
  BottomBarComponent?: typeof BottomBar | typeof BottomNavBar;
};

const Container = ({
  children,
  title,
  titleContainerStyle,
  titleTextStyle,
  headerLeft,
  headerRight,
  style,
  contentContainerStyle,
  actionImageSource,
  actionButtonOptions,
  onActionButtonPress,
  navigation,
  BottomBarComponent = BottomBar
}: ContainerProps) => (
  <View
    style={[
      actionImageSource ? styles.container : styles.containerHalfBottomPadding,
      style
    ]}
  >
    <TitleBar
      style={titleContainerStyle}
      titleStyle={titleTextStyle}
      title={title}
      right={headerRight}
      left={headerLeft}
    />

    <View style={[styles.content, contentContainerStyle]}>{children}</View>

    {actionImageSource && (
      <BottomBarComponent
      navigation={navigation}
        // actionButton={
        //   <ActionButton
        //     source={actionImageSource}
        //     options={actionButtonOptions}
        //     onPress={onActionButtonPress}
        //   />
        // }
      />
    )}
  </View>
);

export default Container;
