import React from 'react';
import { TouchableOpacity, ViewStyle, StyleProp } from 'react-native';
import Text, { TextVariant } from '../Text';

import { ScaledSheet } from '../../utils';
import colors from '../../styles/colors';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    padding: '11@s',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.white,
    backgroundColor: colors.white,
    display:'flex'
  },

  currentTab: {
    //fontFamily:'proximaNova-Bold',
    // backgroundColor: colors.greyLight
  },

  title: {
    textTransform: 'uppercase',
    fontSize: 12,
    lineHeight: 12,
    color: "#000000",
    fontStyle: "normal",
    fontWeight: "600",
    fontFamily: 'proximaNova',
    letterSpacing: 0.04,
  },
  titleActive: {
    textTransform: 'uppercase',
    fontSize: 12,
    lineHeight: 12,
    color: "#000000",
    fontStyle: "normal",
    fontWeight: "600",
    fontFamily: 'proximaNova-Bold',
    letterSpacing: 0.04,
  }
});

type TabProps = {
  style?: StyleProp<ViewStyle>;
  currentTabStyle?: StyleProp<ViewStyle>;
  title: string;
  isCurrentTab?: boolean;
  onPress?: () => void;
};

const Tab = ({
  style,
  currentTabStyle = styles.currentTab,
  title,
  isCurrentTab = false,
  onPress
}: TabProps) => (
    <TouchableOpacity
      style={[styles.container, style, isCurrentTab && currentTabStyle]}
      disabled={isCurrentTab}
      onPress={onPress}
    >
      <Text
        style={
          isCurrentTab == false
            ? styles.title
            : styles.titleActive
        }
        variant={TextVariant.Heading4GreyDarkBold}
      // showUnderline={isCurrentTab}
      // underlinePosition="center"
      // underlineHeight={3.5}
      // underlineWidth={20}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );

export default Tab;
