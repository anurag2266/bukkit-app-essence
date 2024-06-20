import React, { useState } from 'react';
import { View, ImageBackground, Image, StatusBar, TextInput, TouchableHighlight, TouchableOpacity } from 'react-native';
import { Text, Button, SearchInput, Container, BottomNavBar } from '../../../../components';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
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

const Settings = ({ navigation }: NavigationScreenProps) => {
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

  const handleClickSetting = (title: any) => {
    console.log(title + ' ==== ');
    if (title == localization.personalDetails)
      navigation.navigate(screens.staff.da.personalDetails)
  };

  return (
    // <View style={styles.container}>
    <Container
      title=''
      titleContainerStyle={{ height: 30, backgroundColor: 'transparent' }}
      actionImageSource={images.flash}
      actionButtonOptions={actionButtonOptions[currentTabIndex]}
      BottomBarComponent={BottomNavBar}
      navigation={navigation}
    >
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <ScrollView style={[{ zIndex: 9 }]}>
        <View style={{ backgroundColor: '#f9f9f9', paddingLeft: 30, marginTop: 10, marginBottom: 20, flex: 1, flexDirection: "row", alignItems: "center" }}>
          <View style={{ flex: 5 }}>
            <Text style={[styles.headerText]}>James Lucas</Text>
            <Text style={[styles.infoText]}>07777 777 777</Text>
          </View>
          <Image
            style={styles.headerImg}
            source={images.userProfilePic}
            resizeMode='cover'
          />
        </View>
        <View style={{ borderBottomWidth: 0.5, borderBottomColor: colors.greyLight, }}>
          <TouchableOpacity style={{
            padding: 10,
            flex: 1,
            flexDirection: 'row',
            borderTopWidth: 0.5,
            borderTopColor: colors.greyLight,
            justifyContent: 'flex-start',
            alignContent: 'center',
            alignItems: 'center',
            height: 42,
          }}
            onPress={() => navigation.navigate(screens.staff.da.personalDetails)}
          >
            {/* <Image
              source={data.image}
              style={styles.iconsStyle}
              resizeMode='contain'
            /> */}
           <Ionicons
              style={styles.iconStyle}
              name='person'
              color="#AFACAC"
              size={19}
            />
            
            <Text style={styles.titleStyle}>Personal Details</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{
            padding: 10,
            flex: 1,
            flexDirection: 'row',
            borderTopWidth: 0.5,
            borderTopColor: colors.greyLight,
            justifyContent: 'flex-start',
            alignContent: 'center',
            alignItems: 'center',
            height: 42,
          }}
            onPress={() => navigation.navigate(screens.staff.da.payments)}
          >
            <Image
              source={images.payments}
              style={styles.iconsStyle}
              resizeMode='contain'
            />
            <Text style={styles.titleStyle}>Payments</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{
            padding: 10,
            flex: 1,
            flexDirection: 'row',
            borderTopWidth: 0.5,
            borderTopColor: colors.greyLight,
            justifyContent: 'flex-start',
            alignContent: 'center',
            alignItems: 'center',
            height: 42,
          }}
            onPress={() => navigation.navigate(screens.staff.da.chat)}
          >
            <Image
              source={images.chat}
              style={styles.iconsStyle}
              resizeMode='contain'
            />
            <View style={{display: "flex", flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.titleStyle}>Chat</Text>
            <Text style={styles.newMessage}>(1 new message)</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={{
            padding: 10,
            flex: 1,
            flexDirection: 'row',
            borderTopWidth: 0.5,
            borderTopColor: colors.greyLight,
            justifyContent: 'flex-start',
            alignContent: 'center',
            alignItems: 'center',
            height: 42,
          }}
            onPress={() => navigation.navigate(screens.staff.da.myReviews)}
          >
            {/* <Image
              source={data.image}
              style={styles.iconsStyle}
              resizeMode='contain'
            /> */}
            <FeatherIcon
              style={styles.iconStyle}
              name='thumbs-up'
              color="#AFACAC"
              size={19}
            />
            <Text style={styles.titleStyle}>Reviews</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{
            padding: 10,
            flex: 1,
            flexDirection: 'row',
            borderTopWidth: 0.5,
            borderTopColor: colors.greyLight,
            justifyContent: 'flex-start',
            alignContent: 'center',
            alignItems: 'center',
            height: 42,
          }}
            onPress={() => navigation.navigate(screens.staff.da.appSettings)}
          >
            <FeatherIcon
              style={styles.iconStyle}
              name='settings'
              color="#AFACAC"
              size={19}
            />
            <Text style={styles.titleStyle}>App Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{
            padding: 10,
            flex: 1,
            flexDirection: 'row',
            borderTopWidth: 0.5,
            borderTopColor: colors.greyLight,
            justifyContent: 'flex-start',
            alignContent: 'center',
            alignItems: 'center',
            height: 42,
          }}
            onPress={() => navigation.navigate(screens.staff.da.legal)}
          >
            <Image
              source={images.legal}
              style={styles.iconsStyle}
              resizeMode='contain'
            />
            <Text style={styles.titleStyle}>Legal</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={{
            padding: 10,
            flex: 1,
            flexDirection: 'row',
            borderTopWidth: 0.5,
            borderTopColor: colors.greyLight,
            justifyContent: 'flex-start',
            alignContent: 'center',
            alignItems: 'center',
            height: 42,
          }}
           // onPress={() => navigation.navigate(screens.staff.da.legal)}
          >
            <Image
              source={images.help}
              style={styles.iconsStyle}
              resizeMode='contain'
            />
            <Text style={styles.titleStyle}>Help & Support</Text>
          </TouchableOpacity>
          

          <TouchableOpacity style={{
            padding: 10,
            flex: 1,
            flexDirection: 'row',
            borderTopWidth: 0.5,
            borderTopColor: colors.greyLight,
            justifyContent: 'flex-start',
            alignContent: 'center',
            alignItems: 'center',
            height: 42,
          }}
            //onPress={() => navigation.navigate(screens.staff.da.legal)}
          >
             <MaterialCommunityIcons
              style={styles.iconStyle}
              name='information'
              color="#AFACAC"
              size={22}
            />            
            <Text style={styles.titleStyle}>About BUUKIT</Text>
          </TouchableOpacity>



          <TouchableOpacity style={{
            padding: 10,
            flex: 1,
            flexDirection: 'row',
            borderTopWidth: 0.5,
            borderTopColor: colors.greyLight,
            justifyContent: 'flex-start',
            alignContent: 'center',
            alignItems: 'center',
            height: 42,
          }}
           // onPress={() => navigation.navigate(screens.staff.da.personalDetails)}
          >
           {/* <Ionicons
              style={[styles.iconStyle, {fontWeight: "bold"}]}
              name='swap-horizontal'
              color="#AFACAC"
              size={22}
            /> */}
            <Image
              source={images.switch}
              style={styles.iconsStyle}
              resizeMode='contain'
            />
            <View style={{display: "flex", flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.titleStyle}>Switch to</Text>
              <Text style={[styles.businessProfile]}>BUUKIT Business Profile</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{
            padding: 10,
            flex: 1,
            flexDirection: 'row',
            borderTopWidth: 0.5,
            borderTopColor: colors.greyLight,
            justifyContent: 'flex-start',
            alignContent: 'center',
            alignItems: 'center',
            height: 42,
          }}
           // onPress={() => navigation.navigate(screens.staff.da.personalDetails)}
          >
           <SimpleLineIcons
              style={[styles.iconStyle, {fontWeight: "bold"}]}
              name='logout'
              color="#AFACAC"
              size={22}
            />
              <Text style={styles.titleStyle}>Log Out</Text>
          </TouchableOpacity>
          

        </View>
      </ScrollView>
    </Container>
  );
};

export default Settings;
