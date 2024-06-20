import React, { useState, useEffect } from 'react';
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
import { mockData } from '../../../../constants';
import mainStyles from '../../../../styles/mainStyle';
import { Collapse, CollapseHeader, CollapseBody, AccordionList } from 'accordion-collapse-react-native';

import Entypo from 'react-native-vector-icons/Entypo';


const MyFavourites = ({ navigation }: NavigationScreenProps) => {
  const onActivateAccount = () => navigation.navigate(screens.auth.activation);
  const onLogMeIn = () => navigation.navigate(screens.staff.da.attendance);
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const [collapse, setCollapse] = useState(mockData.favouritesAccordion);
  const [search, setSearch] = useState('');
  const [searchSection, setSearchSection] = useState(true);
  const [itemCount, setitemCount] = useState(0);
  const [itemCollapsed, setItemCollapsed] = useState(false)

  const actionButtonOptions: Array<
    Array<React.ComponentProps<typeof Button>>
  > = [];

  const updateSearch = (search: string) => {
    setSearch(search);
  };
  useEffect(() => {
    setCollapse(mockData.favouritesAccordion)
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

  const selectVendor = () => navigation.navigate(screens.staff.da.vendorDetails);

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
          {collapse.map((item, index) => {
            return (
              <Collapse
                isCollapsed={index == 0 ? true : false}
                onToggle={() => {
                  bookService(item.id, item.active)
                  if (item.active == false) {
                    item.active = true
                  }
                  else if (item.active == true) {
                    item.active = false
                  }
                }}
                style={{
                  marginLeft: 12,
                  marginRight: 12,
                }}
              >
                <CollapseHeader style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 0, paddingRight: 0 }}>
                  <View style={{ marginTop: 22, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <Text style={[styles.collapseheaderText]}>{item.title}</Text>
                    {index != 0 ?(
                    <View>
                      {item.active == false ?
                        (
                          <Text style={{position: 'relative', right: 20}}>
                            <Entypo
                              name='plus'
                              size={15}
                            />
                          </Text>
                        ) : (
                          <Text style={{position: 'relative', right: 20}}>
                            <Entypo
                              name='minus'
                              size={15}
                              color={colors.black}
                            />
                          </Text>
                        )}
                    </View>
                    ):(null) }
                  </View>
                </CollapseHeader>
                <CollapseBody style={{ marginTop: 15, }}>
                  {/* detail */}
                  {item.list.map((data) => {
                    return (
                      <View style={styles.vendorCard}>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                          {/* IMGAE */}
                          <View style={{ flex: 1, width: 120 }}
                          >
                            <View style={{ flex: 3 }}>
                              <Image
                                style={[styles.profileImage, { borderTopLeftRadius: 6 }]}
                                source={data.profilePic}
                                resizeMode='cover'
                              />

                              {/* <EntypoIcon style={[styles.buttonIcon]}
                          name='heart-outlined'
                          color={colors.white}
                          size={18}
                          style={{ position: 'absolute', top: 5, left: 5 }}
                        /> */}
                            </View>
                            <View style={{ height: 35, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.yellow, borderBottomLeftRadius: 6 }}>
                              <Image
                                style={styles.ratingIcon}
                                source={images.starRating}
                                resizeMode='stretch'
                              />
                              <Text style={[styles.reviewText]}>{data.totalReview} Reviews</Text>
                            </View>
                          </View>
                          {/* DETAIL */}
                          <View style={{ flex: 2 }}>
                            {/* user detail section */}
                            <View style={{ flex: 3, paddingTop: 4, paddingBottom: 4, paddingLeft: 10, paddingRight: 10, minHeight: 110 }}>
                              <Text
                                style={[mainStyles.font12Semi, { color: colors.greyDark, textTransform: 'capitalize' }]}
                                onPress={selectVendor}>
                                {data.name}
                              </Text>
                              <Text
                                style={[mainStyles.font9Semi, { color: '#55555', lineHeight: 12, textTransform: 'capitalize', marginBottom: 10, marginTop: 2 }]}
                                onPress={selectVendor}
                              >
                                {data.category} | {data.type}
                              </Text>
                              <Text
                                style={[mainStyles.font9Regular, { color: '#55555', lineHeight: 10, }]}
                                onPress={selectVendor}
                              >
                                {data.location}
                              </Text>
                              <Text
                                style={[mainStyles.font9Regular, { color: '#55555', lineHeight: 10, marginBottom: 2, marginTop: 4 }]}
                                onPress={selectVendor}
                              >
                                ({data.distance})
              </Text>
                              {/* <Text
                          style={[mainStyles.font9Semi, { color: colors.yellow, lineHeight: 12, textTransform: 'capitalize', marginBottom: 2, marginTop: 16 }]}
                          onPress={selectVendor}
                        ></Text> */}

                            </View>

                            <View style={{ height: 35, justifyContent: 'center', alignItems: 'flex-start', paddingLeft: 10, borderTopWidth: 0.5, borderTopColor: colors.greyLight }}>
                              {/* <Text
                          style={[mainStyles.font12Semi, { color: colors.greyDark }]}
                          onPress={selectVendor}
                        >£{data.minPrice} - £{data.maxPrice}</Text> */}
                            </View>
                          </View>
                        </View>
                      </View>
                    )
                  })}
                </CollapseBody>
              </Collapse>
            )
          })}

        </View>
      </ScrollView>
    </Container>
  );
};

export default MyFavourites;
