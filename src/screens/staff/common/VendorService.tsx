import React, { useState, useEffect } from 'react';
import { TabbedContainer, SummaryBox, TabGroup, TextInput, Button, ListItem } from '../../../components';
import { Hotspot, StudentLegacy, Status } from '../../../constants/types';
import { Text, View, ScrollView, Picker, FlatList, Modal, Alert, TouchableHighlight, Image, TouchableOpacity } from 'react-native';
import { mockData, localization, images } from '../../../constants';
import Entypo from 'react-native-vector-icons/Entypo';
import locStyle from './styles';
import colors from 'styles/colors';
import styles from 'styles/textStyles';
import { Collapse, CollapseHeader, CollapseBody, AccordionList } from 'accordion-collapse-react-native';
import mainStyles from '../../../styles/mainStyle';
import RadioForm, { RadioButtonInput, RadioButton, RadioButtonLabel } from 'react-native-simple-radio-button';


const radio_props = [

  { label: 'First available', value: 0 },
  { label: 'John Doe', value: 1 },
  { label: 'John Doe', value: 2 },
  { label: 'John Doe', value: 3 },

];
type VendorServiceProps = {
  onPress?: () => void;
};

const VendorService = ({
  onPress
}: VendorServiceProps) => {

  const [bookStatus, setbookStatus] = useState('Book');
  const [liadtData, setListData] = useState(mockData.vendorServices)
  const [selectedItem, setSelectedItem] = useState(0);
  const [bookActive, setbookActive] = useState(false);
  const [IfAnyactive, setIfAnyactive] = useState([]);
  const [cartItemCount, setcartItemCount] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    setbookActive(false);
    setcartItemCount(0);
    setSelectedItem(0);
    setListData(mockData.vendorServices)
}, []);

  const onPressIcon = (id: any) => {
    if (modalVisible == true) {
      setModalVisible(!modalVisible)
    }
  };

  //  useEffect(() => {
  //   const _data=mockData.vendorServices;

  // }, []);
  //  _data.map((data) => {
  // +data.services.map((item)=>{
  //     console.log(item);
  // let result=0;
  //     for(let x = 1; 11 >= x; x++){

  //       if(item.active == true){
  //         result++;
  //       }
  //     }

  //     console.log(result+'  TOTAL COUNT==== ')
  //     //return result;

  // })
  //  });

  const bookService = (id: any, activeStatus: boolean) => {
    let data = cartItemCount;
    setSelectedItem(id);
    if (activeStatus == false) {
      setcartItemCount(cartItemCount + 1);
    }
    else {
      if (cartItemCount > 0) {
        setcartItemCount(cartItemCount - 1);

      }
    }
  }

  return (
    <>

      <View style={{ backgroundColor: colors.white, flex: 1, height: "100%" }}>
        <ScrollView style={[locStyle.scroll, { backgroundColor: 'transparent' }]} nestedScrollEnabled={true}>
          <View style={[mainStyles.paddingLR20, { marginBottom: 0 }]}>
            <ScrollView
              nestedScrollEnabled={true}
              style={locStyle.listService}
              showsVerticalScrollIndicator={false}
            >
              <>
                {liadtData.map((data) => {
                  return (
                    <View>
                      {data.type == 'popular' ?
                        (
                          <Text style={locStyle.sectionHeading}>Popular Services</Text>
                        ) : (
                          <Text style={locStyle.sectionHeading}>Other Services</Text>
                        )
                      }

                      {data.services.map((sub, index) => {

                        return (

                          <Collapse
                            style={
                              sub.active == false ?
                                { paddingLeft: 5, paddingRight: 5, borderTopColor: '#c4c4c4', borderTopWidth: 0.5 }
                                : { paddingLeft: 5, paddingRight: 5, borderTopColor: '#c4c4c4', borderTopWidth: 0.5, backgroundColor: colors.pinkOpacity }
                            }
                            onToggle={() => {
                              if (bookActive == false) {
                                setbookActive(true)
                              } else {
                                setbookActive(false)
                              }
                            }}>
                            <CollapseHeader style={[{ padding: 0, paddingTop: 15, paddingBottom: 12, maring: 0 }]}>
                              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                                <View style={{ flex: 2, flexDirection: 'row', paddingTop: 0, paddingBottom: 0, justifyContent: 'flex-start', alignContent: 'center' }}>

                                  <Text
                                    // style={locStyle.nameStyle}

                                    style={
                                      sub.active == false ?
                                        locStyle.nameStyle
                                        : locStyle.activeNameStyle
                                    }
                                  >{sub.name}</Text>
                                  <Text
                                    style={locStyle.timeStyle}
                                  > ({sub.time})</Text>

                                  <Text
                                    style={
                                      // sub.active == true  && modalVisible== false? 
                                      locStyle.spaceStyle
                                      //  : { display: 'none' } 
                                    }
                                  >
                                    {sub.active == true && modalVisible == false ? ('|') : (null)
                                    }

                                  </Text>
                                  <Text
                                    style={
                                      // sub.active == true  && modalVisible== false?
                                      locStyle.activeBookWidthStyle
                                      //  : locStyle.bookWidthStyle
                                    }
                                  >
                                    {sub.active == true && modalVisible == false ? (
                                      'With John Doe') : (null)}
                                  </Text>
                                </View>
                                <View style={{ flex: 1, paddingTop: 0, paddingBottom: 0, flexDirection: 'row', justifyContent: 'center', alignContent: 'center' }}>
                                  {sub.active == true ? (
                                    <View style={[{
                                      flex: 1,
                                      //position: 'relative', bottom: -1, right: 0
                                    }]}>
                                      <Text
                                        style={[locStyle.bookAction, locStyle.bookActionContainer]}
                                        onPress={() => {
                                          {
                                            sub.active == true ?
                                              setModalVisible(false)
                                              : setModalVisible(true)
                                          }
                                          bookService(sub.id, sub.active)
                                          if (sub.active == false) {
                                            sub.active = true
                                          }
                                          else if (sub.active == true) {
                                            sub.active = false
                                          }
                                        }}
                                      // onPress={ console.log('ID RECEIVED==== ' + sub.id)}
                                      >
                                        REMOVE
                                  </Text>
                                    </View>
                                  ) : (<View style={[{ flex: 1 }]}></View>)}

                                  {sub.fix == false ? (
                                    <View style={[{
                                      flex: 1,
                                      justifyContent: 'center',
                                      alignContent: 'flex-end',
                                      alignItems: 'flex-end',
                                    }]}>
                                      <Text
                                        style={locStyle.fromText}
                                      >From </Text>
                                    </View>
                                  ) : (
                                      null
                                      // <View style={[{ flex: 1 }]}></View>
                                    )}
                                  <View style={[{
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignContent: 'center',
                                    alignItems: 'flex-start',
                                  }]}>
                                    <Text style={locStyle.nameStyle}> £{sub.price}</Text>
                                  </View>
                                </View>
                              </View>
                            </CollapseHeader>
                            <CollapseBody
                              style={{ maring: 0, padding: 0, paddingTop: 0, flexDirection: 'row', }}
                            >
                              <View style={{ flex: 1, paddingTop: 0, paddingBottom: 15 }}>
                                <Text
                                  style={locStyle.descriptionText}
                                >{sub.description} </Text>
                              </View>
                              <View style={[{ flex: 1, position: 'relative', bottom: 28, right: 68, alignItems: 'flex-end' }]}>
                                <Text
                                  style={[locStyle.bookAction, locStyle.bookActionContainer]}
                                  onPress={() => {
                                    {
                                      sub.active == true ?
                                        setModalVisible(false)
                                        : setModalVisible(true)
                                    }
                                    bookService(sub.id, sub.active)
                                    if (sub.active == false) {
                                      sub.active = true
                                    }
                                    else if (sub.active == true) {
                                      sub.active = false
                                    }
                                  }}
                                // onPress={ console.log('ID RECEIVED==== ' + sub.id)}
                                >{sub.active == true ?
                                  'REMOVE' : 'BOOK'
                                  }</Text>
                              </View>
                            </CollapseBody>
                          </Collapse>
                        )
                      })}

                    </View>
                  )
                })}
              </>
            </ScrollView>
          </View>
        </ScrollView>
        {/* {cartItemCount > 0 ? (
          <View style={locStyle.BottomActionContainer}>
            <TouchableOpacity
              //style={{ position: 'absolute', left: 0, right: 0, bottom: 20 }}
              style={[locStyle.continue]}
              onPress={onPress}
            >
              <Text style={[locStyle.continueText]}>{localization.continue}</Text>
            </TouchableOpacity>
          </View>
        ) : (null)} */}

      </View>

      {cartItemCount > 0 ? (
        <View style={locStyle.BottomActionContainer}>
          <TouchableOpacity
            //style={{ position: 'absolute', left: 0, right: 0, bottom: 20 }}
            style={[locStyle.continue]}
            onPress={onPress}
          >
            <Text style={[locStyle.continueText]}>{localization.continue}</Text>
          </TouchableOpacity>
        </View>
      ) : (null)}
      {/* MODAL LAYOUT */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          //Alert.alert("Modal has been closed.");
        }}
      >
        <View style={[locStyle.centeredView]}>
          <View style={locStyle.modalView}>
            <TouchableOpacity
              style={{ position: "absolute", top: 20, right: 20 }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Entypo
                color={colors.black}
                size={16}
                name='cross'
              />
            </TouchableOpacity>
            <View>
              <Text style={[locStyle.modelListText]}>{localization.appointmentWith}:</Text>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  onPressIcon;
                }}
              >
                <View style={[locStyle.appointmentList]}>
                  <RadioForm
                    animation={true}
                    style={[locStyle.appointmentList]}
                  >
                    {
                      radio_props.map((obj, i) => (
                        <RadioButton labelHorizontal={true} key={i} >
                          <RadioButtonInput
                            obj={obj}
                            index={i}
                            // isSelected={this.state.value3Index === i}
                            onPress={() => { setModalVisible(!modalVisible); }}
                            borderWidth={1}
                            buttonInnerColor={'#2E2959'}
                            buttonOuterColor={'#2E2959'}
                            buttonColor={'#2E2959'}
                            buttonSize={7}
                            buttonOuterSize={16}
                            buttonStyle={{}}
                            buttonWrapStyle={{ marginBottom: 15 }}
                          />
                          <RadioButtonLabel
                            obj={obj}
                            index={i}
                            labelHorizontal={true}
                            onPress={() => { setModalVisible(!modalVisible); }}
                            labelStyle={[locStyle.textStyle]}
                            labelWrapStyle={{}}
                          />
                        </RadioButton>
                      ))
                    }
                  </RadioForm>
                </View>
              </TouchableOpacity>

            </View>
          </View>
        </View>
      </Modal>

    </>
  );
};

export default VendorService;
