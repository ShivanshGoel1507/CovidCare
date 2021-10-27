import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import NavigationStack from "./Components/NavigationStack";


export default class App extends React.Component{
render(){
    return(
        <NavigationContainer>
            <NavigationStack />
        </NavigationContainer>
        )
}
}
 