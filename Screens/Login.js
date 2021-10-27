import { StatusBar } from "expo-status-bar";
import React from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,

} from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

class Login extends React.Component {

  constructor(props){
    super(props);
      this.state={
        email:"",
        password:"",
        loginUser:{}
      }
  }

  log = async () =>{

    try{
    const jsonValue = await AsyncStorage.getItem('registering');
      const registeredUser = JSON.parse(jsonValue);
      var temp=[];
      temp=registeredUser;
      console.log("Register User: ",registeredUser);
      console.log("JSON Value",jsonValue);      


       temp.map((t) =>{
        if(this.state.email==t.email && this.state.password == t.password){
          if(this.state.email==t.email){
        const value = {name:t.name,email:t.email,phone:t.phone,password:t.password,blood:t.blood}
            const v = JSON.stringify(value);
              this.state.loginUser=v;
               
            var temp_1=[];
           temp_1 = this.state.loginUser
            
          AsyncStorage.setItem('logg',this.state.loginUser);
          console.log(temp_1);
            console.log("Successfully Logged");        
            this.props.navigation.navigate('HomeScreen')
          }
          else{
            console.log("something wrong");
          }
        }

        else{
         
          console.log("Email & Password are incorrect");
        }
       })

    }catch(error){
      console.log(error);
    }
  }

//   clearAllData() {
//     AsyncStorage.getAllKeys()
//         .then(keys => AsyncStorage.multiRemove(keys))
//         .then(() => alert('success'));
// }

// componentDidMount(){
// // this.check();
// this.clearAllData();
// }
  render(){
 
  return (
    <View style={styles.container}>
 
      <StatusBar style="auto" />
      <View style={styles.inputView}>
          <Icon name="email-outline" size={25} color="black" backgroundColor="#a6a6a6" style={{marginLeft:20}}/>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => {
            this.setState({email:email})
       } }
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
            this.setState({password:password})
       } }            
        />
      </View>
 
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
 
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText} onPress={this.log()}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn} onPress={
        ()=>{
          this.props.navigation.navigate('Registration');
        }
      }>
        <Text style={styles.loginText}>Registration</Text>
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
    borderRadius:30,
    fontWeight:'400',
    fontSize:15
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

export default Login