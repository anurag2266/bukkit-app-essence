import React, { useState } from 'react';
import { View, ImageBackground, Image, StatusBar, TouchableOpacity } from 'react-native';
import { Text, Button, SearchInput, Container, BottomNavBar } from '../../../../components';
import styles from './styles';
import { localization, screens, images } from '../../../../constants';
import { TextVariant } from '../../../../components/Text';
import { NavigationScreenProps } from 'react-navigation';
import colors from '../../../../styles/colors';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Collapse, CollapseHeader, CollapseBody, AccordionList } from 'accordion-collapse-react-native';
import { ScrollView } from 'react-native-gesture-handler';
import mainStyles from '../../../../styles/mainStyle';
import { mockData } from '../../../../constants';
import { SearchBar } from 'react-native-elements';


const Category = ({ navigation }: NavigationScreenProps) => {
  const onActivateAccount = () => navigation.navigate(screens.auth.activation);
  const onLogMeIn = () => navigation.navigate(screens.staff.da.attendance);
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const [currentCat, setCurrentCat] = useState('')
  const [search, setSearch] = useState('');

  const [cartItemCount, setcartItemCount] = useState(0);


  const actionButtonOptions: Array<
    Array<React.ComponentProps<typeof Button>>
  > = [];

  const updateSearch = (search: string) => {
    setSearch(search);
  };

  const selectVendorList = () => navigation.navigate(screens.staff.da.vendors);

  const bookService = (id: any, activeStatus: boolean) => {
    let data = cartItemCount;
    // setSelectedItem(id);
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
    // <View style={styles.container}>
    <Container
      title=''
      titleContainerStyle={{ height: 10, backgroundColor: 'transparent' }}
      actionImageSource={images.flash}
      actionButtonOptions={actionButtonOptions[currentTabIndex]}
      BottomBarComponent={BottomNavBar}
      navigation={navigation}
    >
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <ScrollView style={[mainStyles.marginLR15, { marginTop: 10, marginBottom: 0 }]}>
        <View style={{ marginTop: 15, marginBottom: 10 }}>
          <Text
            style={[mainStyles.font16Semi, { textAlign: 'left', color: '#2e2959' }]}
          >
            {localization.categoryHeading}
          </Text>
        </View>
        <View>
          <SearchBar
            searchIcon={<FontAwesome5 name="search" style={{ fontSize: 16, color: "#AFACAC" }} />}
            platform="default"
            inputStyle={[mainStyles.font11Regular, { backgroundColor: colors.white, fontSize: 10.5, color: '#afacac', position: "relative", right: 12 }]}
            inputContainerStyle={{ backgroundColor: colors.white, height: 40, margin: 0, marginLeft: 0 }}
            containerStyle={{ backgroundColor: 'transparent', borderWidth: 1, borderRadius: 6, height: 45, alignItems: 'center', borderColor: "#AFACAC", padding: 0 }}
            placeholder="Search for a business or service"
            placeholderTextColor={'#AFACAC'}
            onChangeText={updateSearch}
            value={search}
            clearIcon={{
              iconStyle: { color: "#AFACAC", fontSize: 12.5 },
              containerStyle: { borderRadius: 15, borderColor: "#AFACAC", height: 15, width: 15, borderWidth: 1, },
            }}
          />
        </View>

        <View style={[mainStyles.marginTB15]}>
          <Text style={[mainStyles.font14Semi, { textAlign: 'left' }]}>{
            localization.categorySubHeading}
          </Text>
        </View>

        <View>
          {mockData.categoryList.map((data) => {
            return (

              <Collapse
                style={{ marginBottom: 18 }}
                onToggle={() => {
                  console.log('TEST==');
                 bookService(data.id, data.active)
                 if (data.active == false) {
                   data.active = true
                 }
                 else if (data.active == true) {
                   data.active = false
                 }
               }}
                >
                <CollapseHeader style={[{ padding: 0, borderRaius: 6, }]}
                
                >                  
                    <ImageBackground
                      source={data.image}
                      style={[styles.catImageSectionStyle, { overflow: 'hidden', justifyContent: 'flex-end', alignItems: 'flex-start' }]}
                      imageStyle={[styles.catImageStyle]}
                      resizeMode='cover'
                    >
                      <Text 
                      style={data.active==false?
                        [styles.collapseTitle]:[styles.collapseActiveTitle]}>
                        {data.title}
                      </Text>
                    </ImageBackground>
                </CollapseHeader>
                <CollapseBody style={{ maring: 0, padding: 0 }}>
                  <View style={{ flex: 1 }}>
                    <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', borderColor: '#c4c4c4', borderWidth: 0.5, borderTopWidth: 1, justifyContent: 'center', alignContent: 'center' }}>
                      {data.subCategory.map((sub) => {
                        if (data.subCategory.length > 0) {
                          return (
                            <Text
                              onPress={selectVendorList}
                              style={[mainStyles.font9Regular, { textTransform: 'capitalize', color: '#2e2959', width: '33.33%', paddingTop: 15, paddingBottom: 15, justifyContent: 'center', alignContent: 'center', alignItems: 'center', textAlign: 'center', borderBottomWidth: 0.5, borderColor: '#c4c4c4', padding: 0 }]}>
                              {sub.name}
                            </Text>
                          )
                        }
                      })}
                    </View>
                    <TouchableOpacity
                     style={{ justifyContent: 'center', alignContent: 'center', backgroundColor: colors.yellow, borderBottomLeftRadius: 6, borderBottomRightRadius: 6, height: 30 }}
                     onPress={selectVendorList}
                     >
                      <Text
                        
                        style={[mainStyles.font12Semi, { textAlign: 'center', color: 'white' }]}>
                        View All
                        </Text>
                    </TouchableOpacity>
                  </View>
                </CollapseBody>
              </Collapse>

            )
          })}
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

export default Category;
