import React, { Component, version } from 'react';
import {
  Platform,
  Image,
  StyleSheet,
  Dimensions,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import styles from './../resources/styles';
import './../global';
import {scale,verticalScale} from './../resources/scale'
import { StackNavigator } from 'react-navigation';
const screenWidth= Dimensions.get('window').width;
import { NavigationActions } from 'react-navigation'

import RNAccountKit from 'react-native-facebook-account-kit'

export default class App extends React.Component {

  componentDidMount(){
   // this.waitForSplash();

   RNAccountKit.configure({
    responseType: 'token', // 'token' by default,
    titleType: 'login',
    initialAuthState: '',
    initialEmail: 'anu42686@gmail.com',
    initialPhoneCountryPrefix: '+91',
    initialPhoneNumber: '',
    facebookNotificationsEnabled: true, // true by default
    readPhoneStateEnabled: true, // true by default,
    receiveSMS: true, // true by default,
    countryWhitelist: ['IN'], // [] by default
    countryBlacklist: [], // [] by default
    defaultCountry: 'IN',
  
  })
  }

  initiateLogin(){
    var self=this;
    //self.props.navigation.navigate('Home');
    
    RNAccountKit.loginWithPhone()
    .then((token) => {
      if (!token) {
        console.log('Login cancelled')
      } else {
        console.log('Logged with phone',token);
        const resetAction = NavigationActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'Home'})
          ]
        })
        this.props.navigation.dispatch(resetAction)
        
        

        /*
        *Also save or update user's phone number as verified in Top Resumer DB
        */
        //self.props.navigation.navigate('Home');
      }
    })
    .catch((err)=>{
      console.log(err);
      //TODO : handle is login is cancelled

    });
  }

  waitForSplash(){
    var self=this;
    setTimeout(function(){
      self.props.navigation.navigate();
    },3000);
  }
  render() 
  {
    return (
      <View style={{flex:1,backgroundColor:'#303030',alignItems:"center",justifyContent:"center"}}>
      <View>
      <Image 
      resizeMode="contain"
      source={require('./../resources/images/logo.png')} 
      style={{width:scale(80),height:scale(80)}}/ >
      </View>
      <View>
      <Image 
      resizeMode="contain"
      source={require('./../resources/images/logo_text.png')} 
      style={{width:scale(120),marginTop:0,height:verticalScale(70)}}/ >
      </View>

      <TouchableOpacity 
      //onPress={()=>this.props.navigation.navigate('Signup')}
      onPress={()=>this.initiateLogin()}
      style={[styles.buttonStyle,{marginTop:verticalScale(200),backgroundColor:global.APP_ACCENT_COLOR}]}>
        <Text style={{fontFamily:'open_sans_bold',fontSize:verticalScale(14),color:'#fff'}}>Sign in</Text>
      </TouchableOpacity>


      </View>
    );
  }
}


