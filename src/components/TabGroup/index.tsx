import React, { useState } from 'react';
import shortid from 'shortid';
import { View, StyleProp, ViewStyle } from 'react-native';
import Tab from './Tab';

import { ScaledSheet } from '../../utils';

const styles = ScaledSheet.create({
  container: {
    flex: 1
  },

  tabsContainer: {
    flexDirection: 'row',
    paddingLeft:20,
    paddingRight:20
  },

  content: {
    flex: 1
  }
});

type Tab = {
  title: string;
  content?: React.ReactNode;
};

type TabGroupProps = {
  style?: StyleProp<ViewStyle>;
  tabs: Array<Tab>;
  tabStyle?: StyleProp<ViewStyle>;
  defaultCurrentTabIndex?: number;
  onTabChange?: (index: number) => void;
};

const TabGroup = ({
  style,
  tabs,
  tabStyle,
  defaultCurrentTabIndex = 0,
  onTabChange
}: TabGroupProps) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(
    defaultCurrentTabIndex
  );

  const handleTabPress = (index: number) => () => {
    setCurrentTabIndex(index);

    if (onTabChange) {
      onTabChange(index);
    }
  };
  const { content } = tabs[currentTabIndex];

  return (
    <View style={[styles.container, style]}>
      <View style={styles.tabsContainer}>
        {tabs.map(({ title }, index) => {
          if(index==0){
            return(
              <Tab
              title={title}
              style={tabStyle}
              isCurrentTab={index === currentTabIndex}
              onPress={handleTabPress(index)}
              key={shortid.generate()}
            />
            )
          }
          else if(index==1){
            return(
              <Tab
              title={title}
              style={[tabStyle,{
                borderRightWidth:1,
                borderColor: "#F49B13",
                borderStyle: "solid", 
                borderLeftWidth:1,               
                borderTopWidth:0, 
                borderBottomWidth:0,  
                marginTop:12,
                marginBottom:12             
              }]}
              isCurrentTab={index === currentTabIndex}
              onPress={handleTabPress(index)}
              key={shortid.generate()}
            />
            )
          }
          else if(index==2){
            return(
              <Tab
              title={title}
              style={tabStyle}
              isCurrentTab={index === currentTabIndex}
              onPress={handleTabPress(index)}
              key={shortid.generate()}
            />
            )
          }
          else{
            return(
              <Tab
              title={title}
              style={tabStyle}
              isCurrentTab={index === currentTabIndex}
              onPress={handleTabPress(index)}
              key={shortid.generate()}
            />
            ) 
          }
         
})}
      </View>

      <View style={styles.content}>{content}</View>
    </View>
  );
};

export default TabGroup;
