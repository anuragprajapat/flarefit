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
        apples: 3840,
        bananas: 1920,
        cherries: 960,
        dates: 400,
    },
    {
        month: new Date(2015, 1, 1),
        apples: 1600,
        bananas: 1440,
        cherries: 960,
        dates: 400,
    },
    {
        month: new Date(2015, 2, 1),
        apples: 640,
        bananas: 960,
        cherries: 3640,
        dates: 400,
    },
    {
        month: new Date(2015, 3, 1),
        apples: 3320,
        bananas: 480,
        cherries: 640,
        dates: 400,
    },
]

const colors = [ '#44b273', '#8fc835', '#c7d800', '#f8e600' ]
const keys   = [ 'apples', 'bananas', 'cherries', 'dates' ]


import RNAccountKit from 'react-native-facebook-account-kit'

export default class UserHomeScreen extends React.Component {

    

    static navigationOptions = ({ navigation }) => ({
  
        title: 'Home',
        header:<CustomHeader title="Home" back={()=>navigation.goBack()}/>,
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
            <View style={{padding:scale(5),backgroundColor:'#f1f1f1',flex:1}}>
                <View style={{height:verticalScale(50),flexDirection:'row'}}>
                    <TouchableOpacity 
                        onPress={()=>this.props.navigation.navigate('Details')}
                        style={{flex:1,backgroundColor:'#28aeb4',marginRight:scale(4),alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontFamily:'open_sans_regular',color:'#fff',fontSize:verticalScale(16)}}>Daily</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex:1,backgroundColor:'#28aeb4',marginRight:scale(4),alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontFamily:'open_sans_regular',color:'#fff',fontSize:verticalScale(16)}}>Weekly</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex:1,elevation:4,backgroundColor:'#009ca4',marginRight:scale(4),alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontFamily:'open_sans_regular',color:'#fff',fontSize:verticalScale(16)}}>Monthly</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex:1,backgroundColor:'#28aeb4',marginRight:scale(4),alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontFamily:'open_sans_regular',color:'#fff',fontSize:verticalScale(16)}}>Yearly</Text>
                    </TouchableOpacity>
                </View>
                <View style={{height:verticalScale(30),flexDirection:'row',marginTop:verticalScale(5)}}>
                    <TouchableOpacity style={{flex:1,marginRight:scale(2),alignItems:'center',justifyContent:'center'}}>
                        <Icon name='angle-left' size={verticalScale(20)} color="#808080" />
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex:3,marginRight:scale(2),alignItems:'center',justifyContent:'center'}}>
                    <Text style={{fontFamily:'open_sans_bold',color:'#4a4a4a',fontSize:verticalScale(16)}}>October 2017</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex:1,marginRight:scale(2),alignItems:'center',justifyContent:'center'}}>
                        <Icon name='angle-right' size={verticalScale(20)} color="#808080" />
                    </TouchableOpacity>
                </View>

                <StackedAreaChart
                    style={ { height: verticalScale(220), paddingTop: verticalScale(10),paddingBottom:verticalScale(3) } }
                    data={ data }
                    keys={ keys }
                    colors={ colors }
                    curve={ shape.curveNatural }
                    showGrid={ true }
                />
                <View style={{backgroundColor:'white',elevation:4,borderRadius:4,margin:scale(5)}}>
                    <View style={{flexDirection:'row',paddingLeft:scale(20),paddingRight:scale(20),paddingTop:verticalScale(10),paddingBottom:verticalScale(10)}}>
                        <View style={{flex:7,}}>
                            <Text style={{fontFamily:'open_sans_regular',color:'#4a4a4a',fontSize:verticalScale(16)}}>Sunlight Exposure</Text>
                        </View>
                        <View style={{flex:3,}}>
                            <Text style={{fontFamily:'open_sans_regular',color:'#4a4a4a',fontSize:verticalScale(16)}}>9 SED</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',paddingLeft:scale(20),paddingRight:scale(20),paddingTop:verticalScale(10),paddingBottom:verticalScale(10),backgroundColor:'#f6f7f8'}}>
                        <View style={{flex:7,}}>
                            <Text style={{fontFamily:'open_sans_regular',color:'#4a4a4a',fontSize:verticalScale(16)}}>Daily Requirement</Text>
                        </View>
                        <View style={{flex:3,}}>
                            <Text style={{fontFamily:'open_sans_regular',color:'#4a4a4a',fontSize:verticalScale(16)}}>232 SED</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',paddingLeft:scale(20),paddingRight:scale(20),paddingTop:verticalScale(10),paddingBottom:verticalScale(10)}}>
                        <View style={{flex:7,}}>
                            <Text style={{fontFamily:'open_sans_regular',color:'#4a4a4a',fontSize:verticalScale(16)}}>Average Summ per day</Text>
                        </View>
                        <View style={{flex:3,}}>
                            <Text style={{fontFamily:'open_sans_regular',color:'#4a4a4a',fontSize:verticalScale(16)}}>63 SED</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',paddingLeft:scale(20),paddingRight:scale(20),paddingTop:verticalScale(10),paddingBottom:verticalScale(10),backgroundColor:'#f6f7f8'}}>
                        <View style={{flex:7,}}>
                            <Text style={{fontFamily:'open_sans_regular',color:'#4a4a4a',fontSize:verticalScale(16)}}>Forecast monthly payment</Text>
                        </View>
                        <View style={{flex:3,}}>
                            <Text style={{fontFamily:'open_sans_regular',color:'#4a4a4a',fontSize:verticalScale(16)}}>2120 SED</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',paddingLeft:scale(20),paddingRight:scale(20),paddingTop:verticalScale(10),paddingBottom:verticalScale(10),justifyContent:'center',}}>
                        <View style={{height:verticalScale(8),width:verticalScale(8),backgroundColor:'#4a4a4a',margin:verticalScale(6),borderRadius:verticalScale(4)}}/>
                        <View style={{height:verticalScale(8),width:verticalScale(8),backgroundColor:'#808080',margin:verticalScale(6),borderRadius:verticalScale(4)}}/>
                        <View style={{height:verticalScale(8),width:verticalScale(8),backgroundColor:'#808080',margin:verticalScale(6),borderRadius:verticalScale(4)}}/>
                        <View style={{height:verticalScale(8),width:verticalScale(8),backgroundColor:'#808080',margin:verticalScale(6),borderRadius:verticalScale(4)}}/>
                    </View>
                </View>
            </View>
        );
    }
}