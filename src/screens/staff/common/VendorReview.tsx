import React, { useState } from 'react';
import { TabbedContainer, SummaryBox, TabGroup, TextInput, Button, ListItem } from '../../../components';
import { Hotspot, StudentLegacy, Status } from '../../../constants/types';
import { Text, View, ScrollView, Picker, FlatList, Image } from 'react-native';
import { mockData, localization, images } from '../../../constants';
import AntDesign from 'react-native-vector-icons/AntDesign';
import locStyle from './styles';
import colors from 'styles/colors';
import styles from './styles';
import mainStyles from './../../../styles/mainStyle';
import { Collapse, CollapseHeader, CollapseBody, AccordionList } from 'accordion-collapse-react-native';


type VendorReviewProps = {
};

const VendorReview = ({
}: VendorReviewProps) => {


  return (
    <>

      <View style={{ backgroundColor: 'red', flex: 1, height: "100%" }}>
        <ScrollView style={locStyle.scroll} nestedScrollEnabled={true}

        >
          {/* <StatusBar backgroundColor={colors.redDark} /> */}
          <ScrollView style={locStyle.reviewService} nestedScrollEnabled={true}>
            <View style={[styles.reviewContainer, mainStyles.marginLR20]}>
              <Text style={[styles.ratingText]}>{localization.ratingNum}</Text>
              <View>
                <Image
                  style={styles.ratingIcon}
                  source={images.reviewsRating}
                  resizeMode='contain'
                />
                <Text style={[styles.reviewBottomText]}>{localization.basedOn}</Text>
              </View>
            </View>
            <View style={[styles.reviewerContainer, mainStyles.marginLR20]}>
              <View style={[styles.reviewImageContainer]}>
                <Image
                  style={styles.reviewerImage}
                  source={images.customerImage}
                  resizeMode="contain"
                />
              </View>
              <View style={[styles.reviewerNameBox]}>
                <Text style={[styles.reviewerName]}>{localization.customerName}</Text>
                <Text style={[styles.reviewDate]}>{localization.reviewDate}</Text>
                <Text style={[styles.customerRequirement]}>{localization.job}</Text>
              </View>
            </View>
            <View style={[styles.customerReview, mainStyles.paddingLR20]}>
              <Text style={[styles.customerReviewText]}>{localization.reviewText} </Text>
            </View>
            <View style={[styles.reviewAccordian, mainStyles.paddingLR20]}>
              <Image
                style={styles.customerReviews}
                source={images.reviewsRating}
                resizeMode='stretch'
              />

            </View>
            <Collapse
              onToggle={() =>
                console.log('ETST')
              }
              style={{
                position: 'relative',
                bottom: 18
              }}
            >
              <CollapseHeader style={[{
                padding: 2,
                maring: 0,
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                textAlign: 'right',
                paddingRight: 12

              }]}>
                <View style={[styles.readMoreContainer]}>
                  <Text style={[styles.readMoreText, { textAlign: 'right' }]}>{localization.readMore}</Text>
                  <AntDesign
                    style={[styles.readMoreIcon]}
                    size={10}
                    name='caretdown'
                  />
                </View>
              </CollapseHeader>
              <CollapseBody>
                <View style={[styles.reviewCollpasContainer, mainStyles.paddingLR20]}>
                  <View style={{flex:1, flexDirection:'row'}}>
                    <View>
                      <Image
                        style={[styles.reviewCollpasImages]}
                        source={images.slider1}
                        resizeMode='stretch'
                      />
                    </View>
                    <View>
                      <Image
                        style={[styles.reviewCollpasImages]}
                        source={images.slider1}
                        resizeMode='stretch'
                      />
                    </View>
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
              </CollapseBody>
            </Collapse>
          </ScrollView>

        </ScrollView>
      </View>
    </>
  );
};

export default VendorReview;
