import React from 'react'

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,

} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Icons from 'react-native-vector-icons/Ionicons'


class Registration extends React.Component {

constructor(props){
  super(props);

  this.state={
    registerUsers: [],
    registerUser:{id:0,name:"", email: "", phone: "", password: "",phone:"",blood:""}
  }
}

storeData = async() =>{
  if(this.state.registerUser.name!="" && this.state.registerUser.email!="" &&
  this.state.registerUser.password.length>6 && this.state.registerUser.phone.length==10){
    var tempUsers = [];
    if(this.state.registerUsers!=null){
      console.log(this.state.registerUser);
      tempUsers = this.state.registerUsers
      console.log(tempUsers);
    }
    this.state.registerUser.id=tempUsers.length+1;
    tempUsers.push(this.state.registerUser)
    this.setState({registerUsers:tempUsers})
try{
 const jsonValue = JSON.stringify(tempUsers);
 await AsyncStorage.setItem('registering',jsonValue);
 this.props.navigation.navigate('Login')
 console.log("Temp :",tempUsers);

}catch(error){
  console.log(error);
}
  }
}

    //    clearAllData() {
    //     AsyncStorage.getAllKeys()
    //         .then(keys => AsyncStorage.multiRemove(keys))
    //         .then(() => alert('success'));
    // }
  

  render(){
  return (
    <View style={styles.container}>
 
   
      <View style={styles.inputView}>
          <Icon name="email-outline" size={25} color="black" backgroundColor="#a6a6a6" style={{marginLeft:20}}/>
        <TextInput
          style={styles.TextInput}
          placeholder="UserName."
          placeholderTextColor="#003f5c"
          onChangeText={(name) => {
            this.state.registerUser.name=name
            this.setState({registerUser:this.state.registerUser})
          } }
          value={this.state.registerUser.name}
        />
      </View>
 
      <View style={styles.inputView}>
          <Icons name="person" size={25} color="black" backgroundColor="#a6a6a6" style={{marginLeft:20}}/>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => {
            this.state.registerUser.email=email
            this.setState({registerUser:this.state.registerUser})
          } }
          value={this.state.registerUser.email}
        />
      </View>
 
      <View style={styles.inputView}>
      <Icon name="account-lock-outline" size={25} color="black" backgroundColor="#a6a6a6" style={{marginLeft:20}}/>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}       
          onChangeText={(password) => {
            this.state.registerUser.password=password
            this.setState({registerUser:this.state.registerUser})
          } }      
          value={this.state.registerUser.password}
        />
      </View>
 

      <View style={styles.inputView}>
        <TextInput
          style={{width:260,height:45,borderWidth:1,borderRadius:30,fontWeight:'400',fontSize:15,padding:10}}
          placeholder="Phone Number."
          placeholderTextColor="#003f5c"
          keyboardType='numeric'
          onChangeText={(phone) => {
            this.state.registerUser.phone=phone
            this.setState({registerUser:this.state.registerUser})
          } }
          value={this.state.registerUser.phone}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={{width:260,height:45,borderWidth:1,borderRadius:30,fontWeight:'400',fontSize:15,padding:10}}
          placeholder="Blood Group."
          placeholderTextColor="#003f5c"       
          onChangeText={(blood) => {
            this.state.registerUser.blood=blood
            this.setState({registerUser:this.state.registerUser})
          } }     
          value={this.state.registerUser.blood}
        />
      </View>

 
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText} onPress={this.storeData}>Registration</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn} onPress={
        ()=>{
          this.props.navigation.navigate('Login');
        }
      }>
        <Text style={styles.loginText}>SignIn</Text>
      </TouchableOpacity>
    </View>
  );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    marginBottom: 40,
  },
 
  inputView: {
    flexDirection:'row',
    borderColor:'black',
    borderWidth:2,
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
 
  TextInput: {
    height: 45,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    borderRadius:30
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
 
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    borderColor:'purple',
    borderWidth:2
  },
  loginText:{
    color:'purple',
    fontWeight:'800'
  }
});

export default Registration