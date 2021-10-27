import React,{Component} from 'react';
import {View,Image,Text,StyleSheet} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';



var logo=require('../assets/images.png');

export default class Splash extends Component{

constructor(props){
    super(props);
    setTimeout(()=>{
this.props.navigation.navigate('HomeScreen');
    },5000);
}

    render(){
        return(
             <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                 <Image source={logo} style={{height:100,width:100}}></Image>
                 <Text style={styles.textContainer}>Covid Care</Text>
           <View>
               <FlatList>
                   <Text>Location wise Covid cases</Text>
                   <Text>Greater Noida</Text>
                   <Text>Bangalore</Text>
                   <Text>Hyderabad</Text>
                   <Text>See More</Text>
               </FlatList>
           </View>

             </View>
        )
    }
}
const styles = StyleSheet.create({
    textContainer:{
        margin:10,
        fontWeight:'600',
        fontSize:20,
        fontStyle:'normal',
        color:'purple',
        fontFamily:'lucida grande'}
    
})
