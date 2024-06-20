import React, { useState } from 'react';
import { View, ImageBackground, Image, StatusBar, ScrollView, TextInput, TouchableHighlight, TouchableOpacity } from 'react-native';
import { Text, Button, SearchInput, Container, BottomNavBar } from '../../../../components';
import styles from './styles';
import { localization, screens, images } from '../../../../constants';
import { NavigationScreenProps } from 'react-navigation';
import colors from '../../../../styles/colors';
import { mockData } from '../../../../constants';


const Legal = ({ navigation }: NavigationScreenProps) => {
  const onActivateAccount = () => navigation.navigate(screens.auth.activation);
  const onLogMeIn = () => navigation.navigate(screens.staff.da.attendance);
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const [search, setSearch] = useState('');
  const [searchSection, setSearchSection] = useState(true);

  const actionButtonOptions: Array<
    Array<React.ComponentProps<typeof Button>>
  > = [];

  const updateSearch = (search: string) => {
    setSearch(search);
  };

  const toggleSearchDisplay = () => {
    console.log("CLICKED== ");
    if (searchSection == true) {
      setSearchSection(false)
    }
    else {
      setSearchSection(true)
    }
  }

  const selectVendor = () => navigation.navigate(screens.staff.da.vendorDetails);
  const vendorMapView = () => navigation.navigate(screens.staff.da.vendorsMapView);

  return (
    // <View style={styles.container}>
    <Container
    contentContainerStyle={{ height: 50, }}
    title={localization.legal}
    titleContainerStyle={{ height: 50, backgroundColor: 'white', justifyContent:'center', alignItems:'flex-start', marginTop: 20}}
    headerLeft={{
      icon: 'back',
      onPress: () => navigation.goBack()
    }}
    navigation={navigation}

  >
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <ScrollView style={[{ zIndex: 9 }]}>

        <View style={{marginTop:30, borderBottomWidth: 0.5, borderBottomColor: colors.greyLight,}}>
          {mockData.legal.map((data) => {
            return (
              <TouchableOpacity style={{
                padding:10,
                flex: 1,
                flexDirection: 'row',
                borderTopWidth: 0.5,
                borderTopColor: colors.greyLight,
                //borderBottomWidth: 0.5,
                //borderBottomColor: colors.greyLight,
                justifyContent:'flex-start',
                alignContent:'center',
                alignItems:'center',
                height:42
              }}>
                <Text
                  style={styles.iconsStyle}
                ></Text>
                <Text style={styles.titleStyle}>{data.title}</Text>
              </TouchableOpacity>
            )
          })}
        </View>
      </ScrollView>
    </Container>
  );
};

export default Legal;
