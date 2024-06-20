import React, { useState } from 'react';
import { View, ImageBackground, Image, StatusBar, TextInput, TouchableHighlight, TouchableOpacity } from 'react-native';
import { Text, Button, SearchInput, Container, BottomNavBar } from '../../../../components';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import { localization, screens, images } from '../../../../constants';
import { TextVariant } from '../../../../components/Text';
import { NavigationScreenProps } from 'react-navigation';
import colors from '../../../../styles/colors';
import RNPickerSelect from 'react-native-picker-select';
import { Collapse, CollapseHeader, CollapseBody, AccordionList } from 'accordion-collapse-react-native';
import { ScrollView } from 'react-native-gesture-handler';
import mainStyles from '../../../../styles/mainStyle';
import { mockData } from '../../../../constants';
import { SearchBar } from 'react-native-elements';
import { ListItem } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Rating } from 'react-native-ratings';

const Cart = ({ navigation }: NavigationScreenProps) => {
  const [count, setCount] = useState(false);
  const [selectedItem, setSelectedItem] = useState(0);
  const onPress = (id: any) => {
    console.log(id + '======= ID')
    setSelectedItem(id);
    if (count == false) {
      setCount(true)
    } else {
      setCount(false)
    }
  };


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

  const ConfirmationAction = () => navigation.navigate(screens.staff.da.paymentConfirmation);
  const vendorMapView = () => navigation.navigate(screens.staff.da.vendorsMapView);


  return (
    // <View style={styles.container}>
    <Container
      style={{ backgroundColor: 'white', marginBottom: 0, paddingBottom: 0 }}
      contentContainerStyle={{ height: 50, }}
      titleContainerStyle={{ height: 50, backgroundColor: 'transparent', alignItems: 'center', marginTop: 20, zIndex: 1 }}
      title={localization.cartTitle}
      headerLeft={{
        icon: 'back',
        onPress: () => navigation.goBack()
        //onPress: onBack
      }}
      navigation={navigation}
    >
      <StatusBar translucent backgroundColor="white" barStyle="dark-content" />
      <View style={[{ zIndex: 9, backgroundColor:'black', height: "100%" }]}>
      <ScrollView>
        <View style={[{ backgroundColor: '#fffbfb' }]}>
          <View style={[mainStyles.paddingL22, { display: "flex", flexDirection: "row", alignItems: "center" }]}>
            <View style={{ display: "flex", paddingLeft: 13, flex: 5 }}>
              <Text style={[styles.headerText]}>{localization.shopName}</Text>
              <Text style={[styles.infoText]}>{localization.shopAddress}</Text>
            </View>
            <Image
              style={styles.headerImg}
              source={images.slider1}
              resizeMode='cover'
            />
          </View>
        </View>
          {/* cart section */}
          <View style={[mainStyles.paddingLR20,{ backgroundColor: '#fff' }]}>
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
                <Text style={{ fontFamily: 'proximaNova-Bold', fontStyle: 'normal', fontWeight: '600', fontSize: 9, lineHeight: 15, letterSpacing: 0.04, color: "#000000" }}>£ 10.00</Text>
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
                <Text style={{ fontFamily: 'proximaNova-Bold', fontStyle: 'normal', fontWeight: '600', fontSize: 9, lineHeight: 15, letterSpacing: 0.04, color: "#000000" }}>£ 25.00</Text>
              </View>
            </View>

            <View style={[styles.totalPay]}>
              <Text style={[styles.totalPayText]}>Total to pay:</Text>
              <Text style={[styles.totalPrice]}>£ 35.00</Text>
            </View>
            <View style={[styles.addPromo]}>
              <Text style={[styles.addPromoText]}>+ Add Promo code or gift card</Text>
            </View>
          </View>

          {/* PAYMNET METHods */}
          <View style={[styles.paymentMethod, mainStyles.paddingLR20, { backgroundColor: '#fffbfb' }]}>
            {mockData.paymentmode.map((item, index) => {
              return (
                <TouchableOpacity key={index}
                  style={selectedItem == item.id ? [styles.activePaymentMethodMethod] : [styles.paymentMethodMode]}
                  onPress={() => onPress(item.id)}>
                  <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%", paddingTop: 11 }}>
                    <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                      <Image style={{width:25, height:20}} resizeMode='contain' source={item.paymentMethodLogo}></Image>
                      <Text style={
                        selectedItem == item.id ?
                        [styles.activepaymentMethodText]:[styles.paymentMethodText]
                        }>{item.paymentMethod}</Text>
                    </View>
                    {selectedItem == item.id ? (
                      <MaterialCommunityIcons
                        size={16}
                        color="#F49B13"
                        name='check-bold'
                      />
                    ) : (null)}
                  </View>
                  <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "89.5%", alignSelf: "flex-end" }}>
                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}>
                      {item.detail != '' ? (
                        <Text style={[styles.cardNum]}>{item.detail}</Text>
                      ) : (null)}
                      {item.paymentMethod == localization.creditcard ? (
                        <View>
                          {
                            item.detail != '' ? (
                              <Image source={images.visa} />
                            ) : (null)
                          }
                        </View>
                      ) : (null)}
                    </View>
                    {item.paymentMethod == localization.creditcard ? (
                      <View>
                        {
                          item.detail != '' ? (
                            <View style={{ display: "flex", flexDirection: "row" }}>
                              <Text style={[styles.newCard, { marginBottom: 0 }]}> {localization.edit} / </Text>
                              <Text style={[styles.newCard, { marginBottom: 0, marginLeft: 2 }]}>{localization.newCard2}</Text>
                            </View>
                          ) : (
                              <View style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", width: "100%" }}>
                                <Text style={[styles.newCard]}> {localization.newcard}</Text>
                              </View>
                            )
                        }
                      </View>
                    ) : (null)}
                  </View>
                </TouchableOpacity>
              )
            })}
          {/* </View>
        
        <View style={{ backgroundColor: '#fffbfb' }}> */}
          <View style={{ display: "flex", justifyContent: "center", flexDirection: "row", marginTop: 7 }}>
            <Text style={[styles.seeVenu]}>See venue</Text>
            <Text style={[styles.cancelation]}>Cancellation Policy</Text>
          </View>
          <View style={{ display: "flex", justifyContent: "center", flexDirection: "row", marginTop: 7 }}>
            <Text style={[styles.seeVenu]}>By continuing you agree to the BUUKIT</Text>
            <Text style={[styles.cancelation]}>Terms & Conditions</Text>
          </View>
          <TouchableOpacity style={[styles.continue]}
            onPress={ConfirmationAction}
          >
            <Text style={[styles.continueText]}>{localization.bookingConfirm}</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
      </View>
    </Container>
  );
};

export default Cart;
