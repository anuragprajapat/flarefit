import React, { Component, version } from 'react';
import {
  Platform,
  Image,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Text,
  View
} from 'react-native';
import  styles from './../resources/styles';
import { StackNavigator } from 'react-navigation';
import {scale,verticalScale} from './../resources/scale';
import './../global';
import LinearGradient from 'react-native-linear-gradient';
const screenWidth= Dimensions.get('window').width; 
var activateOtp1=true,activateOtp2=false,activateOtp3=false,activateOtp4=false;
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomHeader from './../customModules/header';
import Gems from './../customModules/cardview';

import RNAccountKit from 'react-native-facebook-account-kit'

export default class HomeScreen extends React.Component {

    static navigationOptions = ({ navigation }) => ({
  
        title: 'Home',
        header:<CustomHeader title="Choose your device" back={()=>navigation.goBack()}/>,
        });
    

    constructor(props){
        super(props);
        this.state={

        }
    }

    logout(){
        var self=this;
        RNAccountKit.logout()
        .then(() => {
          console.log('Logged out');
          self.props.navigation.navigate("App");
        })
        .catch(()=>{
            console.log('cannot Log out');
        });
    }

    render() 
    {
        return (
        <View style={{flex:1,backgroundColor:global.WHITE_SOMKE,padding:scale(12)}}>


        {/* <TouchableOpacity onPress={()=>this.logout()}>
            <Text>Logout</Text>
        </TouchableOpacity> */}
        <TouchableOpacity 
        onPress={()=>this.props.navigation.navigate('Dashboard')}
        style={{justifyContent:'space-around',backgroundColor:'#ccc',height:verticalScale(100),flexDirection:'row'}} >
            <View style={{flex:4,alignItems:'center',justifyContent:'center'}}>
                <Image 
                resizeMode="contain"
                source={require('./../resources/images/logo.png')} 
                style={{width:verticalScale(100),height:verticalScale(100),alignSelf:'flex-start'}}/ >
            </View>
            <View style={{flex:6,alignItems:'flex-start',justifyContent:'center'}}>
                <Text style={{fontFamily:'open_sans_bold',fontSize:verticalScale(20)}}>Device 1</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={{justifyContent:'space-around',backgroundColor:'#ccc',height:verticalScale(100),flexDirection:'row',marginTop:verticalScale(10)}} >
            <View style={{flex:4,alignItems:'center',justifyContent:'center'}}>
                <Image 
                resizeMode="contain"
                source={require('./../resources/images/logo.png')} 
                style={{width:verticalScale(100),height:verticalScale(100),alignSelf:'flex-start'}}/ >
            </View>
            <View style={{flex:6,alignItems:'flex-start',justifyContent:'center'}}>
                <Text style={{fontFamily:'open_sans_bold',fontSize:verticalScale(20)}}>Device 2</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={{justifyContent:'space-around',backgroundColor:'#ccc',height:verticalScale(100),flexDirection:'row',marginTop:verticalScale(10)}} >
            <View style={{flex:4,alignItems:'center',justifyContent:'center'}}>
                <Image 
                resizeMode="contain"
                source={require('./../resources/images/logo.png')} 
                style={{width:verticalScale(100),height:verticalScale(100),alignSelf:'flex-start'}}/ >
            </View>
            <View style={{flex:6,alignItems:'flex-start',justifyContent:'center'}}>
                <Text style={{fontFamily:'open_sans_bold',fontSize:verticalScale(20)}}>Device 3</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={{justifyContent:'space-around',backgroundColor:'#ccc',height:verticalScale(100),flexDirection:'row',marginTop:verticalScale(10)}} >
            <View style={{flex:4,alignItems:'center',justifyContent:'center'}}>
                <Image 
                resizeMode="contain"
                source={require('./../resources/images/logo.png')} 
                style={{width:verticalScale(100),height:verticalScale(100),alignSelf:'flex-start'}}/ >
            </View>
            <View style={{flex:6,alignItems:'flex-start',justifyContent:'center'}}>
                <Text style={{fontFamily:'open_sans_bold',fontSize:verticalScale(20)}}>Device 4</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={{justifyContent:'space-around',backgroundColor:'#ccc',height:verticalScale(100),flexDirection:'row',marginTop:verticalScale(10)}} >
            <View style={{flex:4,alignItems:'center',justifyContent:'center'}}>
                <Image 
                resizeMode="contain"
                source={require('./../resources/images/logo.png')} 
                style={{width:verticalScale(100),height:verticalScale(100),alignSelf:'flex-start'}}/ >
            </View>
            <View style={{flex:6,alignItems:'flex-start',justifyContent:'center'}}>
                <Text style={{fontFamily:'open_sans_bold',fontSize:verticalScale(20)}}>Device 5</Text>
            </View>
        </TouchableOpacity>

        </View>
        );
    }
}