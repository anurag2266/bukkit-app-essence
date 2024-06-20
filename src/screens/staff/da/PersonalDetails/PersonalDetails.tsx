import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Button, Text, TextInput, Container, } from '../../../../components';
import { StatusBar, Image } from "react-native";
import mainStyles from '../../../../styles/mainStyle';
import styles from './styles';
import { localization, screens, images } from '../../../../constants';
import { TextVariant } from '../../../../components/Text';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native-gesture-handler';
import { NavigationScreenProps } from 'react-navigation';
import DocumentPicker from 'react-native-document-picker';


type PersonalDetailsProps = {
  onConfirmEmail?: (email: string) => void;
};


const PersonalDetails = ({ navigation }: NavigationScreenProps) => {
  const onActivateAccount = () => navigation.navigate(screens.auth.activation);
  const onLogMeIn = () => navigation.navigate(screens.staff.da.attendance);
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const [search, setSearch] = useState('');
  const [searchSection, setSearchSection] = useState(true);
  

  let selectFile = async () => {
    //Opening Document Picker to select one file
    try {
      const results = await DocumentPicker.pickMultiple({
        type: [DocumentPicker.types.images],
      });
      let _item = [];
      for (const res of results) {
        _item.push(res);
        setuploaded(_item);
        console.log('TEST121 == ');
        console.log(
          res.uri,
          res.type, // mime type
          res.name,
          res.size
        );
      }
    } catch (err) {
      setSingleFile(null);
      //Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        //If user canceled the document selection
        console.log('Canceled from single doc picker');
      } else {
        //For Unknown Error
        console.log('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

  return (
    // <View style={styles.container}>
    // <Container
    //   contentContainerStyle={styles.container}
    //   titleContainerStyle={{ height: 50, backgroundColor: 'transparent', alignItems: 'center', marginTop: 20, zIndex: 10 }}
    //   title={localization.bookingTermsHeading}
    //   headerLeft={{
    //     icon: 'back',
    //     onPress: () => navigation.goBack()
    //   }}
    //   navigation={navigation}

    // >

    <Container
    contentContainerStyle={{ height: 50, }}
    title={localization.personalDetails}
    titleContainerStyle={{ backgroundColor: 'white', justifyContent:'center', alignItems:'flex-start', marginTop: 20}}
    headerLeft={{
      icon: 'back',
      onPress: () => navigation.goBack()
    }}
    navigation={navigation}
  >
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <ScrollView style={[{ zIndex: 9, width: "100%" }]}>
        <View style={[mainStyles.paddingLR20, { position: "relative" }]}>
          <View style={[mainStyles.marginTB20, { paddingLeft: 3, paddingRight: 3 }]}>
            <TouchableOpacity
              style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: 23 }}
              onPress={selectFile}
            >
              <Image style={{ height: 84, width: 84, borderRadius: 84 }} source={images.personalDetails} />
              <Text style={[styles.uploadImages]}>{localization.uploadPicture}</Text>
            </TouchableOpacity>
            <View style={[styles.loginSection]}>
              <View style={[styles.logOptionsIcons]}>
                {/* <Image source={images.user}/> */}
                <FeatherIcon
                  name='user'
                  color="#AFACAC"
                  size={18}
                />
              </View>
              <TextInput
                style={[styles.emailInput]}
                containerStyle={styles.imputContainer}
                label={localization.firstName}
                underlineColorAndroid="transparent"
                placeholderTextColor="#AFACAC"
                autoCapitalize="none"
              />
              {/* <View style={[styles.cancel]}>
              <Image source={images.cancel} />
            </View> */}
            </View>
            <View style={[styles.loginSection]}>
              <View style={[styles.logOptionsIcons]}>
                {/* <Image source={images.user}/> */}
                <FeatherIcon
                  name='user'
                  color="#AFACAC"
                  size={18}
                />

              </View>
              <TextInput
                style={[styles.emailInput]}
                containerStyle={styles.imputContainer}
                label={localization.lastName}
                underlineColorAndroid="transparent"
                placeholderTextColor="#AFACAC"
                autoCapitalize="none"
              />
              {/* <View style={[styles.cancel]}>
              <Image source={images.cancel} />
            </View> */}
            </View>
            <View style={[styles.loginSection]}>
              <View style={[styles.logOptionsIcons]}>
                <MaterialCommunityIcons
                  name='email-outline'
                  color="#AFACAC"
                  size={18}
                />
              </View>
              <TextInput
                style={[styles.emailInput]}
                containerStyle={styles.imputContainer}
                label={localization.email}
                underlineColorAndroid="transparent"
                placeholderTextColor="#AFACAC"
                autoCapitalize="none"
              />
              {/* <View style={[styles.cancel]}>
              <Image source={images.cancel} />
            </View> */}
            </View>
            <View style={[styles.loginSection]}>
              <View style={[styles.logOptionsIcons]}>
                <SimpleLineIcons
                  name='phone'
                  color="#AFACAC"
                  size={16}
                />
              </View>
              <TextInput
                style={[styles.emailInput]}
                containerStyle={styles.imputContainer}
                label={localization.mobileNum}
                underlineColorAndroid="transparent"
                placeholderTextColor="#AFACAC"
                autoCapitalize="none"
              />
              {/* <View style={[styles.cancel]}>
              <Image source={images.cancel} />
            </View> */}
            </View>
            <View style={[styles.loginSection]}>
              <View style={[styles.logOptionsIcons]}>
                <MaterialIcons
                  name='perm-contact-calendar'
                  color="#AFACAC"
                  size={18}
                />
              </View>
              <TextInput
                style={[styles.emailInput]}
                containerStyle={styles.imputContainer}
                label={localization.dobLabel}
                underlineColorAndroid="transparent"
                placeholderTextColor="#AFACAC"
                autoCapitalize="none"
              />
              {/* <View style={[styles.cancel]}>
              <Image source={images.cancel} />
            </View> */}
            </View>
            <View style={[styles.loginSection]}>
              <View style={[styles.logOptionsIcons]}>
                {/* <Image source={images.homeimg} /> */}
                <SimpleLineIcons
                  name='home'
                  color="#AFACAC"
                  size={16}
                />
              </View>
              <TextInput
                style={[styles.emailInput]}
                containerStyle={styles.imputContainer}
                label={localization.address}
                underlineColorAndroid="transparent"
                placeholderTextColor="#AFACAC"
                autoCapitalize="none"
              />
              {/* <View style={[styles.cancel]}>
              <Image source={images.cancel} />
            </View> */}
            </View>
            <View style={[styles.loginSection]}>
              <View style={[styles.logOptionsIcons]}>
                {/* <Image source={images.password} /> */}
                <Ionicons
                  name='key-outline'
                  color="#AFACAC"
                  size={16}
                />

              </View>
              <TextInput
                style={[styles.emailInput]}
                containerStyle={styles.imputContainer}
                label={localization.changePass}
                underlineColorAndroid="transparent"
                placeholderTextColor="#AFACAC"
                autoCapitalize="none"
              />
              {/* <View style={[styles.cancel]}>
              <Image source={images.cancel} />
            </View> */}
            </View>
          </View>
        </View>
        <TouchableOpacity style={[styles.continue]}>
          <Text style={[styles.continueText]}>{localization.saveChanges}</Text>
        </TouchableOpacity>
      </ScrollView>
    </Container>
  );
};

export default PersonalDetails;
