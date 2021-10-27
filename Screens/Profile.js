import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default class Profile extends Component {
   
      constructor(props){
          super(props);
          this.state={
            name:"App",
            email:"app@app.com",
            phone:"1111111111"

          }
      }

   profile = async()=>{
     try{

      const jsonValue = await AsyncStorage.getItem('logg');
      
      var tempUser= JSON.parse(jsonValue);
          
        // console.log("Register User: ",registeredUser);
        console.log("JSON Value",tempUser);   
        this.setState({name:tempUser.name,email:tempUser.email,phone:tempUser.phone});
       
     }catch(error){
      console.log(error);

     }
   }

   componentDidMount(){
     this.profile();
   }


  render() {
    return (
      <View>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              
              <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.name}>{this.state.name}</Text>  
              </TouchableOpacity>              
              <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.name}>{this.state.email}</Text> 
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.name}>{this.state.phone}</Text> 
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer} onPress={()=>{
                     AsyncStorage.removeItem('logg')
                     const val = AsyncStorage.getItem('logg')
                     console.log(val);
                     this.props.navigation.navigate('Login');
                     
             } }><Text style={styles.name}>LogOut</Text>
              </TouchableOpacity>
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "purple",
    height:200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize:18,
    color:"white",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "purple"
  },
});
