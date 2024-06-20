import React from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';
import Button from '../Button';
import ActionButton from '../ActionButton';
import TopTabBar from '../TopTabBar';
import BottomNavBar from '../BottomNavBar';

import { ScaledSheet } from '../../utils';
import { tabs, images } from '../../constants';
import { NavigationScreenProps } from 'react-navigation';


const styles = ScaledSheet.create({
  container: {
    flex: 1,
    paddingBottom: '60@s'
  },

  content: {
    flex: 1
  }
});

type TabbedContainerProps  = NavigationScreenProps & {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
  actionButtonOptions?: Array<React.ComponentProps<typeof Button>>;
  defaultCurrentTabIndex?: number;
};

const TabbedContainer = ({
  children,
  style,
  contentContainerStyle,
  actionButtonOptions,
  defaultCurrentTabIndex = 1,
  ...props
}: TabbedContainerProps) => (
  <View style={[styles.container, style]}>
    <TopTabBar tabs={tabs} defaultCurrentTabIndex={defaultCurrentTabIndex} />
    <View style={[styles.content, contentContainerStyle]}>{children}</View>
    <BottomNavBar
    {...props}
      // actionButton={
      //   <ActionButton source={images.flash} options={actionButtonOptions} />
      // }
    />
  </View>
);

export default TabbedContainer;
