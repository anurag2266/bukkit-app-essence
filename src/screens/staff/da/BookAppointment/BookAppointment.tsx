import React, { useState } from 'react';
import { View, ImageBackground, Image, StatusBar, TextInput, TouchableHighlight, TouchableOpacity } from 'react-native';
import { Text, Button, SearchInput, Container, BottomNavBar } from '../../../../components';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
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
import moment from 'moment';

import { Calendar, Agenda } from "react-native-calendars";
import { widthPercentage } from 'utils/scaleUtil';
import { getDate } from 'date-fns';

const BookAppointment = ({ navigation }: NavigationScreenProps) => {
  const onContinue = () => navigation.navigate(screens.auth.loginOptions);
  const onLogMeIn = () => navigation.navigate(screens.staff.da.attendance);
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const [items, setitems] = useState({})
  const [cartItemCount, setcartItemCount] = useState(0);
  // const future = new Date();
  const future = moment().format('yy-mm-dd');

  // const loadItems=(day)=> {
  //   setTimeout(() => {
  //     for (let i = -15; i < 85; i++) {
  //       const time = day.timestamp + i * 24 * 60 * 60 * 1000;
  //       const strTime = this.timeToString(time);
  //       if (!items[strTime]) {
  //         items[strTime] = [];
  //         const numItems = Math.floor(Math.random() * 3 + 1);
  //         for (let j = 0; j < numItems; j++) {
  //           items[strTime].push({
  //             name: 'Item for ' + strTime + ' #' + j,
  //             height: Math.max(50, Math.floor(Math.random() * 150))
  //           });
  //         }
  //       }
  //     }
  //     const newItems = {};
  //     Object.keys(items).forEach(key => {newItems[key] = items[key];});
  //     this.setState({
  //       items: newItems
  //     });
  //   }, 1000);
  // }

  // renderItem(item) {
  //   

  // }

  // renderEmptyDate() {
  //   return (
  //     <View style={styles.emptyDate}>
  //       <Text>This is empty date!</Text>
  //     </View>
  //   );
  // }

  // rowHasChanged(r1, r2) {
  //   return r1.name !== r2.name;
  // }

  // timeToString(time) {
  //   const date = new Date(time);
  //   return date.toISOString().split('T')[0];
  // }

  const bookSlot = (id: any, activeStatus: boolean) => {
    let data = cartItemCount;
    if (activeStatus == false) {
      setcartItemCount(cartItemCount + 1);
    }
    else {
      if (cartItemCount > 0) {
        setcartItemCount(cartItemCount - 1);

      }
    }
  }
  const timeToString = (time: any) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }
  const diff_hours = (dt2: any, dt1: any) => {
    var diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= (60 * 60);
    return Math.abs(Math.round(diff));

  }



  const loadItems = (day: any) => {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        // let mytime = Math.abs(day.timestamp - day.timestamp) / 1000;
        // mytime /= (60 * 60);

        let dt1 = new Date();

        // diff_hours(dt1.getDate(), dt1.getDate()+1)



        const strTime = timeToString(time);
        if (!items[strTime]) {
          items[strTime] = [];
          // const numItems = Math.floor(Math.random() * 3 + 1);
          const numItems = 10;
          // for (let j = 0; j < numItems; j++) {
          //   items[strTime].push({
          //     id: 1,
          //     active: false,
          //     name: 'Item for ' + strTime + ' #' + j,
          //     time:  diff_hours(dt1.getDate(), dt1.getDate()+1)
          //     ,
          //     rate: '£15',
          //     height: Math.max(50, Math.floor(Math.random() * 150))
          //   });
          // }


          mockData.slots.map((data) => {
            items[strTime].push({
              id: data.id,
              active: data.active,
              name: 'Item for ' + strTime,
              time: data.time,
              rate: data.rate,
              height: Math.max(50, Math.floor(Math.random() * 150))
            })
          })
        }
      }
      const newItems = {};
      Object.keys(items).forEach(key => { newItems[key] = items[key]; });
      // this.setState({
      //   items: newItems
      // });
      setitems(newItems)
    }, 1000);
  }


  const renderItem = (item: any) => {

    return (
      <View
        style={
          { backgroundColor: 'white' }
          // item.active == false ?
          //   { backgroundColor: 'white' }
          //   :
          //   { backgroundColor: colors.pinkOpacity }
        }
      >
        <TouchableOpacity
          // style={
          //   item.active == false ?
          //     styles.itemStyle
          //     : (null)
          // }
          style={
            { flex: 1, flexDirection: 'row', padding: 10, paddingTop: 10, paddingBottom: 20, borderBottomWidth: 0.25, borderBottomColor: '#acacac', borderTopWidth: 0.25, borderTopColor: '#acacac', backgroundColor: 'transparent', alignItems: "center" }
          }
          onPress={() => {
            bookSlot(item.id, item.active)
            if (item.active == false) {
              console.log('turning true');
              item.active = true
              console.log(item.active);
            }
            else if (item.active == true) {
              console.log('turning false');

              item.active = false
            }
          }}
        >
          <View>
            <View><Text style={styles.itemText}>{item.time}{item.name}</Text></View>
          </View>
          <View style={styles.avatarContainer}>
            <Text style={styles.itemText}>{item.rate}{item.active}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <>
      {/* <Container
        contentContainerStyle={styles.container}
        titleContainerStyle={{ height: 50, backgroundColor: 'transparent', alignItems: 'center', marginTop: 20, borderBottomColor: "#AFACAC", borderBottomWidth: 0.5 }}
        style={{ marginBottom: 0, paddingBottom: 0 }}
        title='Booking Appointment'
        headerLeft={{
          icon: 'back',
          onPress: () => navigation.goBack()
        }}
        navigation={navigation}
      > */}
      <Container
        contentContainerStyle={[styles.container, { backgroundColor: '#fffbfb' }]}
        style={{ marginBottom: 0, paddingBottom: 0, backgroundColor: '#fffbfb' }}
        titleContainerStyle={{ height: 50, backgroundColor: 'transparent', alignItems: 'center', marginTop: 20, borderBottomColor: "#AFACAC", borderBottomWidth: 0.5 }}
        title='Book Appointment'
        headerLeft={{
          icon: 'back',
          onPress: () => navigation.goBack()
        }}
        navigation={navigation}

      >

        <StatusBar translucent backgroundColor="white" barStyle="dark-content" />
        <View style={{ paddingTop: 15, paddingBottom: 15 }}>
          <Text style={{
            fontFamily: 'proximaNova-Bold',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: 12,
            lineHeight: 15,
            alignItems: 'center',
            textAlign: 'center',
            letterSpacing: 0.04,
            color: colors.black,
          }}>{moment().format("MMMM YYYY")}
            <Entypo
              name='select-arrows'
              size={15}
              style={{ paddingLeft: 25, marginLeft: 20 }}
              color='#a0a0a0'
            />
          </Text>
        </View>
        <Agenda

          items={
            {
              // '2020-09-03':[],
              // '2020-09-04': [],
              '2020-09-06': mockData.slots,
            }}
          markedDates={{
            '2020-09-8': { disabled: true, disableTouchEvent: true },
            '2020-09-10': { disabled: true, disableTouchEvent: true },
          }}

          loadItemsForMonth={(month) => loadItems(month)}
          onDayPress={(day) => { console.log('day pressed') }}
          onDayChange={(day) => { console.log('day changed') }}
          onCalendarToggled={(calendarOpened) => { console.log(calendarOpened) }}
          selected={moment().format('YYYY-MM-DD')}

          renderItem={renderItem}


          renderDay={(day, item) => { return (<View></View>); }}
          renderEmptyDate={() => { return (<View style={styles.emptyDate}></View>); }}
          renderEmptyData={() => {
            return (
              <View style={{ height: '100%', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                <View style={{ position: 'absolute', bottom: '20%', justifyContent: 'center', alignItems: 'center', alignContent: 'center', paddingTop: '10%' }}>
                  <Image
                    style={styles.noAppointmentImg}
                    source={images.noDetails}
                    resizeMode="contain"
                  />
                  <View style={{ justifyContent: 'center', marginTop: 10, alignItems: 'center', alignContent: 'center' }}>
                    <Text style={styles.noAppointmentTextTop} >No available appointments?</Text>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                      <Text style={styles.noAppointmentText}>You can check other dates or </Text>
                      <Text style={styles.jumpLink}>JUMP</Text>
                      <Text style={styles.noAppointmentText}> to the next </Text>
                    </View>
                    <Text style={styles.noAppointmentText}>available appointment.</Text>
                  </View>
                </View>

              </View>);
          }}
          rowHasChanged={(r1, r2) => {
            console.log('test');
            return (
              r1.time !== r2.time
            )
          }}
          hideKnob={false}
          // pastScrollRange={1}
          // futureScrollRange={1}
          renderKnob={() => {
            console.log('render knob')
            return (
              <Text
                style={{
                  fontFamily: 'proximaNova',
                  fontSize: 10,
                  lineHeight: 10,
                  color: '#a0a0a0',
                  width: '100%',
                  textAlign: 'right',
                  // backgroundColor:'red',

                }}
              >Show whole month
                <Ionicons
                  name='caret-down'
                  size={15}
                  style={{ paddingLeft: 5, marginTop: 5 }}
                  color='#a0a0a0'
                />
              </Text>
            );
          }}


          displayLoadingIndicator={false}
          theme={{
            agendaDayTextColor: 'yellow',
            agendaDayNumColor: '#000',
            agendaTodayColor: 'red',
            agendaKnobColor: '#000',
            backgroundColor: 'white',
            calendarBackground: '#fff',
            textSectionTitleColor: '#000',
            selectedDayBackgroundColor: colors.pinkOpacity,
            selectedDayTextColor: '#000',
            todayTextColor: '#000',
            dayTextColor: colors.black,
            textDisabledColor: '#ccc',
            dotColor: 'orange',
            selectedDotColor: colors.pinkOpacity,
            arrowColor: 'orange',
            monthTextColor: colors.greyDark,
            indicatorColor: colors.greyDark,
            textDayFontFamily: 'proximaNova',
            textMonthFontFamily: 'proximaNova',
            textDayHeaderFontFamily: 'proximaNova',
            textDayFontWeight: 'normal',
            textMonthFontWeight: 'normal',
            textDayHeaderFontWeight: '600',
            textDayFontSize: 10,
            textMonthFontSize: 10,
            textDayHeaderFontSize: 10,
          }}
          // agenda container style
          style={{ borderTopColor: '#AFACAC', borderTopWidth: 0.5, borderBottomWidth: 0.5, borderBottomColor: '#AFACAC', marginLeft: 15, marginRight: 15 }}
        />

      </Container>
      {cartItemCount > 0 ? (
        <View style={styles.BottomActionContainer}>
          <TouchableOpacity
            //style={{ position: 'absolute', left: 0, right: 0, bottom: 20 }}
            style={[styles.continue]}
            onPress={onContinue}
          >
            <Text style={[styles.continueText]}>{localization.continue}</Text>
          </TouchableOpacity>
        </View>
      ) : (null)}
    </>
  );



}

export default BookAppointment;
