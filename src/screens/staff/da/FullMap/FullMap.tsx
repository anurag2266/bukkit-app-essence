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
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



const FullMap = ({ navigation }: NavigationScreenProps) => {
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
      style={{ backgroundColor: colors.blackOpacity }}
      contentContainerStyle={{ height: 100, }}
      title=''
      titleContainerStyle={{ backgroundColor: 'transparent' }}
      headerLeft={{
        icon: 'back',
        onPress: () => navigation.goBack()
        //onPress: onBack
      }}
      navigation={navigation}

    >
      <View>

        <StatusBar translucent backgroundColor={colors.blackOpacity} barStyle='light-content' />
        <View style={[styles.container, { flex: 1, flexDirection: 'row', borderBottomColor: '#c4c4c4', borderBottomWidth: 0.5, paddingLeft: 30, justifyContent: 'space-between', alignContent: 'space-between', alignItems: 'center', paddingTop: 10 }]}>
          <View style={{ flex: 6, justifyContent: "flex-start", marginLeft: 15, }}>
            <Text style={{
              opacity: 1,
              fontFamily: 'proximaNova-Bold',
              fontStyle: 'normal',
              fontWeight: '600',
              fontSize: 15,
              lineHeight: 18,
              display: 'flex',
              alignItems: 'center',
              letterSpacing: 0.04,
              textTransform: 'capitalize',
              color: colors.white
            }}>Extreme Barbers</Text>
            <View style={{ flexDirection: 'row' }}>
              <View>
                <Text style={[styles.infoText, { textAlign: 'left' }]}>12 Condell Street, Wembley,</Text>
                <Text style={[styles.infoText, { textAlign: 'left' }]}>HA6 2LA,London,</Text>
              </View>
              {/* <Image
                style={styles.headerImg}
                source={images.detailHeaderImg}
                resizeMode='cover'
              /> */}
              <MaterialCommunityIcons
                style={styles.headerImg}
                size={30}
                color={colors.greyDark}
                name='directions'
              />          </View>
          </View>
          <View style={{ flex: 1, justifyContent: "flex-end", position: "relative", bottom: 0 }}>
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
          marginTop: 8
        }}>
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
              image={images.mapPinMD}
              title="Buckingham palace"
              style={{width: 20, height: 30}}
            //description={"description"}
            />
          </MapView>
        </View>
      </View>
    </Container>
  );
};

export default FullMap;
