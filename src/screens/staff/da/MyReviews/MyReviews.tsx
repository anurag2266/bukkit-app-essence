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


const MyReviews = ({ navigation }: NavigationScreenProps) => {
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
      contentContainerStyle={[styles.container]}
      style={{marginBottom:0, paddingBottom:0}}
      titleContainerStyle={{ height: 50, backgroundColor: 'transparent', alignItems: 'center', marginTop: 20, zIndex: 1 }}
      title={localization.reviewsHeading}
      headerLeft={{
        icon: 'back',
        onPress: () => navigation.goBack()
      }}
      navigation={navigation}

    >
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <ScrollView style={[{ zIndex: 9, width: "100%", height: "100%",backgroundColor:'#e2e2e2' }]}>
        <View style={[{ backgroundColor: "#e2e2e2", height: "100%" }]}>
          {mockData.Reviews.map((item, index) => {
            return (
              <View style={[mainStyles.paddingLR20,{ width: "100%", marginBottom: 6, paddingTop: 8, paddingBottom: 8, backgroundColor: "#ffffff" }]}>
                <TouchableOpacity 
                style={[ {paddingLeft: 13}]}
                onPress={()=> navigation.navigate(screens.staff.da.myReviewsDetails)}
                >
                  <View style={[{ display: "flex", flexDirection: "row" }]}>
                    <View style={[{flex: 6}]}>
                      <View style={[styles.reviewPosted]}>
                      <Text style={[styles.reviewPostedText]}>{item.buttonTitle}</Text>
                      </View>
                    </View>
                    <View style={[{flex: 1, position: "relative", left: 40, }]}>
                      <MaterialIcons
                        size={16}
                        color="#000000"
                        name='more-vert'
                      />
                    </View>
                  </View>
                  <View style={[{ display: "flex", flexDirection: "row" }]}>
                    <View style={[{flex: 6}]}>
                      <Text style={[styles.reviewTitle]}>{item.title}</Text>
                      <Text style={[styles.reviewAddress]}>{item.address}</Text>
                      <Text style={[styles.reviewedFor]}>{item.reviewFor}</Text>
                      <Text style={[styles.reviewAddress]}>{item.reviewDate}</Text>
                      <Image
                       style={{
                        marginTop: 4,
                        marginBottom: 4,
                        width: 68,
                        height: 10,
                      }}
                       source={item.ratingStar} 
                       />
                    </View>
                    <View style={[{flex: 1}]}>
                      <Image style={[{ width: 50, height: 50, marginTop: 5 }]} source={item.shopImage} />
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            )
          })}
        </View>
      </ScrollView>
    </Container>
  );;
};

export default MyReviews;
