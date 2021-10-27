import React from 'react';
import {View,Text,FlatList, TouchableOpacity,StyleSheet} from 'react-native';
import data from '../assets/listoffices';

export default class List extends React.Component{

    constructor(){
        super();
        this.state={
            data:data.data.cities
        }
        console.log(this.state.data);
    }
  
render(){

return(
    <View>
        
              <FlatList 
              data={this.state.data}
              renderItem={({ item,i})=>
                  <View>
              <TouchableOpacity key={i} style={{borderColor:'black',borderWidth:1,margin:10,padding:10}}><Text>{item}</Text>
              </TouchableOpacity></View>
              } 
              />
         
            
        
    </View>
)

}
}
const styles=StyleSheet.create({
    item: {
        padding: 10,
        marginTop: 10,
        color:"white",
        backgroundColor: "purple",
        justifyContent: "center",
        height: 80,
        marginLeft: 10,
        marginRight: 10
      }
})
