import React, { useState } from 'react';
import { View, ImageBackground, Image, StatusBar, TextInput, TouchableHighlight, TouchableOpacity } from 'react-native';
import { Text, Button, SearchInput, Container, BottomNavBar } from '../../../../components';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import { localization, screens, images } from '../../../../constants';
import { TextVariant } from '../../../../components/Text';
import { NavigationScreenProps } from 'react-navigation';
import colors from '../../../../styles/colors';
import { ScrollView } from 'react-native-gesture-handler';
import mainStyles from '../../../../styles/mainStyle';
import { mockData } from '../../../../constants';


const MyReviewsDetails = ({ navigation }: NavigationScreenProps) => {
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
      contentContainerStyle={styles.container}
      titleContainerStyle={{ height: 50, backgroundColor: 'transparent', alignItems: 'center', marginTop: 20, zIndex: 10 }}
      title={localization.reviewsHeading}
      headerLeft={{
        icon: 'back',
        onPress: () => navigation.goBack()
      }}
      navigation={navigation}

    >
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <ScrollView style={[{ zIndex: 9, width: "100%", height: "100%" }]}>
        <View style={[{ backgroundColor: "#E2E2E2" }]}>
          {mockData.ReviewsDetails.map((item, index) => {
            return (
              <View style={[mainStyles.paddingLR20, { width: "100%", marginBottom: 6, paddingTop: 8, paddingBottom: 8, backgroundColor: "#ffffff" }]}>
                <TouchableOpacity style={[{ paddingLeft: 13, paddingBottom:18 }]}>
                  <View style={[{ display: "flex", flexDirection: "row" }]}>
                    <View style={[{ flex: 6 }]}>
                      <Text style={[styles.reviewTitle]}>{item.title}</Text>
                      <Text style={[styles.reviewAddress]}>{item.address}</Text>
                      {/* <Text style={[styles.reviewedFor]}>{item.reviewFor}</Text> */}
                      <Text style={[styles.reviewAddress]}>{item.reviewDate}</Text>
                    </View>
                    <View style={[{ flex: 1 }]}>
                      <Image style={[{ width: 50, height: 50 }]} source={item.shopImage} />
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            )
          })}
        </View>
        <View style={[mainStyles.paddingLR20, { marginTop: 13 }]}>
          <View style={[{ display: "flex", justifyContent: "flex-start", paddingRight: 13, paddingLeft: 13 }]}>
            <View>
              <View style={[styles.reviewPosted]}>
                <Text style={[styles.reviewPostedText]}>{localization.reviewPosted}</Text>
              </View>
            </View>
            <View style={{ marginTop: 4 }}>
              <Image 
              style={{
                //marginBottom: 3,
                width: 72,
                height: 12,
              }}
              source={images.reviewsRating}
               />
            </View>
          </View>
          <View style={[styles.reviewerContainer]}>
            <Text style={[styles.customerReviewText]}>{localization.reviewText} </Text>
          </View>
          <View style={{display: "flex", flexDirection: "row"}}>
            <Image
              style={[styles.reviewCollpasImages]}
              source={images.slider1}
              resizeMode='stretch'
            />
            <Image
              style={[styles.reviewCollpasImages]}
              source={images.slider1}
              resizeMode='stretch'
            />
            <Image
              style={[styles.reviewCollpasImages]}
              source={images.slider1}
              resizeMode='stretch'
            />
            <Image
              style={[styles.reviewCollpasImages]}
              source={images.slider1}
              resizeMode='stretch'
            />
          </View>
          <View style={[styles.reviewCollpasTextContainer]}>
            <View>
              <Text style={[styles.reviewCollpasText, { fontFamily: 'proximaNova-Bold' }]}>{localization.reviewRply}</Text>
              <Text style={[styles.reviewCollpasText]}>{localization.reviewReplyDate}</Text>
            </View>
            <View style={[styles.ReviewTextSection]}>
              <Text style={[styles.ReviewText]}>{localization.reviewReplyText}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </Container>
  );
};

export default MyReviewsDetails;
