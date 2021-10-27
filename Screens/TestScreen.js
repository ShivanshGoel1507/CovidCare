import React from 'react';
import {Text,View,StyleSheet} from 'react-native'
import { Button, RadioButton } from 'react-native-paper';
import data from '../assets/data';

export default class TestScreen extends React.Component{

constructor(props){
    super(props);
    this.state={
        checked_1:"",
        checked_2:"",
    }
}

render(){
    return(
       <View style={styles.textContainer}>
           {/* <Text style={{fontWeight:'600',fontSize:18,color:'purple'}}>1. Do you have a cough</Text>
           <View style={styles.radioContainer}>
              
 <View style={{flexDirection:'row',margin:10,flex:1}}>
 <RadioButton 
  value="Yes"
  status={ this.state.checked_1 === 'Yes' ? 'checked' : 'unchecked' }
  onPress={() => this.setState({checked_1:'Yes'})}
 />
 <Text style={styles.textQues}>Yes</Text>
 </View>
 <View style={{flexDirection:'row',margin:10,flex:1}}>
<RadioButton 
  value="No"
  status={ this.state.checked_1 === 'No' ? 'checked' : 'unchecked' }
  onPress={() => this.setState({checked_1:"No"})}
 />
 <Text style={styles.textQues}>No</Text>
 </View>
</View>

<Text style={{fontWeight:'600',fontSize:18,color:'purple'}}>2. Are you suffering from headache?</Text>
 <View style={styles.radioContainer}>
              
 <View style={{flexDirection:'row',margin:10,flex:1}}>
 <RadioButton 
  value="Yes"
  status={ this.state.checked_2 === 'Yes' ? 'checked' : 'unchecked' }
  onPress={() => this.setState({checked_2:'Yes'})}
 />
 <Text style={styles.textQues}>Yes</Text>
 </View>
 <View style={{flexDirection:'row',margin:10,flex:1}}>
<RadioButton 
  value="No"
  status={ this.state.checked_2 === 'No' ? 'checked' : 'unchecked' }
  onPress={() => this.setState({checked_2:"No"})}
 />
 <Text style={styles.textQues}>No</Text>
 </View>
           </View> */}

      {data.data.questions.map(questions=>{
          return(
        <View style={styles.textContainer}>
            <Text style={styles.textQues} key={questions.ques}>{questions.ques}</Text>
        <View style={{ flexDirection: 'row', flex: 1 }}>
            <View style={{ flexDirection: 'row', flex: 1 }}>
                  <RadioButton
                      value="Yes"
                      status={this.state.checked_1 === 'Yes' ? 'checked' : 'unchecked'}
                      onPress={() => this.setState({ checked_1: 'Yes' })} />
                  <Text style={styles.textQues}>{questions.options.a}</Text>
              </View>
              <View style={{ flexDirection: 'row', flex: 1 }}>
                      <RadioButton
                          value="No"
                          status={this.state.checked_1 === 'No' ? 'checked' : 'unchecked'}
                          onPress={() => this.setState({ checked_1: "No" })} />
                      <Text style={styles.textQues}>{questions.options.b}</Text>
                  </View>
                  </View>
                  </View>
       )
     })}

   <Button color='white' style={styles.buttonContainer}>Submit</Button>        
       </View>
    )
}
}
const styles=StyleSheet.create({
   textContainer:{
       margin:10
   },
   radioContainer:{
      margin:10,
   },
   buttonContainer:{
       backgroundColor:'purple',
       bottom:0
   },
   textQues:{
       margin:5,
       fontWeight:'600',
       fontSize:18,
       color:'purple'}

})