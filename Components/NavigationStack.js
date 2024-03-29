import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';


import Splash from '../Screens/SplashScreen';
import Login from '../Screens/Login';
import Registration from '../Screens/Registration';
import HomeScreen from '../Screens/HomeScreen';
import TestScreen from '../Screens/TestScreen';
import List from '../Screens/List';
import Profile from '../Screens/Profile'

const NavigationStack=createStackNavigator({
  Splash:{screen:Splash,navigationOptions:{headerShown:false}},
  HomeScreen:{screen:HomeScreen,navigationOptions:{headerShown:false}},
  Login:{screen:Login,navigationOptions:{headerShown:false}},
  Registration:{screen:Registration,navigationOptions:{headerShown:false}},
  TestScreen:{screen:TestScreen},
  List:{screen:List},
  ProfileScreen:{screen:Profile}
});


export default createAppContainer(NavigationStack);