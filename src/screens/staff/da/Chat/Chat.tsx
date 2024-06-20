import React, { useState, useCallback, useEffect } from 'react'
import { StatusBar, Image, View, ImageBackground, TouchableOpacity } from 'react-native';
import { Text, Button, SearchInput, Container, BottomNavBar } from '../../../../components';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import styles from './styles';
import { localization, screens, images } from '../../../../constants';
import { NavigationScreenProps } from 'react-navigation';
import colors from '../../../../styles/colors';
import { ScrollView } from 'react-native-gesture-handler';
import mainStyles from '../../../../styles/mainStyle';
import { GiftedChat, Actions, SystemMessage, Send, Bubble, InputToolbar, Time, Avatar } from 'react-native-gifted-chat';
import { widthPercentage, heightPercentage } from '../../../../utils/scaleUtil';
import moment from 'moment';

const Chat = ({ navigation }: NavigationScreenProps) => {

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hi James, your appointment has been confirmed',
        createdAt: new Date(),

        user: {
          _id: 2,
          name: '',
          // avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  const actionButtonOptions: Array<
    Array<React.ComponentProps<typeof Button>>
  > = [];



  const renderSend = (props) => {
    return (
      <Send
        {...props}
        containerStyle={{
          height: 60,
          width: 60,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          source={images.send}
          style={{
            width: 50,
            height: 40,
            position: 'relative',
            top: 8,
          }}
        />
      </Send>
    );
  };

  const renderActions = (props) => {
    return (
      <Actions
        {...props}
        containerStyle={{

          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          left: widthPercentage(100) - 120,
          bottom: 10,
          zIndex: 100,
          // backgroundColor:'red'
        }}
        icon={() => (
          <EntypoIcon
            style={{ color: '#e2e2e2' }}
            size={20}
            name='attachment'
          />
        )}
        options={{
          'Choose From Library': () => {
            console.log('Choose From Library');
          },
          Cancel: () => {
            console.log('Cancel');
          },
        }}
        optionTintColor="#222B45"
      />
    );
  };


  const renderBubble = (props) => {
    let sameUserInPrevMessage = false;
    if (props.previousMessage.user !== undefined && props.previousMessage.user) {
      props.previousMessage.user._id === props.currentMessage.user._id ? sameUserInPrevMessage = true : sameUserInPrevMessage = false;
    }

    let messageBelongsToCurrentUser = 1 == props.currentMessage.user._id;

    return (
      <View>
          <View
            style={messageBelongsToCurrentUser ? styles.messageTimeAndNameContainerRight : styles.messageTimeAndNameContainerLeft}
          >
            <Bubble
              {...props}
              renderTime={() => { return (null) }}
              //textStyle={[styles.rightUserText, styles.leftUserText]}
              textStyle={{
                right: {
                  color: '#fff',
                  fontFamily: 'proximaNova',
                  fontSize: 12,
                  lineHeight: 10,
                  padding: 5,
                  paddingTop: 10,
                  paddingLeft: 8,
                  textAlign:'left'
                },
                left: {
                  color: '#000',
                  fontFamily: 'proximaNova',
                  fontSize: 12,
                  lineHeight: 10,
                  padding: 5,
                  paddingLeft: 5,
                  paddingTop: 10,
                  paddingRight: 10
                }
              }}
              wrapperStyle={{
                right: {
                  backgroundColor: '#2e2959',
                  borderWidth: 0.5,
                  borderColor: '#c6c0c0',
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 2,
                    height: 5
                  },
                  shadowOpacity: 0.15,
                  shadowRadius: 6,
                  borderTopLeftRadius: 10,
                  borderBottomLeftRadius: 10,
                  borderTopRightRadius: 10,
                  borderBottomRightRadius: 0,
                  width:widthPercentage(100) - 180,
                },
                left: {
                  backgroundColor: 'white',
                  borderWidth: 0.5,
                  borderColor: '#c6c0c0',
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 2,
                    height: 5
                  },
                  shadowOpacity: 0.15,
                  shadowRadius: 6,
                  borderTopLeftRadius: 10,
                  borderBottomLeftRadius: 0,
                  borderTopRightRadius: 10,
                  borderBottomRightRadius: 10,
                  width:widthPercentage(100) - 180,
                }
              }}
            />
            <Text
             style={messageBelongsToCurrentUser ? [styles.timeRightStyle, styles.messageTime] : [styles.timeLeftStyle, styles.messageTime]}
            //props.currentMessage.createdAt
            >
              {moment(props.currentMessage.createdAt).format("HH:mm")}
            </Text>
          </View>
      </View>
    )
  }

  const renderAvatar = (props) => (
    <Avatar
      {...props}
      containerStyle={{ left: {}, right: {} }}
      imageStyle={{ left: { width: 0 }, right: {} }}
    />
  );

  const renderInputToolbar = (props) => {
    return (
      <InputToolbar {...props}
        containerStyle={{
          borderTopWidth: 0,
          backgroundColor: '#e2e2e2',
          //height:50,
          justifyContent: 'center',
          alignItem: 'center',
          alignContent: 'center',
          marginTop: 0,
          paddingTop: 0,
          paddingLeft: 10,
          paddingRight: 10
        }}
        primaryStyle={{
          backgroundColor: '#e2e2e2',
          justifyContent: 'center',
          alignItem: 'center',
          alignContent: 'center',
          marginTop: 0,
          paddingTop: 0,
          paddingBottom: 10,
          fontFamily:'proximaNova'
        }}
        style={{fontFamily:'proximaNova', paddingLeft:8}}
        placeholder=""
        placeholderTextColor="#fff"
      />
    )
  }


  return (
    <Container
      contentContainerStyle={[styles.container, { marginBottom: 0, paddingBottom: 0, height: heightPercentage(100) }]}
      titleContainerStyle={{ height: 70, zIndex: 99, backgroundColor: '#2e2959', alignItems: 'center', marginTop: 20, justifyContent: 'center' }}
      titleTextStyle={{ color: '#fff', paddingLeft: 60 }}
      style={{ marginBottom: 0, paddingBottom: 0 }}
      title='Extreme Barbers'
      headerLeft={{
        icon: 'back',
        iconColor: '#fff',
        onPress: () => navigation.goBack()
      }}

      navigation={navigation}
    >
      <TouchableOpacity style={{ position: "absolute", width: 51, height: 18, backgroundColor: "#F49B13", right: 27, display: "flex", justifyContent: "center", alignItems: "center", top: -35, zIndex: 100, borderRadius: 3 }}>
        <Text style={[styles.callButton]}>Call</Text>
      </TouchableOpacity>
      <View style={{ position: "absolute", left: 45, top: -47, zIndex: 100, }}>
        <Image source={images.vendorProfilePic1}
          style={{ height: 38, width: 38, borderRadius: 100 }}
        />
      </View>

      <StatusBar translucent backgroundColor="#2e2959" barStyle='light-content' />
      <ImageBackground source={images.chatBG}
        resizeMode='cover'
        style={{
          position:'relative',
          height:heightPercentage(100)+30,
          flex: 1,
          justifyContent: "center",
          width: widthPercentage(100),
          paddingTop: 20
        }}
      >

        <GiftedChat

          timeTextStyle={{
            fontFamily: 'proximaNova',
            fontSize: 15,
            lineHeight: 15,
          }}
          maxComposerHeight={10}
          renderAvatar={renderAvatar}
          // minComposerHeight={30}
          messagesContainerStyle={{ backgroundColor: 'transparent', width: widthPercentage(100), position: 'relative', bottom: 20 }}
          messages={messages}
          onSend={messages => onSend(messages)}
          alwaysShowSend={true}
          showUserAvatar={false}
          renderSend={renderSend}
          renderActions={renderActions}
          // bottomOffset={20}
          // minInputToolbarHeight={30}
          textInputStyle={{
            backgroundColor: 'white',
            borderRadius: 6,
            justifyContent: 'center',
            alignContent: 'center',
            alignItem: 'center',
            height: 33,
            paddingRight: 30
          }}
          renderBubble={renderBubble}
          //renderTime={() => { return (null) }}
          renderInputToolbar={renderInputToolbar}
          // renderTime={renderTime}
          user={{
            _id: 1,
          }}

        />
      </ImageBackground>
    </Container>
  );
};

export default Chat;
