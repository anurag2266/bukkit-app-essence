import React, { useState, useEffect } from 'react';
import { View, ImageBackground, Image, StatusBar, TextInput, TouchableHighlight, TouchableOpacity } from 'react-native';
import { Text, Button, SearchInput, Container, BottomNavBar } from '../../../../components';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import { localization, screens, images } from '../../../../constants';
import { TextVariant } from '../../../../components/Text';
import { NavigationScreenProps } from 'react-navigation';
import colors from '../../../../styles/colors';
import { ScrollView } from 'react-native-gesture-handler';
import { mockData } from '../../../../constants';
import mainStyles from '../../../../styles/mainStyle';
import { Collapse, CollapseHeader, CollapseBody, AccordionList } from 'accordion-collapse-react-native';

const MyAppointment = ({ navigation }: NavigationScreenProps) => {
  const onActivateAccount = () => navigation.navigate(screens.auth.activation);
  const onLogMeIn = () => navigation.navigate(screens.staff.da.attendance);
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const [search, setSearch] = useState('');
  const [searchSection, setSearchSection] = useState(true);
  const [itemCount, setitemCount] = useState(0);
  const [collapse, setCollapse] = useState(mockData.payemntAccordian);

  const actionButtonOptions: Array<
    Array<React.ComponentProps<typeof Button>>
  > = [];

  const updateSearch = (search: string) => {
    setSearch(search);
  };
  useEffect(() => {
    setCollapse(mockData.payemntAccordian)
}, []);

  const toggleSearchDisplay = () => {
    console.log("CLICKED== ");
    if (searchSection == true) {
      setSearchSection(false)
    }
    else {
      setSearchSection(true)
    }
  }

  const bookService = (id: any, activeStatus: boolean) => {
    let data = itemCount;
    // setSelectedItem(id);
    if (activeStatus == false) {
      setitemCount(itemCount + 1);
    }
    else {
      if (itemCount > 0) {
        setitemCount(itemCount - 1);
      }
    }
  }


  return (
    // <View style={styles.container}>
    // <Container
    //   contentContainerStyle={styles.container}
    //   titleContainerStyle={{ height: 10, backgroundColor: 'transparent', alignItems: 'center', marginTop: 20 }}
    //   title=''
    //   navigation={navigation}
    // >

    <Container
      title=''
      contentContainerStyle={styles.container}
      titleContainerStyle={{ height: 10, backgroundColor: 'transparent', alignItems: 'center', marginTop: 20 }}
      actionImageSource={images.flash}
      actionButtonOptions={actionButtonOptions[currentTabIndex]}
      BottomBarComponent={BottomNavBar}
      navigation={navigation}
    >

      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <ScrollView style={[{ zIndex: 9, width: "100%" }]}>
        <View style={[{ paddingLeft: 15, paddingRight: 15 }]}>
          <Text style={[styles.collapseheaderText, { paddingLeft: 20, marginBottom: 15 }]}>{localization.confirmedAppointment}</Text>
          <View style={[{ paddingLeft: 8, paddingRight: 8, paddingTop: 10, paddingBottom: 35, borderColor: "#A0A0A0", borderRadius: 5, borderWidth: 0.5 }]}>
            <View style={[{ display: "flex", flexDirection: "row", alignItems: "center" }]}>
              <View style={{ display: "flex", flex: 1, marginBottom: 15, paddingLeft: 15 }}>
                <Text style={[styles.headerText]}>{localization.shopName}</Text>
                <Text style={[styles.infoText]}>{localization.confirmAddress}</Text>
                <Text style={[styles.infoText]}>{localization.city}</Text>
              </View>
              <View style={[{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", position: "relative", bottom: 4 }]}>
                <Image style={[{ marginRight: 10 }]} source={images.detailHeaderImg} />
                <TouchableOpacity style={[styles.callButton]}>
                  <Text style={[styles.callText]}>{localization.call}</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={[styles.jobSection]}>
              <View style={[styles.dayTimeSection]}>
                <View style={[styles.daytimeContainer]}>
                  <Text style={[styles.payMentDate]}>{localization.payMentDate}</Text>
                </View>
                <View style={[styles.timeSection]}>
                  <Text style={[styles.time]}>11:00 - 12:00</Text>
                </View>
              </View>
              <View style={{ marginTop: 5 }}>
                <Text style={{ fontFamily: 'proximaNova-Bold', fontStyle: 'normal', fontWeight: '600', fontSize: 12, lineHeight: 15, letterSpacing: 0.04, color: "#000000" }}>Haircut</Text>
                <Text style={{ fontFamily: 'proximaNova', fontStyle: 'normal', fontWeight: 'normal', fontSize: 9.5, lineHeight: 15, letterSpacing: 0.04, color: "#F49B13" }}>With John Doe</Text>
                <Text style={{ fontFamily: 'proximaNova-Bold', fontStyle: 'normal', fontWeight: '600', fontSize: 9, lineHeight: 15, letterSpacing: 0.04, color: "#000000" }}>£ 10.00 (Pre-Paid)</Text>
              </View>
            </View>
            <View style={[styles.jobSection]}>
              <View style={[styles.dayTimeSection]}>
                <View style={[styles.daytimeContainer]}>
                  <Text style={[styles.payMentDate]}>{localization.payMentDate}</Text>
                </View>
                <View style={[styles.timeSection]}>
                  <Text style={[styles.time]}>11:00 - 12:00</Text>
                </View>
                <View style={[{ display: "flex", flexDirection: "row", marginLeft: 3 }]}>
                  <View style={{display: "flex", flexDirection: "row"}}>
                    <Image 
                    style={{width:14, height:18}}
                    source={images.waiting} />
                    <Ionicons
                      name='time-outline'
                      size={10}
                      style={{position: "relative", bottom: 2.5, right: 4}}
                      color={"#A0A0A0"}
                    />
                  </View>
                  <Text style={[styles.waitingTime]}>Waiting time: 2hrs</Text>
                </View>
              </View>
              <View style={{ marginTop: 5 }}>
                <Text style={{ fontFamily: 'proximaNova-Bold', fontStyle: 'normal', fontWeight: '600', fontSize: 12, lineHeight: 15, letterSpacing: 0.04, color: "#000000" }}>Braids</Text>
                <Text style={{ fontFamily: 'proximaNova', fontStyle: 'normal', fontWeight: 'normal', fontSize: 9, lineHeight: 15, letterSpacing: 0.04, color: "#F49B13" }}>With John Doe</Text>
                <Text style={{ fontFamily: 'proximaNova-Bold', fontStyle: 'normal', fontWeight: '600', fontSize: 9, lineHeight: 15, letterSpacing: 0.04, color: "#000000" }}>£ 25.00 (Pre-Paid)</Text>
              </View>
            </View>
          </View>
          <View style={[styles.buttonSection]}>
            <TouchableOpacity style={[styles.amend]}
            onPress={()=> console.log('clicked')}
            >
              <Text style={[styles.amendText]}>Amend</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.amend]}>
              <Text style={[styles.amendText, { color: "#FF3D00" }]}>Cancel</Text>
            </TouchableOpacity>
          </View>
          <View>
            {collapse.map((item, index) => {
              return (
                <Collapse
                  onToggle={() => {
                    bookService(item.id, item.active)
                    if (item.active == false) {
                      item.active = true
                    }
                    else if (item.active == true) {
                      item.active = false
                    }
                  }}
                >
                  <CollapseHeader style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 20, paddingRight: 10 }}>
                    <View style={{ marginTop: 25, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                      <Text style={[styles.collapseheaderText]}>{item.title}</Text>
                      <View>
                        {item.active == false ?
                          (
                            <Text>
                              <Entypo
                                name='plus'
                                size={15}
                              />
                            </Text>
                          ) : (
                            <Text>
                              <Entypo
                                name='minus'
                                size={15}
                                color={colors.black}
                              />
                            </Text>
                          )}
                      </View>
                    </View>
                  </CollapseHeader>
                  <CollapseBody style={{ marginTop: 10 }}>
                    <View style={[{ paddingLeft: 8, paddingRight: 8, paddingTop: 5, paddingBottom: 35, borderColor: "#A0A0A0", borderRadius: 5, borderWidth: 0.5 }]}>
                      <View style={[{ display: "flex", flexDirection: "row", alignItems: "center", paddingLeft: 15 }]}>
                        <View style={{ display: "flex", flex: 1 }}>
                          <Text style={[styles.accheaderText]}>{localization.bestTyres}</Text>
                          <Text style={[styles.accAddress]}>{localization.appointmentAddress}</Text>
                        </View>
                      </View>
                      <View style={[styles.jobSection, { borderColor: "#A0A0A0" }]}>
                        <View style={[styles.dayTimeSection]}>
                          <View style={[styles.daytimeContainer, { backgroundColor: "#DADADA" }]}>
                            <Text style={[styles.payMentDate]}>{localization.payMentDate}</Text>
                          </View>
                          <View style={[styles.timeSection, { borderColor: "#555555" }]}>
                            <Text style={[styles.time]}>15:00 - 15:30</Text>
                          </View>
                        </View>
                        <View style={{ marginTop: 5 }}>
                          <Text style={{ fontFamily: 'proximaNova-Bold', fontStyle: 'normal', fontWeight: '600', fontSize: 12, lineHeight: 15, letterSpacing: 0.04, color: "#555555" }}>Wheel balancing (Rear)</Text>
                          <View style={{flexDirection:'row'}}>
                            <Text style={{ fontFamily: 'proximaNova', fontStyle: 'normal', fontWeight: 'normal', fontSize: 9, lineHeight: 15, letterSpacing: 0.04, color: "#555555" }}>With </Text>
                            <Text style={{ fontFamily: 'proximaNova-Bold', fontStyle: 'normal', fontWeight: 'normal', fontSize: 9, lineHeight: 15, letterSpacing: 0.04, color: "#555555" }}>Marcus</Text>
                          </View>
                          <Text style={{ fontFamily: 'proximaNova-Bold', fontStyle: 'normal', fontWeight: '600', fontSize: 9, lineHeight: 15, letterSpacing: 0.04, color: "#000000" }}>£ 65.00</Text>
                        </View>
                      </View>
                    </View>
                    <View style={[styles.buttonSection]}>
                      <TouchableOpacity style={[styles.amend]}>
                        <Text style={[styles.amendText, { color: "#F49B13", textTransform: "uppercase" }]}>Book Again</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={[styles.amend]}>
                        <Text style={[styles.amendText, { color: "#F49B13", textTransform: "uppercase" }]}>Write Review</Text>
                      </TouchableOpacity>
                    </View>
                  </CollapseBody>
                </Collapse>
              )
            })}
          </View>
        </View>
      </ScrollView>
    </Container>
  );
};

export default MyAppointment;
