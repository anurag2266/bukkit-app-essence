import React, { useState } from 'react';
import { View, ImageBackground, Image, StatusBar, TextInput, TouchableHighlight } from 'react-native';
import { Text, Button, SearchInput, Container, BottomNavBar } from '../../../../components';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import Entypo from 'react-native-vector-icons/Entypo';
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
import { Marker } from 'react-native-maps';
import MapView from 'react-native-maps';


const VendorsMapView = ({ navigation }: NavigationScreenProps) => {
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
  const CustomMarker = () => (
    <Image source={images.mapPin} style={{width: 20, height: 32}} resizeMode='contain' />
);

  const selectVendor = () => navigation.navigate(screens.staff.da.vendorDetails);

  return (
    // <View style={styles.container}>
    <Container
    style={{ backgroundColor: 'transparent' }}
    contentContainerStyle={{ height: 50, }}
    title=''
    titleContainerStyle={{ backgroundColor: 'transparent', position: 'absolute', top: 20, left: 0, right: 0, width: '100%', zIndex: 10 }}
    headerLeft={{
      iconStyle:{ backgroundColor: '#F49B13', height: 36, width: 36, borderRadius: 36,padding: 10},
      icon: 'back',
      iconColor: '#ffffff',
      onPress: () => navigation.goBack()
      //onPress: onBack
    }}
    navigation={navigation}

  >
      <StatusBar translucent backgroundColor="rgba(0,0,0,0.5)" barStyle='light-content' />
      <View>
        <View style={[styles.mapContainer]}>
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
        </View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.vendorListScroll}
        >
          {mockData.vendorList.map((data) => {
            return (
              <View style={styles.vendorCard}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                  {/* IMGAE */}
                  <View style={{ flex: 1, width: 120 }}
                  >
                    <View style={{flex:3}}>
                      <Image
                        style={[styles.profileImage, { borderTopLeftRadius: 6 }]}
                        source={data.profilePic}
                        resizeMode='cover'
                      />

                      <EntypoIcon style={[styles.buttonIcon]}
                        name='heart-outlined'
                        color={colors.white}
                        size={18}
                        style={{ position: 'absolute', top: 5, left: 5 }}
                      />
                    </View>
                    <View style={{  height:35,justifyContent: 'center', alignItems: 'center', backgroundColor: colors.yellow, borderBottomLeftRadius: 6 }}>
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
                    <View style={{flex:3,paddingTop:4, paddingBottom:4, paddingLeft:10, paddingRight:10}}>
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
                      style={[mainStyles.font9Regular, { color: '#55555', lineHeight: 10,  }]}
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
                    <Text
                      style={[mainStyles.font9Semi, { color: colors.yellow, lineHeight: 12, textTransform: 'capitalize', marginBottom: 2, marginTop: 16 }]}
                      onPress={selectVendor}
                    >Next available: {data.slotAvailableTime} ({data.slotAvailableDate})</Text>
                  </View>

                  <View style={{ height:35,justifyContent: 'center', alignItems: 'flex-start', paddingLeft:10, borderTopWidth: 0.5, borderTopColor: colors.greyLight }}>
                    <Text
                      style={[mainStyles.font12Semi, { color: colors.greyDark }]}
                      onPress={selectVendor}
                    >£{data.minPrice} - £{data.maxPrice}</Text>
                  </View>


                  </View>
                </View>
              </View>

            )
          })}
        </ScrollView>
      </View>
    </Container>
  );
};

export default VendorsMapView;
