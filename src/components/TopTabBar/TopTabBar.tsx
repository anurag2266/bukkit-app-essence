import React, { useState, useRef } from 'react';
import shortid from 'shortid';
import {
  ScrollView,
  ImageBackground,
  StyleProp,
  TextStyle
} from 'react-native';
import TabItem from './TabItem';

import styles from './styles';
import { images } from '../../constants';

type TopTabBarProps = {
  tabs?: Array<string>;
  defaultCurrentTabIndex?: number;
};

const TopTabBar = ({
  tabs = [],
  defaultCurrentTabIndex = 0
}: TopTabBarProps) => {
  const scrollViewRef: any = useRef(null);
  const [currentTab, setCurrentTab] = useState(defaultCurrentTabIndex);

  const getTabStyle = (index: number) => {
    let style: StyleProp<TextStyle> = styles.middleTab;

    if (tabs.length > 1) {
      if (index === 0) {
        style = styles.firstTab;
      } else if (index === tabs.length - 1) {
        style = styles.lastTab;
      }
    }

    return style;
  };

  const handleTabPress = (index: number) => () => {
    setCurrentTab(index);

    if (scrollViewRef && scrollViewRef.current) {
      if (index > 1) {
        scrollViewRef.current.scrollToEnd();
      } else {
        scrollViewRef.current.scrollTo({ x: 0, y: 0 });
      }
    }
  };

  const renderTab = (tab: string, index: number) => (
    <TabItem
      key={shortid.generate()}
      containerStyle={getTabStyle(index)}
      title={tab}
      isCurrent={index === currentTab}
      onPress={handleTabPress(index)}
    />
  );

  return (
    <ImageBackground
      source={images.topNavBar}
      style={styles.container}
      resizeMode="stretch"
    >
      <ScrollView
        style={styles.tabNamesContainer}
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {tabs.map(renderTab)}
      </ScrollView>
    </ImageBackground>
  );
};

export default TopTabBar;
