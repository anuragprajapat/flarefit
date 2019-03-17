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
import Icon from 'react-native-vector-icons/FontAwesome';

class CustomHeader extends Component {
    

    constructor(props) {
        super(props)
        }
    render() {
        return (
        // <TouchableOpacity style={styles.postContainer} onPress={this.props.postPressed}>
        // <View style={styles.userInformations}>
        // <Image source={{uri: ‘this.props.post.userPicture’}} /> 
        // <Text>this.props.post.userName</Text>
        // </View>
        // <Text style={styles.status}>this.props.post.thoughts</Text></TouchableOpacity>
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#f7f7f7', '#f7f7f7']} style={{width:screenWidth,height:verticalScale(60),elevation:7,justifyContent:'center',}}>
            {   this.props.back &&
                <TouchableOpacity 
                onPress={this.props.back}
                style={{alignSelf:'flex-start',justifyContent:'center',padding:scale(15),width:scale(60)}}>
                    <Icon name="angle-left" size={verticalScale(24)} color="#4a4a4a" />
                </TouchableOpacity>
            }
            <View style={{alignSelf:'center',position:'absolute',flex:8}}>
                {/* {
                    this.props.title=="Home" &&
                    <Image 
                    resizeMode="contain"
                    style={{height:verticalScale(60),width:scale(60)}}
                    source={require('./../resources/images/logo_text.png')}
                    />
                }
                {
                    this.props.title!="Home" &&
                    <Text style={{fontFamily:'open_sans_bold',textAlign:'center',fontSize:verticalScale(20),color:'#4a4a4a'}}>{this.props.title}</Text>
                } */}
                <Text style={{fontFamily:'open_sans_bold',textAlign:'center',fontSize:verticalScale(20),color:'#4a4a4a'}}>{this.props.title}</Text>
                
            </View>
        </LinearGradient>
        )
        }
}
export default CustomHeader;