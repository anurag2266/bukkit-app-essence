import React, { useState } from 'react';
import { View, ImageBackground, Image, StatusBar, TextInput, TouchableHighlight } from 'react-native';
import { Text, Button, SearchInput, Container, BottomNavBar } from '../../../../components';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import { localization, screens, images } from '../../../../constants';
import { TextVariant } from '../../../../components/Text';
import { NavigationScreenProps } from 'react-navigation';
import colors from '../../../../styles/colors';
import { ScrollView } from 'react-native-gesture-handler';
import mainStyles from '../../../../styles/mainStyle';

const BookingTerms = ({ navigation }: NavigationScreenProps) => {
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
      titleContainerStyle={{ height: 50, backgroundColor: 'transparent', alignItems:'center', marginTop:20, zIndex: 10 }}
      title={localization.bookingTermsHeading}
      headerLeft={{
        icon: 'back',
        onPress: () => navigation.goBack()
      }}
      navigation={navigation}
    >
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <ScrollView style={[{ zIndex: 9, borderTopWidth:0.5, paddingTop:20 }]}>
        <View style={[mainStyles.paddingLR20]}>
          <View style={[styles.bookingList]}>
            <Text style={[styles.bookingListMainText]}>{localization.paymentTerms}</Text>
            <Text style={[styles.bookingListText]}>{localization.paymentTermsText}</Text>
          </View>
          <View style={[styles.bookingList]}>
            <Text style={[styles.bookingListMainText]}>{localization.cancelationAmendmends}</Text>
            <Text style={[styles.bookingListText]}>{localization.cancelationAmendmendsText}</Text>
          </View>
          <View style={[styles.bookingList]}>
            <Text style={[styles.bookingListMainText]}>{localization.otherTerms}</Text>
            <Text style={[styles.bookingListText]}>{localization.otherTermsText}</Text>
          </View>
        </View>
      </ScrollView>
      {/* <View style={styles.buttonContainer}>
        <Button
          title={localization.getStart}
          style={styles.logMeInButton}
          titleStyle={{ color: colors.white, fontSize: 14 }}
          type="yellow"
          onPress={onLogMeIn}
        />
      </View> */}
    </Container>
  );
};

export default BookingTerms;
