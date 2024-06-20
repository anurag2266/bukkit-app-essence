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

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import MapView, { Marker } from 'react-native-maps';


const VendorAboutFullMap = ({ navigation }: NavigationScreenProps) => {
  const onActivateAccount = () => navigation.navigate(screens.auth.activation);
  const onLogMeIn = () => navigation.navigate(screens.staff.da.attendance);
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const [search, setSearch] = useState('');
  const [searchSection, setSearchSection] = useState(true);
  var markers = [
    {
      latitude: 45.65,
      longitude: -78.90,
      title: 'Foo Place',
      subtitle: '1234 Foo Drive'
    }
  ];
  const CustomMarker = () => (
    <Image source={images.mapPin} style={{width: 20, height: 32}} resizeMode='contain' />
);

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
      style={{ marginBottom: 0, paddingBottom: 0, backgroundColor: colors.blackOpacity }}
      contentContainerStyle={{ height: 50, zIndex: 100 }}
      title=''
      titleContainerStyle={{ height: 50, backgroundColor: 'transparent', alignItems: 'center', marginTop: 20 }}

      headerLeft={{
        icon: 'back',
        iconColor: 'white',
        iconStyle: {position: "relative", bottom: 5, height: 13, width: 16, right: 2},
        onPress: () => navigation.goBack()
        //onPress: onBack
      }}
      navigation={navigation}

    >
      <View>

        <StatusBar translucent backgroundColor={colors.white} barStyle='dark-content' />
        <View style={[styles.container, { flex: 1, marginBottom: 5, flexDirection: 'row', paddingLeft: 30, justifyContent: 'space-between', alignContent: 'space-between', alignItems: 'center', paddingTop: 10 }]}>
          <View style={{ flex: 6, justifyContent: "flex-start", marginLeft: 15, }}>
            <Text style={{
              // opacity: 1,
              // fontFamily: 'proximaNova-Bold',
              // fontStyle: 'normal',
              // fontWeight: '600',
              // fontSize: 15,
              // lineHeight: 18,
              // display: 'flex',
              // alignItems: 'center',
              // letterSpacing: 0.04,
              // textTransform: 'capitalize',
              opacity: 1,
              fontFamily: 'proximaNova-Bold',
              fontStyle: 'normal',
              fontWeight: '600',
              fontSize: 14,
              lineHeight: 17,
              display: 'flex',
              alignItems: 'center',
              letterSpacing: 0.04,
              textTransform: 'capitalize',
              color: colors.white,
              marginTop: 5
            }}>Extreme Barbers</Text>
            <View style={{ flexDirection: 'row' }}>
              <View>
                <Text style={[styles.infoText, { textAlign: 'left' }]}>12 Condell Street, Wembley,</Text>
                <Text style={[styles.infoText, { textAlign: 'left' }]}>HA6 2LA, London</Text>
              </View>
              {/* <Image
              style={styles.headerImg}
              source={images.detailHeaderImg}
              resizeMode='cover'
            /> */}

              <MaterialCommunityIcons
                style={styles.headerImg}
                size={30}
                color="#fff"
                name='directions'
              />

            </View>
          </View>
          {/* <View style={{ flex: 1, justifyContent: "flex-end", position: "relative", bottom: 5 }}>
            <Image
              style={styles.headerAboutImage}
              source={images.vendorProfilePic1}
              resizeMode='cover'
            />
          </View> */}
          <View style={{ flex: 1, justifyContent: "flex-end", position: "relative", top: 3 }}>
            <Image
              style={styles.headerAboutImage}
              source={images.vendorProfilePic1}
              resizeMode='cover'
            />
          </View>
        </View>

        <View style={{
          width: "100%",
          height: '100%',
          marginTop: 8,
          paddingBottom: 13
        }}>
          <MapView
            style={{ height: '100%', width: "100%" }}
            //zoomControlEnabled
            zoomEnabled
            maxZoomLevel={100}
            minZoomLevel={2}
            zoomTapEnabled={true}
            //showsScale={true}
           // showsCompass={true}
            // showsMyLocationButton={true}
            // userLocationAnnotationTitle={'Map'}
            // loadingEnabled
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
      </View>
    </Container>
  );
};

export default VendorAboutFullMap;
