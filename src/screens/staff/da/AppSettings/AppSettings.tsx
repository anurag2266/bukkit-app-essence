import React, { useState } from 'react';
import { View, ImageBackground, Switch, Image, StatusBar, ScrollView, TextInput, TouchableHighlight, TouchableOpacity } from 'react-native';
import { Text, Button, SearchInput, Container, BottomNavBar } from '../../../../components';
import styles from './styles';
import { localization, screens, images } from '../../../../constants';
import { NavigationScreenProps } from 'react-navigation';
import colors from '../../../../styles/colors';
import { mockData } from '../../../../constants';
import ToggleSwitch from 'toggle-switch-react-native'


const AppSettings = ({ navigation }: NavigationScreenProps) => {
  const onActivateAccount = () => navigation.navigate(screens.auth.activation);
  const onLogMeIn = () => navigation.navigate(screens.staff.da.attendance);
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const [search, setSearch] = useState('');
  const [searchSection, setSearchSection] = useState(true);
  const [isEnabled, setIsEnabled] = useState(false);
  const [emailToggleSwitch, setemailToggleSwitch] = useState(true);
  const [smsToggleSwitch, setsmsToggleSwitch] = useState(false);
  const [appToggleSwitch, setappToggleSwitch] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

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
    // <Container
    //   contentContainerStyle={{ height: 50, }}
    //   title={localization.appSettings}
    //   titleContainerStyle={{ backgroundColor: 'white', justifyContent: 'center', alignItems: 'flex-start' }}
    //   headerLeft={{
    //     icon: 'back',
    //     onPress: () => navigation.goBack()
    //   }}
    //   navigation={navigation}
    // >

    <Container
    contentContainerStyle={{ height: 50, }}
    title={localization.appSettings}
    titleContainerStyle={{ backgroundColor: 'white', justifyContent:'center', alignItems:'flex-start', marginTop: 20}}
    headerLeft={{
      icon: 'back',
      onPress: () => navigation.goBack()
    }}
    navigation={navigation}

  >
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <ScrollView style={[{ zIndex: 9 }]}>

        <View style={{ marginTop: 30, borderBottomWidth: 0.5, borderBottomColor: colors.greyLight, paddingRight: 20, paddingLeft: 20 }}>

          <View style={{
            padding: 10,
            flexDirection: 'row',
            borderTopWidth: 0.5,
            borderTopColor: colors.greyLight,
            //borderBottomWidth: 0.5,
            //borderBottomColor: colors.greyLight,
            justifyContent: 'flex-start',
            alignItems: 'center',
            // height:55
            paddingBottom: 12,
            paddingTop: 12
          }}>
            <View style={{ display: "flex" }}>
              <Image source={images.notificationIcon} style={{ height: 25, width: 22, resizeMode: "cover" }} />
            </View>
            <View style={{ display: "flex", flex: 1, justifyContent: "flex-start", marginLeft: 14 }}>
              <Text style={[styles.appTitle]}>Notifications</Text>
              <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>

                <View style={{ display: "flex", flex: 1, alignItems: "center", flexDirection: "row", justifyContent: "space-between" }}>

                  <View style={{ display: "flex", flex: 1, alignItems: "center", flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={[styles.appBottomText]}>Email</Text>

                    <ToggleSwitch
                      isOn={emailToggleSwitch}
                      onColor="#F49B13"
                      offColor="#AFACAC"
                      size="small"
                      onToggle={emailToggleSwitch => {
                        setemailToggleSwitch(emailToggleSwitch)
                      }}
                    />
                    <View>
                    </View>
                  </View>
                  <View style={{ display: "flex", flex: 1, alignItems: "center", flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={[styles.appBottomText]}>SMS</Text>
                    <ToggleSwitch
                      isOn={smsToggleSwitch}
                      onColor="#F49B13"
                      offColor="#AFACAC"
                      size="small"
                      onToggle={smsToggleSwitch => {
                        setsmsToggleSwitch(smsToggleSwitch)
                      }}
                    />
                    <View>
                    </View>
                  </View>
                  <View style={{ display: "flex", flex: 1, alignItems: "center", flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={[styles.appBottomText]}>App</Text>
                    <ToggleSwitch
                      isOn={appToggleSwitch}
                      onColor="#F49B13"
                      offColor="#AFACAC"
                      size="small"
                      onToggle={appToggleSwitch => {
                        setappToggleSwitch(appToggleSwitch)
                      }}
                    />
                    <View>
                    </View>
                  </View>

                </View>

              </View>
            </View>
          </View>



          {mockData.appSetting.map((data) => {
            return (
              <TouchableOpacity style={{
                padding: 10,
                flexDirection: 'row',
                borderTopWidth: 0.5,
                borderTopColor: colors.greyLight,
                //borderBottomWidth: 0.5,
                //borderBottomColor: colors.greyLight,
                justifyContent: 'flex-start',
                alignItems: 'center',
                // height:55
                paddingBottom: 12,
                paddingTop: 12
              }}>
                <View style={{ display: "flex" }}>
                  {data.icon == images.appversionIocn ? (
                    <Image source={data.icon} style={{ height: 21, width: 18, resizeMode: "contain" }} />
                  ) : (null)}
                  {data.icon == images.appPermissionIcon ? (
                    <Image source={data.icon} style={{ height: 27, width: 22, resizeMode: "contain" }} />
                  ) : (null)}

                  {data.icon == images.languageIcon ? (
                    <Image source={data.icon} style={{ height: 20, width: 25, resizeMode: "contain" }} />
                  ) : (null)}
                  {data.icon == images.currencyIcon ? (
                    <Image source={data.icon} style={{ height: 22, width: 22, resizeMode: "contain" }} />
                  ) : (null)}

                </View>
                <View style={{ display: "flex", flex: 1, justifyContent: "flex-start", marginLeft: 14 }}>
                  <Text style={[styles.appTitle]}>{data.title}</Text>
                  <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    {data.options.map((item) => {
                      return (
                        <View style={{ display: "flex", flex: 1, alignItems: "center", flexDirection: "row", justifyContent: "space-between" }}>
                          {item.value == "on" ?
                            (
                              null
                            ) : (
                              <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                <Text style={[styles.appBottomText, { flex: 1 }]}>
                                  {item.text}
                                </Text>

                                {item.actionButton == true ? (
                                  <TouchableOpacity
                                    style={{
                                      borderWidth: 0.5,
                                      borderColor: "#A0A0A0",
                                      borderRadius: 2,
                                      display: "flex",
                                      justifyContent: "center",
                                      alignItems: "center",
                                      width: 69,
                                      height: 15,

                                    }}>
                                    <Text style={[styles.updateAppText]}>
                                      Update App
                          </Text>
                                  </TouchableOpacity>
                                ) : (
                                    <Image source={item.goTo} style={{ width: 5.5, height: 6 }} />
                                  )}
                              </View>
                            )}
                        </View>
                      )
                    })}
                  </View>
                </View>
              </TouchableOpacity>
            )
          })}
        </View>
      </ScrollView>
    </Container>
  );
};

export default AppSettings;
