import React, { useState } from 'react';
import { View, ImageBackground, Image, StatusBar, TextInput, TouchableHighlight, TouchableOpacity } from 'react-native';
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
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Rating } from 'react-native-ratings';


const PaymentConirmation = ({ navigation }: NavigationScreenProps) => {
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

  const myAppointment = () => {
    console.log('NAVIGATE TO MY APPOINTMENT');
  navigation.navigate(screens.staff.da.myAppointment)
  };

  return (
    // <View style={styles.container}>
    // <Container
    //   title=''
    //   titleContainerStyle={{ height: 10, backgroundColor: 'transparent' }}
    //   actionImageSource={images.flash}
    //   actionButtonOptions={actionButtonOptions[currentTabIndex]}
    //   BottomBarComponent={BottomNavBar}
    // >
    <View>
      <StatusBar translucent backgroundColor={colors.pinkOpacity} barStyle="dark-content" />
      {/* <ScrollView style={[{ zIndex: 9 }]}></ScrollView> */}
      <View style={[styles.confimartionContainer]}>
        <View style={[styles.iconContainer]}>
          <Image
            source={images.confirm}
            style={styles.confirmIcon}
            resizeMode="contain"
          />
        </View>
        <View
          style={[styles.userInfoContainer]}
        >
          <Text style={styles.userName}>James</Text>
          <Text style={styles.confirmation}>, your appointment is confimed!</Text>
        </View>
        <View style={[styles.timeContainer, styles.centerText]}>
          <Text style={styles.appointmentTime}>11:00 | Xtreme Barbers</Text>
        </View>
        <View style={[styles.centerText, styles.dateContainer]}>
          <Text style={[styles.appointmentDate]}>SATURDAY, MAY 6, 2020</Text>
          <Text style={styles.appointmentAddress}>12 CONDELL STREET, WEMBLEY, HA6 2LA</Text>
        </View>
        <View style={[styles.centerText, styles.calendarAction]}>
          {/* <FontAwesomeIcon
            style={{ paddingRight:5}}
            name="calendar-check-o"
            size={20}
            color={colors.greyLight}
            /> */}
            <Image source={images.addCalendar} style={{height: 27, width: 27, marginTop: 6, marginRight: 8}} />
          <Text style={styles.addToCalendar}>Add to Calendar</Text>
        </View>
        <View style={[styles.centerText]}>
          <TouchableOpacity 
          style={[styles.actionBtnContainer, styles.centerText]}
          onPress={myAppointment}>
            <Text style={styles.actionButton}>My Appointments</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PaymentConirmation;
