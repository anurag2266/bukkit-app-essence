import React, { useState } from 'react';
import { TabbedContainer, SummaryBox, TabGroup, TextInput, Button, ListItem } from '../../../components';
import { Hotspot, StudentLegacy, Status } from '../../../constants/types';
import { Text, View, ScrollView, Picker, FlatList, Image, TouchableOpacity } from 'react-native';
import { mockData, localization, images } from '../../../constants';
import mainStyles from './../../../styles/mainStyle';
import AntDesign from 'react-native-vector-icons/AntDesign';
import locStyle from './styles';
import colors from 'styles/colors';
import styles from './styles';
import { vendorAbout } from 'constants/mockData';
import { item } from '../ca/LessonDetail/components/StudentList/styles';
import MapView, { Marker } from "react-native-maps";
import { Collapse, CollapseHeader, CollapseBody, AccordionList } from 'accordion-collapse-react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


type VendorAboutProps = {
  onPress?: () => void;
  onPressMap?: () => void;

};

const VendorAbout = ({
  onPress,
  onPressMap
}: VendorAboutProps) => {

  const CustomMarker = () => (
    <Image source={images.mapPin} style={{width: 14, height: 22}} resizeMode='contain'/>

  );

  return (
    <>

      <View style={{ backgroundColor: colors.white, flex: 1, height: "100%" }}>
        <ScrollView style={locStyle.scroll} nestedScrollEnabled={true}>
          <View>
            <ScrollView style={locStyle.aboutService} nestedScrollEnabled={true}>
              {mockData.vendorAbout.map((item) => {
                return (
                  <View style={{ marginBottom: 45 }}>
                    {/* Map Sectin */}
                    <TouchableOpacity
                      style={[styles.mapContainer]}
                      onPress={onPressMap}
                    >
                      <MapView
                        style={{ height: '100%', width: "100%" }}
                        zoomEnabled
                        maxZoomLevel={100}
                        minZoomLevel={2}
                        zoomTapEnabled={true}

                        zoomControlEnabled={true}
                        region={{
                          latitude: 51.501476,
                          longitude: -0.140634,
                          latitudeDelta: 0.0425,
                          longitudeDelta: 0.0335,
                        }}

                      >
                        <Marker
                          //tracksViewChanges={false}
                          coordinate={{ latitude: 51.501476, longitude: -0.140634 }}
                          title="Buckingham palace"
                        //description={"description"}
                        >
                          <CustomMarker />
                          </Marker>
                      </MapView>

                    </TouchableOpacity>
                    <View style={[mainStyles.paddingLR20]}>
                      {/* info text section */}
                      <View>
                        <Text style={[styles.aboutUsText]}>{item.detail}</Text>
                        <View style={[styles.readMoreAbout]}>
                          {/* read more action */}
                          <Collapse
                            onToggle={() =>
                              console.log('ETST')
                            }
                            style={{
                              position: 'relative',
                              bottom: 0,
                              left: 0,
                              padding: 0,
                              margin: 0,

                            }}
                          >
                            <CollapseHeader style={[{
                              padding: 0,
                              maringTop: 10,
                              justifyContent: 'flex-end',
                              alignItems: 'flex-end',
                              textAlign: 'right',
                              paddingRight: 0,


                            }]}>
                              <View style={[styles.readMoreContainer]}>
                                <Text style={[styles.readMoreText, { textAlign: 'right' }]}>{localization.readMore}</Text>
                                <AntDesign
                                  style={[styles.readMoreIcon]}
                                  size={10}
                                  name='caretdown'
                                />
                              </View>
                            </CollapseHeader>
                            <CollapseBody style={{ padding: 0, margin: 0, paddingLeft: 0, paddingRight: 0 }}>
                              <Text style={[styles.aboutUsText]}>{item.subDetail}</Text>
                            </CollapseBody>
                          </Collapse>

                          {/* read more action */}
                          {/* <Text style={[styles.readMoreText]}>{localization.readMore}</Text>
                          <AntDesign
                            style={[styles.readMoreIcon]}
                            size={10}
                            name='caretdown'
                          /> */}
                        </View>
                      </View>
                      {/* facilities section */}
                      <View style={[styles.facilitiesSectiong]}>
                        <Text style={[styles.facilitiesHeading]}>{localization.facilitites}</Text>
                        <View style={[styles.flatList]}>
                          {/* <FlatList
                        data={item.facilities}
                        horizontal={true}
                        scrollEnabled={false}
                        style={{flex:1,flexWrap: "wrap"}}
                        renderItem={({ item }) =>
                          <View style={[styles.facilitiesList]}>
                            <View style={[styles.facilitiesListImage]}>
                              <Image source={item.image} />
                            </View>
                            <Text style={[styles.facilitiesListText]}>{item.name}</Text>
                          </View>
                        }
                      /> */}
                          <View style={{ paddingBottom: 5, height: 60, paddingTop: 5, flex: 1, flexDirection: "row", flexWrap: "wrap", alignItems: "center" }}>
                            {item.facilities.map((item) => {
                              return (
                                <View style={{ width: 60, flex: 1, justifyContent: "center", alignItems: "center" }}>
                                  <View style={[styles.facilitiesListImage]}>
                                    <Image source={item.image} style={styles.facilityImage} />
                                  </View>
                                  <Text style={[styles.facilitiesListText]}>{item.name}</Text>
                                </View>
                              )
                            })}
                          </View>
                        </View>
                      </View>
                      {/* Contact section */}
                      <View style={[styles.facilitiesSectiong, { borderTopWidth: 0, paddingTop: 0 }]}>
                        <Text style={[styles.facilitiesHeading]}>{localization.contact}</Text>
                        <View style={[styles.flatList]}>
                          <View style={{ paddingBottom: 5, paddingTop: 5, flex: 1, flexDirection: "row", flexWrap: "wrap", alignItems: "center" }}>
                            {mockData.vendorAbout.map((item) => {
                              return (
                                <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                  <View style={[styles.ContactSection]}>
                                    <Image style={{ width: 16, height: 16, position: "relative", bottom: 2 }} source={item.whatsapp} />
                                    <Text style={[styles.contactNumber]}>{item.contactNum}</Text>
                                  </View>
                                  <View style={[styles.ContactSection]}>
                                    <Image style={{ width: 16, height: 16, position: "relative", bottom: 2 }} source={item.instagram} />
                                    <Text style={[styles.contactNumber]}>{item.socialProfile}</Text>
                                  </View>
                                </View>
                              )
                            })}
                          </View>
                        </View>
                      </View>
                      {/* Opening Hours section */}
                      <View style={[styles.facilitiesSectiong, { borderTopWidth: 0, paddingTop: 0 }]}>
                        <Text style={[styles.facilitiesHeading]}>{localization.openingHours}</Text>
                        <View style={[styles.flatList]}>
                          <View style={{ paddingBottom: 5, paddingTop: 5, flex: 1, justifyContent: "space-between", flexWrap: "wrap", alignItems: "center" }}>
                            {item.openingHours.map((item) => {
                              return (
                                <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                  <View style={[styles.openingHoursdays]}>
                                    <Text style={[styles.openingHoursText]}>{item.day}</Text>
                                  </View>
                                  <View style={[styles.openingHoursTime]}>
                                    {item.from == '' ?
                                      (
                                        <Text style={[styles.openingHoursText]}>Closed</Text>
                                      ) : (
                                        <Text style={[styles.openingHoursText]}>{item.from} - {item.to}</Text>
                                      )
                                    }
                                  </View>
                                </View>
                              )
                            })}
                          </View>
                        </View>
                      </View>
                      {/* Bottom section */}
                      <View style={[styles.bookingTermSection]}>
                        <TouchableOpacity
                          style={{ paddingBottom: 5, paddingTop: 5, flex: 1, flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap", alignItems: "center" }}
                          onPress={onPress}

                        >
                          <View style={[styles.bookingHeadingSection]}>
                            <Text style={[styles.bookingHeading]}>{localization.bookingTermsHeading}</Text>
                          </View>
                          <View style={[styles.gotToBooking]}>
                            <AntDesign
                              style={[styles.gotToBookingIocn]}
                              size={10}
                              name='right'
                            />
                          </View>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                )
              })}
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default VendorAbout;
