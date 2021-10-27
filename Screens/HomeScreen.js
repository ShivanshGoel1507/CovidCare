import React from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const logo = require('../assets/images.png')

class HomeScreen extends React.Component{


    checkData= async() =>{
        const jsonValue = await AsyncStorage.getItem('registering');
            const registeredUsers = JSON.parse(jsonValue);
            console.log("Register User: ",registeredUsers);
            console.log("JSON Value",jsonValue);
            this.state.registerUsers = registeredUsers;
          }
          
          check = async () =>{
            var value = await AsyncStorage.getItem('logg');
            const v = JSON.parse(value);
             console.log(v);
            if(v!=null)
          {
            this.props.navigation.navigate('HomeScreen');
            
          } 
          else{
            this.checkData();
            this.props.navigation.navigate('Login');
          }
          }
      
componentDidMount(){
this.check();
}

    render(){
        return(
           <View>
               
            <View style={styles.covidText}>
                <Text style={styles.text} onPress={()=>{
                    this.props.navigation.navigate('ProfileScreen')
                }}>Take a Covid Test</Text>
                <Image source={logo} style={{height:100,width:100,margin:20}}></Image>
            </View>
           </View>
        )
    }
}

const styles=StyleSheet.create({
    covidText:{
        alignItems:'center',
        marginTop:100
    },
    text:{
        fontSize:25,
        fontWeight:'800',
        color:'purple',
        marginTop:100
    }
})
export default HomeScreen 