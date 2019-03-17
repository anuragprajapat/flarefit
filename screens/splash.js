import React, { Component } from 'react';
import {
  Platform,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { AppRegistry } from 'react-native';
import  styles from './../resources/styles';
import { StackNavigator } from 'react-navigation';
import { TabNavigator } from 'react-navigation';
import {scale,verticalScale} from './../resources/scale';
import { NavigationActions } from 'react-navigation'
import './../global';
import Icon from 'react-native-vector-icons/FontAwesome';

import RNAccountKit from 'react-native-facebook-account-kit'

// screens

import LoginScreen from './Login';
import App from './App';
import SignupScreen from './Signup';
import OtpVerifyScreen from './OtpVerify';
import HomeScreen from './Home';
import UserHomeScreen from './UserHome';
import NotificationsScreen from './NotificationScreen';
import SettingsScreen from './SettingsScreen';
import DetailsScreen from './DetailsScreen';

// screens


export default class SplashScreen extends React.Component {

    componentDidMount(){
        var self=this;
        RNAccountKit.getCurrentAccessToken()
        .then((token) => {
            if(token==null){
                console.log("Access TOKEN not found...",err);
                const resetAction = NavigationActions.reset({
                    index: 0,
                    actions: [
                      NavigationActions.navigate({ routeName: 'App'})
                    ]
                  })
                   this.props.navigation.dispatch(resetAction)
            }
            else{
                console.log("Access Token Found...",token);
                self.getUserInfo();
                const resetAction = NavigationActions.reset({
                    index: 0,
                    actions: [
                      NavigationActions.navigate({ routeName: 'Home'})
                    ]
                  })
                  this.props.navigation.dispatch(resetAction)
            }
            
        })
        .catch((err)=>{
            console.log("Access TOKEN not found...",err);
            const resetAction = NavigationActions.reset({
                index: 0,
                actions: [
                  NavigationActions.navigate({ routeName: 'App'})
                ]
              })
              this.props.navigation.dispatch(resetAction)
        });
    }

    getUserInfo(){
        RNAccountKit.getCurrentAccount()
        .then((account) => {
          console.log("info----\n",account)
        })
        .catch(()=>{
            console.log("Cannot get user info");
        });
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
        </View>
    );
  }
}


const MyNav = TabNavigator({
  Home: {
    screen: UserHomeScreen,
    navigationOptions: {
        tabBarIcon: () => (
            <View style={{}}>
            <Icon name="home" size={verticalScale(25)} color="#fff" />
            </View>
        )
    }  
  },
  Notifications: {
    screen: NotificationsScreen,
    navigationOptions: {
        tabBarLabel:'Notification',
        tabBarIcon:({ tintColor }) => (<Icon name='bell' size={verticalScale(20)} color={tintColor} />)
    }  
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
        tabBarIcon: () => (
            <Icon name="cog" size={verticalScale(25)} color="#fff" />
        )
    }  

  },
}, {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarVisible:false,
  iconStyle:{
    color:'red',
    backgroundColor:'red'
  },
  tabStyle:{
    backgroundColor:'#fff',
    color:'red'
  },
  
  tabBarOptions: {
    showIcon:true,
    upperCaseLabel:false,
    activeTintColor: '#fff',
    labelStyle: {
      fontSize: verticalScale(12),
      color:'#fff',
      fontFamily:'open_sans_bold',
      marginTop:verticalScale(0)
    },
    indicatorStyle:{
        backgroundColor: '#4a4a4a',
        height:verticalScale(60)
    },
    style: {
        height:verticalScale(60),
        backgroundColor: '#5e5e5e',
        color:'red',
        elevation:3
        //alignItems:'center',
        //justifyContent:'center'
    },
  }  
});


const RootNav = StackNavigator({
    Splash: {screen: SplashScreen,
        navigationOptions: {
            header: null
        }   
    },
    App: {screen: App,
        navigationOptions: {
            header: null
        }
    },
    Login:{screen:LoginScreen,
        navigationOptions: {
            header: null
        }
    },
    Signup: {screen: SignupScreen,
        navigationOptions: {
            header: null
        }
    },
    Otp: {screen: OtpVerifyScreen,
        navigationOptions: {
            header: null
        }
    },
    Home: {screen: HomeScreen},
    Dashboard: {screen: MyNav},
    Details: {screen: DetailsScreen},
  });



AppRegistry.registerComponent('ryzume', () => RootNav);