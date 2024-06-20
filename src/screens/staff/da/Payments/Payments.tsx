import React, { useState } from 'react';
import { View, ImageBackground, Image, StatusBar, TextInput, TouchableHighlight, TouchableOpacity } from 'react-native';
import { Text, Button, SearchInput, Container, BottomNavBar } from '../../../../components';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import { localization, screens, images } from '../../../../constants';
import { TextVariant } from '../../../../components/Text';
import { NavigationScreenProps } from 'react-navigation';
import colors from '../../../../styles/colors';
import { ScrollView } from 'react-native-gesture-handler';
import mainStyles from '../../../../styles/mainStyle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { mockData } from '../../../../constants';


const Payments = ({ navigation }: NavigationScreenProps) => {
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


  return (
    // <View style={styles.container}>
    <Container
      contentContainerStyle={[styles.container,{backgroundColor:'#fffbfb'}]}
      style={{marginBottom:0, paddingBottom:0, backgroundColor:'#fffbfb'}}
      titleContainerStyle={{ height: 50, backgroundColor: 'transparent', alignItems: 'center', marginTop: 20, zIndex: 1 }}
      title={localization.payments}
      headerLeft={{
        icon: 'back',
        onPress: () => navigation.goBack()
      }}
      navigation={navigation}

    >
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <ScrollView style={[{ zIndex: 9, width: "100%" }]}>
        <View style={[ mainStyles.marginT20,{backgroundColor:'#fffbfb'}]}>
          <View style={[mainStyles.paddingLR20,{marginBottom:30}]}>
          <View style={{backgroundColor:'#fffbfb'}}>
            <Text style={[styles.paymetMethodHeading]}>{localization.paymentMethod}</Text>
          </View>
          <View style={[styles.paymentMethod,{backgroundColor:'#fffbfb'}]}>
          {mockData.settingpaymentmode.map((item, index) => {
                return (
                  <TouchableOpacity key={index}
                    style={selectedItem == item.id ? [styles.activePaymentMethodMethod] : [styles.paymentMethodMode]}
                    onPress={() => onPress(item.id)}>
                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%", paddingTop: 11 }}>
                      <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        <Image style={{width:25, height:20}} resizeMode='contain' source={item.paymentMethodLogo}></Image>
                        <Text style={[styles.paymentMethodText]}>{item.paymentMethod}</Text>
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
                                <Text style={[styles.newCard, { marginBottom: 0, marginLeft: 2, textTransform: "lowercase" }]}>{localization.newCard2}</Text>
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
            </View>
            </View>
            <View style={[mainStyles.paddingLR20,{ backgroundColor:'#fff' }]}>
          <View style={[{ marginTop: 15, paddingTop:15, backgroundColor:'#fff' }]}>
            <Text style={[styles.transactionHistory]}>{localization.transaction}</Text>
          </View>
          {mockData.paymentHistory.map((item) => {
            return (
              <View style={[styles.PaymentHistory,{backgroundColor:'#fff'}]}>
                <Text style={[styles.paymenHistoryDetails]}>{item.paymentDate}</Text>
                <Text style={[styles.paymenHistoryDetails]}>{item.payedFor}</Text>
                <Text style={[styles.paymenHistoryDetails]}>{item.amount}</Text>
                <Image source={item.receipt} />
              </View>
            )
          })}
          </View>
        </View>
      </ScrollView>
    </Container>
  );
};

export default Payments;
