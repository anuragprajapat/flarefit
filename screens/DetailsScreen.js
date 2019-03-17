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
import { StackedAreaChart } from 'react-native-svg-charts'
import * as shape from 'd3-shape'


const data = [
    {
        month: new Date(2015, 0, 1),
        apples: 1000,
        bananas: 1300,
        cherries: 960,
        dates: 400,
    },
    {
        month: new Date(2015, 1, 1),
        apples: 500,
        bananas: 2500,
        cherries: 960,
        dates: 400,
    },
    {
        month: new Date(2015, 2, 1),
        apples: 640,
        bananas: 960,
        cherries: 1000,
        dates: 400,
    },
    {
        month: new Date(2015, 3, 1),
        apples: 1000,
        bananas: 480,
        cherries: 640,
        dates: 400,
    },
]

const colors = [ '#ff6a00', '#ff8c00', '#ffbe00', '#ffe900' ]
const keys  = [ 'apples', 'bananas', 'cherries', 'dates' ]

const data1 = [
    {
        month: new Date(2015, 0, 1),
        apples: 1300,
        bananas: 1300,
        cherries: 960,
        dates: 400,
    },
    {
        month: new Date(2015, 1, 1),
        apples: 1000,
        bananas: 400,
        cherries: 960,
        dates: 400,
    },
    {
        month: new Date(2015, 2, 1),
        apples: 640,
        bananas: 500,
        cherries: 1000,
        dates: 400,
    },
    {
        month: new Date(2015, 3, 1),
        apples: 1400,
        bananas: 480,
        cherries: 1578,
        dates: 400,
    },
]

const colors1 = [ '#44b273', '#8fc835', '#c7d800', '#f8e600' ]
const keys1   = [ 'apples', 'bananas', 'cherries', 'dates' ]


import RNAccountKit from 'react-native-facebook-account-kit'

export default class DetailsScreen extends React.Component {

    

    static navigationOptions = ({ navigation }) => ({
  
        title: 'Details',
        header:<CustomHeader title="Details" back={()=>navigation.goBack()}/>,
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
            <View style={{padding:scale(5),backgroundColor:'#f7f7f7',flex:1}}>
                <View style={{height:verticalScale(50),flex:1,}}>
                    <View style={{position:'absolute',marginTop:verticalScale(20),marginLeft:scale(20),width:scale(300),flexDirection:'row'}}>
                        <View style={{flex:2}}>
                            <Text style={{fontFamily:'open_sans_regular',color:'#ff6700',fontSize:verticalScale(25)}}>Sunlight Exposure</Text>
                            <Text style={{fontFamily:'open_sans_bold',color:'#ff6700',fontSize:verticalScale(25)}}>3 SED</Text>
                        </View>
                        <View style={{flex:1}}>
                            <Image 
                            resizeMode="contain"
                            style={{width:verticalScale(100),height:verticalScale(100),alignSelf:'flex-end'}}
                            source={require('./../resources/images/sun.png')}
                            />
                        </View>
                        
                        
                    </View>
                    
                    <StackedAreaChart
                        style={ { height: verticalScale(150), paddingTop: verticalScale(10),paddingBottom:verticalScale(3),marginTop:verticalScale(140) } }
                        data={ data }
                        keys={ keys }
                        colors={ colors }
                        curve={ shape.curveNatural }
                        showGrid={ false }
                    />
                </View>
                <View style={{height:verticalScale(50),flex:1,}}>
                <View style={{position:'absolute',marginTop:verticalScale(20),marginLeft:scale(20),width:scale(300),flexDirection:'row'}}>
                        <View style={{flex:2}}>
                            <Text style={{fontFamily:'open_sans_regular',color:'#009ca4',fontSize:verticalScale(25)}}>UV Radiation Dose</Text>
                            <Text style={{fontFamily:'open_sans_bold',color:'#009ca4',fontSize:verticalScale(25)}}>0.8 SED</Text>
                        </View>
                        <View style={{flex:1}}>
                            <Image 
                            resizeMode="contain"
                            style={{width:verticalScale(100),height:verticalScale(100),alignSelf:'flex-end'}}
                            source={require('./../resources/images/uv.png')}
                            />
                        </View>
                        
                        
                    </View>
                    
                    <StackedAreaChart
                        style={ { height: verticalScale(150), paddingTop: verticalScale(10),paddingBottom:verticalScale(3),marginTop:verticalScale(140) } }
                        data={ data1 }
                        keys={ keys1 }
                        colors={ colors1 }
                        curve={ shape.curveNatural }
                        showGrid={ false }
                    />
                </View>
            </View>
        );
    }
}