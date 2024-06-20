import React, { useState, useRef } from 'react';
import { View, ImageBackground, Image, StatusBar, TextInput, Modal, Alert, TouchableHighlight, TouchableOpacity } from 'react-native';
import { Text, Button, SearchInput, Container, BottomNavBar } from '../../../../components';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './styles';
import { localization, screens, images } from '../../../../constants';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
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
import ModalDropdown from 'react-native-modal-dropdown';
import { ceil } from 'lodash';
import CheckBox from '@react-native-community/checkbox';
import { widthPercentage, heightPercentage } from '../../../../utils/scaleUtil';


const Vendors = ({ navigation }: NavigationScreenProps) => {
  const onActivateAccount = () => navigation.navigate(screens.auth.activation);
  const onLogMeIn = () => navigation.navigate(screens.staff.da.attendance);
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const [search, setSearch] = useState('');
  const [searchSection, setSearchSection] = useState(true);

  const [modalVisible, setModalVisible] = useState(false);

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
  const [CheckBabyRoom, setCheckBabyRoom] = useState(false);
  const [CheckdisableAccess, setCheckdisableAccess] = useState(false);
  const [CheckParking, setCheckParking] = useState(false);
  const [CheckToilet, setCheckToilet] = useState(false);


  const selectVendor = () => navigation.navigate(screens.staff.da.vendorDetails);
  const vendorMapView = () => navigation.navigate(screens.staff.da.vendorsMapView);

  let scrollViewRef:any;

  // const _scroll = (options:any) => {
  //   if (scrollViewRef.current) {
  //     scrollViewRef.current.;
  //   }
  // }

  return (
    // <View style={styles.container}>
    <>
      <Container
        title=''
        titleContainerStyle={{ height: 10, backgroundColor: 'transparent' }}
        actionImageSource={images.flash}
        actionButtonOptions={actionButtonOptions[currentTabIndex]}
        BottomBarComponent={BottomNavBar}
        navigation={navigation}
      >
        <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
        <ScrollView keyboardShouldPersistTaps="handled" style={[{ zIndex: 9 }]}>
          
          <View style={[mainStyles.marginTB10, mainStyles.paddingLR20]}>
            <Text style={[mainStyles.font16Semi, { textAlign: 'left', color: '#2E2859' }]}>{localization.vendorHeading}</Text>
          </View>
          <View style={[mainStyles.paddingL22, mainStyles.paddingR22]}>
            <SearchBar
              searchIcon={<FontAwesome5 name="search" style={{ fontSize: 16, color: "#AFACAC" }} />}
              platform="default"
              inputStyle={[mainStyles.font11Regular, {width:'100%', backgroundColor: colors.white, fontSize: 10.5, color: '#afacac', position: "relative", right: 12 }]}
              inputContainerStyle={{ backgroundColor:'transparent', height: 40, margin: 0, marginLeft: 0, marginRight:0, paddingRight:0 }}
              containerStyle={{ backgroundColor: 'transparent', borderWidth: 1, borderRadius: 6, height: 45, alignItems: 'center', borderColor: "#AFACAC", padding: 0, justifyContent:'space-between' }}
              placeholder="Search for a business or service"
              placeholderTextColor={'#AFACAC'}
              onChangeText={updateSearch}
              onClear={updateSearch}
              value={search}
              style={{backgroundColor:'grey'}}
              clearIcon={<TouchableOpacity onPress={updateSearch} style={{width:45, height:45, justifyContent:'center', alignContent:'center', alignItems:'center'}}><Ionicons  name="close-circle-outline" style={{ fontSize: 20, color: "#AFACAC", }} /></TouchableOpacity>}
            />
          </View>
          {searchSection == true ? (
            <View>
              <View style={[mainStyles.paddingL22, mainStyles.paddingR22]}>
                <View style={[styles.LocationSection]}>
                  <FontAwesome style={[styles.locationIcon]}
                    name='send'
                    color="#AFACAC"
                    size={18}
                  />
                  <TextInput style={[styles.locationInput]}
                    underlineColorAndroid="transparent"
                    placeholder="Start typing an address or postcode"
                    placeholderTextColor="#AFACAC"
                    autoCapitalize="none"
                  />
                  <TouchableOpacity style={[styles.locationButton]}>
                    <Text style={[styles.buttonText]}>My Location</Text>
                    <MaterialIcons style={[styles.buttonIcon]}
                      name='my-location'
                      color="#AFACAC"
                      size={20}
                    />
                  </TouchableOpacity>
                </View>
                <View>
                  <ModalDropdown
                    defaultValue={'Health & Beauty'}
                    style={[styles.categorySelect]}
                    textStyle={[styles.catgegorydropdownText]}
                    dropdownTextStyle={[styles.selectDropdownText]}
                    options={['Health & Beauty', 'Make-Up', 'Barber Shop', 'Hair Salon']}
                    dropdownStyle={{ paddingTop: 0, paddingBottom: 0, width: "50%", height: 137, marginTop: -12, marginLeft: -7,zIndex: 0 }}                  />
                
                  <AntDesign style={[styles.caretDown]}
                    name='caretdown'
                    color="#AFACAC"
                    size={16}
                  />
                </View>
              </View>
              <View style={[styles.listView, mainStyles.paddingL22]}> 
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  style={{ width: "100%" }}
                 ref={view=>scrollViewRef=view}
                >
                  {mockData.subCategory.map((sub) => {
                    return (
                      <Text style={
                        sub.active == true
                          ? styles.categoryListActive
                          : styles.categoryList
                      }>{sub.name}</Text>
                    )
                  })}             

                </ScrollView>
                <TouchableOpacity
                // style={{ width: 25, height: 30, alignItems: 'center', justifyContent: 'center', alignContent: 'center' }}
                onPress={() => {                     
                  scrollViewRef.scrollToEnd({animated:true})
                }}
              >
                <Entypo
                  style={[styles.listIcon]}
                  size={20}
                  name='chevron-small-right'
                />
                </TouchableOpacity>
               
              </View>

            </View>

          ) : (
              null
            )}
          <View style={[styles.resultTextView, mainStyles.paddingL22, mainStyles.paddingR22]}>
            <Text style={[styles.resultsTxet]}>450 Results</Text>
          </View>
          {/* Filter section */}
          <View style={{ display: "flex", flexDirection: "row", position: 'relative', zIndex: 11, justifyContent: 'center', alignContent: 'center', alignItems: 'baseline', paddingRight: 20, width: "100%" }}>
            <View style={{ justifyContent: 'flex-start', alignItems: 'baseline' }}>
              {/* <Ionicons style={[styles.arrowIcon]}
              name={searchSection ? 'ios-arrow-up-sharp' : 'ios-arrow-down-sharp'}
              color="#AFACAC"
              size={30}
              onPress={toggleSearchDisplay}
            /> */}
            
              <Text
                style={{ width: 25, height: 30, textAlign: 'center', alignItems: 'center', justifyContent: 'center', alignContent: 'center' }}
                onPress={toggleSearchDisplay}
              >
                <Image
                  style={styles.arrowIcon}
                  source={searchSection ? images.arrowUp : images.arrowDown}
                />
              </Text>
            </View>
            <View style={{ justifyContent: 'flex-end', alignItems: 'baseline' }}>
              {/* <FontAwesome style={[styles.filterIcon]}
              name='sliders'
              color="#AFACAC"
              size={28}
            /> */}
              <TouchableOpacity
                style={{ width: 25, height: 30, alignItems: 'center', justifyContent: 'center', alignContent: 'center' }}
                onPress={() => {
                  setModalVisible(true);
                }}
              >
                <Image
                  style={[styles.arrowIcon]}
                  source={images.filterIcon}

                />
              </TouchableOpacity>


            </View>
            <View style={{ flex: 1, flexDirection: 'row', marginLeft: 10 }}>
              <Text style={[styles.filterTextBold]}>Filter</Text>
              <Text style={[styles.filterText]}> by distance, date, price, facilities etc</Text>

            </View>
            <View
              style={{ display: "flex", flexDirection: "column", position: 'absolute', bottom: 5, right: 20, alignItems: 'center' }}

            >
              <Text style={{ display: 'flex', height: 30 }} onPress={vendorMapView}>
                <Image
                  style={styles.mapViewImage}
                  source={images.mapViewIcon}

                />
              </Text>
              <Text style={[styles.mapViewTxet]} onPress={vendorMapView}>Map View</Text>
            </View>
          </View>
          <View style={[mainStyles.paddingL15, mainStyles.paddingR15]}>
            {mockData.vendorList.map((data) => {
              return (
                <TouchableOpacity style={{
                  marginTop: 10, margin: 10, flex: 1, flexDirection: 'column', borderWidth: 0.5, borderRadius: 6, borderColor: colors.greyLight
                }}
                  onPress={selectVendor}
                >
                  <View style={{ flex: 3, flexDirection: 'row' }}>
                    {/* IMGAE */}
                    <View style={{ flex: 1, }}
                    >
                      <Image
                        style={[styles.profileImage, { borderTopLeftRadius: 6 }]}
                        source={data.profilePic}
                        resizeMode='cover'
                      />

                      <Entypo style={[styles.buttonIcon]}
                        name='heart-outlined'
                        color={colors.white}
                        size={18}
                        style={{ position: 'absolute', top: 5, left: 5 }}
                      />
                    </View>
                    {/* DETAIL */}
                    <View style={{ flex: 2, padding: 8 }}>
                      <Text
                        style={[mainStyles.font12Semi, { color: colors.greyDark, textTransform: 'capitalize' }]}
                      //onPress={selectVendor}
                      >{data.name}</Text>
                      <Text
                        style={[mainStyles.font9Semi, { color: '#55555', lineHeight: 12, textTransform: 'capitalize', marginBottom: 15, marginTop: 2 }]}
                      // onPress={selectVendor}
                      >{data.category} | {data.type}</Text>
                      <Text
                        style={[mainStyles.font9Regular, { color: '#55555', lineHeight: 10 }]}
                      // onPress={selectVendor}
                      >{data.location}</Text>
                      <Text
                        style={[mainStyles.font9Regular, { color: '#55555', lineHeight: 10, marginBottom: 4, marginTop: 4 }]}
                      //onPress={selectVendor}
                      >({data.distance})</Text>
                      <Text
                        style={[mainStyles.font9Semi, { color: colors.yellow, lineHeight: 12, textTransform: 'capitalize', marginBottom: 2, marginTop: 16 }]}
                      // onPress={selectVendor}
                      >Next available: {data.slotAvailableTime} ({data.slotAvailableDate})</Text>
                    </View>
                  </View>
                  {/* rating & price */}
                  <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.yellow, borderBottomLeftRadius: 6 }}>
                      <Image
                        style={styles.ratingIcon}
                        source={images.starRating}
                        resizeMode='stretch'
                      />
                      <Text style={[styles.reviewText]}>{data.totalReview} Reviews</Text>
                    </View>
                    <View style={{ flex: 2, padding: 8, borderTopWidth: 0.5, borderTopColor: colors.greyLight }}>
                      <Text
                        style={[mainStyles.font12Semi, { color: colors.greyDark }]}
                        onPress={selectVendor}
                      >£{data.minPrice} - £{data.maxPrice}</Text>
                    </View>
                  </View>
                </TouchableOpacity >
              )
            })}
          </View>
        </ScrollView>
      </Container>

      {/* MODAL LAYOUT */}
      <Modal
        //animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          // Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", width: "100%", justifyContent: "space-between", marginBottom: 30 }}>
              <View>
                <Text style={[styles.modelListText]}>{localization.sortby}:</Text>
              </View>
              <View>
                <ModalDropdown
                  defaultValue={'Recommended'}
                  style={{ color: colors.yellow, position: "relative", bottom: 3 }}
                  textStyle={[styles.dropdownText]}
                  dropdownTextStyle={[styles.dropdownText]}
                  options={['Recommended', 'Distance', 'Rating', 'Most Popular']}
                  dropdownStyle={{ paddingTop: 0, paddingBottom: 0, width: "30%", height: 143 }}
                />
              </View>
            </View>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", width: "100%", justifyContent: "space-between", marginBottom: 25 }}>
              <View>
                <Text style={[styles.modelListText]}>{localization.filterResult}</Text>
              </View>
              <TouchableOpacity style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <Text style={[styles.clear]}>{localization.clearFilter}</Text>
                <TouchableOpacity>
                  <Image style={{ marginLeft: 5, width: 15, height: 15 }} source={images.clearFilter} />
                </TouchableOpacity>
              </TouchableOpacity>
            </View>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", width: "100%", justifyContent: "space-between", marginBottom: 25 }}>
              <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <Image style={{ marginRight: 11, width: 15, height: 15 }} source={images.nextAppointment} />
                <Text style={[styles.filterListText]}>{localization.nextAppointment}</Text>
              </View>
              <View>
                <ModalDropdown
                  defaultValue={'Anytime'}
                  style={{ color: colors.yellow, position: "relative", bottom: 3 }}
                  textStyle={[styles.dropdownText]}
                  dropdownTextStyle={[styles.dropdownText]}
                  options={['Anytime', 'Any', 'Any type', 'Both']}
                  dropdownStyle={{ paddingTop: 0, paddingBottom: 0, width: "30%", height: 143, borderBottomWidth: 0 }}
                />
              </View>
            </View>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", width: "100%", justifyContent: "space-between", marginBottom: 25 }}>
              <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <Image style={{ marginRight: 12, width: 14, height: 14 }} source={images.serviceType} />
                <Text style={[styles.filterListText]}>{localization.serviceType}</Text>
              </View>
              <View>
                <ModalDropdown
                  defaultValue={'Any'}
                  style={{ color: colors.yellow, position: "relative", bottom: 3 }}
                  textStyle={[styles.dropdownText]}
                  dropdownTextStyle={[styles.dropdownText]}
                  options={['Anytime', 'Any', 'Any type', 'Both']}
                  dropdownStyle={{ paddingTop: 0, paddingBottom: 0, width: "30%", height: 143, borderBottomWidth: 0 }}
                />
              </View>
            </View>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", width: "100%", justifyContent: "space-between", marginBottom: 25 }}>
              <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <Image style={{ marginRight: 11, width: 15, height: 15 }} source={images.booking} />
                <Text style={[styles.filterListText]}>{localization.bookingType}</Text>
              </View>
              <View>
                <ModalDropdown
                  defaultValue={'Any type'}
                  style={{ color: colors.yellow, position: "relative", bottom: 3 }}
                  textStyle={[styles.dropdownText]}
                  dropdownTextStyle={[styles.dropdownText]}
                  options={['Anytime', 'Any', 'Any type', 'Both']}
                  dropdownStyle={{ paddingTop: 0, paddingBottom: 0, width: "30%", height: 143, borderBottomWidth: 0 }}
                />
              </View>
            </View>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", width: "100%", justifyContent: "space-between", marginBottom: 25 }}>
              <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <Image style={{ marginRight: 11, width: 15, height: 15 }} source={images.showservice} />
                <Text style={[styles.filterListText]}>{localization.showServices}</Text>
              </View>
              <View>
                <ModalDropdown
                  defaultValue={'Both'}
                  style={{ color: colors.yellow, position: "relative", bottom: 3 }}
                  textStyle={[styles.dropdownText]}
                  dropdownTextStyle={[styles.dropdownText]}
                  options={['Anytime', 'Any', 'Any type', 'Both']}
                  dropdownStyle={{ paddingTop: 0, paddingBottom: 0, width: "30%", height: 143, borderBottomWidth: 0 }}
                />
              </View>
            </View>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", width: "100%", justifyContent: "space-between", marginBottom: 25 }}>
              <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <Image style={{ marginRight: 16, width: 10, height: 15 }} source={images.babyChangingArea} />
                <Text style={[styles.filterListText]}>{localization.babyChanging}</Text>
              </View>
              <View>
                <CheckBox
                  disabled={false}
                  value={CheckBabyRoom}
                  onValueChange={(newValue) => setCheckBabyRoom(newValue)}
                  tintColors={{ true: "#F49B13", false: "#F49B13" }}
                />
              </View>
            </View>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", width: "100%", justifyContent: "space-between", marginBottom: 25 }}>
              <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <Image style={{ marginRight: 11, width: 15, height: 15 }} source={images.disabled} />
                <Text style={[styles.filterListText]}>{localization.disabled}</Text>
              </View>
              <View>
                <CheckBox
                  disabled={false}
                  value={CheckdisableAccess}
                  onValueChange={(newValue) => setCheckdisableAccess(newValue)}
                  tintColors={{ true: "#F49B13", false: "#F49B13" }}
                />
              </View>
            </View>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", width: "100%", justifyContent: "space-between", marginBottom: 25 }}>
              <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <Image style={{ marginRight: 11, width: 15, height: 9 }} source={images.parking} />
                <Text style={[styles.filterListText]}>{localization.freeParking}</Text>
              </View>
              <View>
                <CheckBox
                  disabled={false}
                  value={CheckParking}
                  onValueChange={(newValue) => setCheckParking(newValue)}
                  tintColors={{ true: "#F49B13", false: "#F49B13" }}
                />
              </View>
            </View>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", width: "100%", justifyContent: "space-between", marginBottom: 25 }}>
              <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <Image style={{ marginRight: 11, width: 15, height: 15 }} source={images.showservice} />
                <Text style={[styles.filterListText]}>{localization.toilets}</Text>
              </View>
              <View>
                <CheckBox
                  disabled={false}
                  value={CheckToilet}
                  onValueChange={(newValue) => setCheckToilet(newValue)}
                  lineWidth={1}
                  tintColor={"#F49B13"}
                  onTintColor={"#F49B13"}
                  onCheckColor={"#F49B13"}
                  tintColors={{ true: "#F49B13", false: "#F49B13" }}
                />
              </View>
            </View>
            <TouchableOpacity
              style={{ ...styles.openButton, backgroundColor: colors.yellow, width: "100%", height: 29, display: "flex", justifyContent: "center", alignItems: "center", borderRadius: 6 }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>{localization.apply}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default Vendors;
